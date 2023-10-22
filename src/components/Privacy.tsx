import Link from "next/link";
import React from "react";

export default function Privacy() {
  return (
    <div className="p-5 bg-yellow-500 py-3 text-xs text-blue-800 font-semibold">
      <ul className="flex flex-wrap sm:divide-x-2">
        <li className="px-2">
          <Link href="#" className="cursor-pointer">
            Privacy and Accessibility
          </Link>
        </li>
        <li className="px-2">
          <Link href="#" className="cursor-pointer">
            Terms and Conditions
          </Link>
        </li>
        <li className="px-2">© 2023 CITM RECTEM</li>
      </ul>
    </div>
  );
}
