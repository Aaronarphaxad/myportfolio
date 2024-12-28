"use client";

import dynamic from "next/dynamic";
import { FaDownload } from "react-icons/fa";

// Dynamically import iframe
const Iframe = dynamic(() => Promise.resolve(({ src, ...props }) => (
  <iframe src={src} {...props} />
)), { ssr: false });

export default function ResumeViewer() {
  const resumeUrl = "/files/Aaron_Omale_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Aaron_Omale_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Resume</h1>
        <button
          onClick={handleDownload}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FaDownload />
          Download PDF
        </button>
      </div>

      {/* Dynamically loaded iframe */}
      <Iframe
        src={resumeUrl}
        key={resumeUrl}
        className="w-full h-[500px] sm:h-[800px] rounded-lg border border-gray-200 dark:border-gray-700"
        title="Resume Preview"
        loading="lazy"
      />
    </div>
  );
}
