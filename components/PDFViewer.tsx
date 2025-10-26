'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PDFViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 3;

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-2 sm:p-4">
      {/* PDF Görüntüleyici */}
      <div className="relative w-full max-w-4xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="w-full h-[70vh] sm:h-[80vh] relative bg-gray-100">
            {/* Tüm sayfalar render edilir ama sadece aktif olan görünür */}
            {[1, 2, 3].map((page) => (
              <div
                key={page}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  pageNumber === page ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <iframe
                  src={`/MENU.pdf#page=${page}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  className="w-full h-full"
                  title={`Mios Pizza Menü - Sayfa ${page}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigasyon Butonları */}
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
          <span className="text-gray-500 font-medium">{totalPages}</span>
        </div>
        
        <motion.button
          onClick={goToNextPage}
          disabled={pageNumber >= totalPages}
          className="px-6 py-3 bg-red-600 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-red-700 transition font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
          whileHover={pageNumber < totalPages ? { scale: 1.05 } : {}}
          whileTap={pageNumber < totalPages ? { scale: 0.95 } : {}}
        >
          <span className="hidden sm:inline">Sonraki</span>
          <span className="text-xl">→</span>
        </motion.button>
      </div>

      {/* Sayfa Göstergeleri (dots) */}
      <div className="mt-4 flex gap-2">
        {[...Array(totalPages)].map((_, index) => (
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
    </div>
  );
}