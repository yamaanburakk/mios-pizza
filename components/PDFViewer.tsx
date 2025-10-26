'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PDFViewer() {
  const [pageNumber, setPageNumber] = useState(1);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, 10));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden w-full h-[calc(100vh-160px)]">
        <iframe
          src={`/MENU.pdf#page=${pageNumber}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          className="w-full h-full"
          title="Mios Pizza Menü"
        />
      </div>
    </div>
  );
}