"use client";

import Link from "next/link";
import Popover from "./Popover";
import { useState } from "react";
import { convertIsoDate } from "../lib/convertIsoDate";

export default function JournalCard({ paper }: any) {
  // const [isOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="border-b-2">
      <div className="flex py-5">
        <h6 className="text-white bg-primary px-4 py-1 text-xs rounded-md tracking-wider mr-2 line-clamp-1">
          ISSN: {paper.paperISSN}
        </h6>
        <h6 className="text-white bg-secondary px-4 py-1 text-xs rounded-md tracking-wider mr-2 line-clamp-1 capitalize">
          <svg
            className="inline mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M15 0v20h1.5c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM2 18c0 1.1.9 2 2 2h10V0H4C2.9 0 2 .9 2 2zM4 5h8v1H4zm3 2h5v1H7z"
            />
          </svg>
          {paper.paperCategory}
        </h6>
      </div>
      <div>
        <Link
          href={`/journal/${paper.id}`}
          className="font-semibold link link-hover uppercase text-xl"
        >
          {paper.paperTitle}
        </Link>
        <div className="flex text-xs py-2">
          <span>Author(s):</span>
          {paper.authors.map((author: any) => (
            <div
              key={author.id}
              className="tooltip tooltip-bottom tooltip-secondary font-semibold tracking-wider"
              data-tip={author.organisation}
            >
              <p className="uppercase px-3 cursor-pointer">{author.fullName}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="line-clamp-4 text-sm">{paper.abstract}</p>
        </div>
        <div className="flex items-center py-4">
          <p className="text-xs text-yellow-950">
            Published: {convertIsoDate(paper?.createdAt)}
          </p>
          <Link
            href={`/journal/${paper.id}`}
            className="btn btn-link text-xs ml-5 p-0"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
