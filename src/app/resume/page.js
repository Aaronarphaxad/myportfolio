"use client"

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Create a loading component
const LoadingState = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6 flex justify-center items-center min-h-[500px]">
    <div className="animate-pulse">Loading...</div>
  </div>
);

// Dynamically import the client component with no SSR
const ResumeViewer = dynamic(
  () => import('@/components/ResumeViewer'),
  { ssr: false }
);

// Server component
export default function ResumePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ResumeViewer />
    </Suspense>
  );
}
