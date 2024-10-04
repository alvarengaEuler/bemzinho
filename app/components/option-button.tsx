import { ChevronRight } from "lucide-react";
import React from "react";

export default function OptionButton() {
  return (
    <div className="flex">
      <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <span className="font-semibold text-indigo-600">Life is amazing</span>
        <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
        <span className="flex items-center gap-x-1">
          Let is begins <ChevronRight className="-mr-2 h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
