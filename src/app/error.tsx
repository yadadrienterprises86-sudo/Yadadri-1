"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring logs
    console.error(error);
  }, [error]);

  return (
    <div className="bg-slate-950 min-h-[75vh] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-full w-fit mx-auto text-amber-400">
          <AlertCircle className="h-16 w-16" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white">System Error</h1>
          <p className="text-slate-400 text-sm">
            An unexpected error occurred during loading the page content.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Reloading</span>
          </button>
        </div>
      </div>
    </div>
  );
}
