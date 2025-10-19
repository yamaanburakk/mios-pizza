"use client";

const PDFViewerComponent = () => {
  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* PDF Content */}
      <div className="px-4 sm:p-6">
        {/* Mobile PDF - 50% zoom */}
        <div className="sm:hidden h-[450px] rounded-lg">
          <iframe
            src="/MENU.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=50"
            className="w-[200%] h-[900px] rounded-lg border-0"
            style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}
            title="Mios Pizza Menü - Mobile"
          />
        </div>
        
        {/* Desktop PDF - Normal zoom */}
        <iframe
          src="/MENU.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
          className="w-full h-[600px] sm:h-[700px] lg:h-[700px] hidden sm:block rounded-lg border-0"
          title="Mios Pizza Menü - Desktop"
        />
      </div>
    </div>
  );
};

export default PDFViewerComponent;