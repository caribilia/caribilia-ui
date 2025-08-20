"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong!
        </h2>
        <p className="text-gray-600">
          {error.message || "An unexpected error occurred"}
        </p>
        <Button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
