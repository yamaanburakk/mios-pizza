'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

// PDF.js worker'ı ayarlayın
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PDFViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loadingPages, setLoadingPages] = useState<Set<number>>(new Set());

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const onPageLoadStart = useCallback(() => {
    setLoadingPages(prev => new Set(prev).add(pageNumber));
  }, [pageNumber]);

  const onPageLoadSuccess = useCallback(() => {
    setLoadingPages(prev => {
      const newSet = new Set(prev);
      newSet.delete(pageNumber);
      return newSet;
    });
  }, [pageNumber]);

  const isPageLoading = loadingPages.has(pageNumber);

  const goToPrevPage = useCallback(() => {
    setPageNumber(prev => prev - 1);
  }, []);

  const goToNextPage = useCallback(() => {
    setPageNumber(prev => prev + 1);
  }, [numPages]);

  const scale = useMemo(() => {
    if (typeof window === 'undefined') return 0.8;
    return window.innerWidth > 640 ? 0.8 : 0.5;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4">
        {/* PDF Görüntüleyici */}
        <div className="relative w-full max-w-4xl">
          <div className="bg-transparent rounded-xl overflow-hidden">
            <div className="relative flex items-center justify-center" style={{ minHeight: '600px' }}>
              <Document
                file="/MENU.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={null}
                error={
                  <div className="text-red-600 p-4 text-center">
                    PDF yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.
                  </div>
                }
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <Page
                    key={pageNumber}
                    pageNumber={pageNumber}
                    className="max-w-full"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    scale={scale}
                    onLoadStart={onPageLoadStart}
                    onRenderSuccess={onPageLoadSuccess}
                  />
                  {isPageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 min-h-[600px]">
                      <div className="text-red-600 text-lg font-semibold">Sayfa yükleniyor...</div>
                    </div>
                  )}
                </div>
              </Document>
            </div>
          </div>
        </div>

      {/* Navigasyon Butonları */}
      {numPages > 0 && (
        <>
          <div className="mt-6 flex flex-row items-center gap-4">
            <motion.button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="px-6 py-3 bg-red-600 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-red-700 transition font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={pageNumber > 1 ? { scale: 1.05 } : {}}
              whileTap={pageNumber > 1 ? { scale: 0.95 } : {}}
            >
              <span className="text-xl">←</span>
              <span className="hidden sm:inline">Önceki</span>
            </motion.button>
            
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-lg shadow-md border border-gray-200">
              <span className="text-gray-700 font-bold text-lg">
                {pageNumber}
              </span>
              <span className="text-gray-400 font-light">/</span>
              <span className="text-gray-500 font-medium">{numPages}</span>
            </div>
            
            <motion.button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="px-6 py-3 bg-red-600 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-red-700 transition font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={pageNumber < numPages ? { scale: 1.05 } : {}}
              whileTap={pageNumber < numPages ? { scale: 0.95 } : {}}
            >
              <span className="hidden sm:inline">Sonraki</span>
              <span className="text-xl">→</span>
            </motion.button>
          </div>

          {/* Sayfa Göstergeleri (dots) */}
          <div className="mt-4 flex gap-2">
            {[...Array(numPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPageNumber(index + 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  pageNumber === index + 1 
                    ? 'bg-red-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Sayfa ${index + 1}'e git`}
              />
            ))}
          </div>

          {/* Klavye Kısayol Bilgisi */}
          <div className="hidden sm:block mt-4 text-center text-gray-500 text-sm">
            <p>💡 Sayfa göstergelerine tıklayarak da geçiş yapabilirsiniz</p>
          </div>
        </>
      )}
    </div>
  );
}