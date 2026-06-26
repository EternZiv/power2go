import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1447E6] to-[#01b0d9] mx-auto mb-4 animate-pulse" />
        <div className="flex flex-col items-center gap-2">
          <div className="h-3 w-32 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-3 w-24 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
