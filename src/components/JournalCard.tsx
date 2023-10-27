"use client";

import Link from "next/link";
import Popover from "./Popover";
import { useState } from "react";
import { convertIsoDate } from "../lib/convertIsoDate";
import Image from "next/image";

type Publication = {
  id: number;
  pubType: string;
  pubTitle: string;
  pubISSN: string;
  noOfPages: string;
  noOfDownloads: number;
  noOfViews: number;
  fileSize: string | null;
  frontPageImgUrl: string | null;
  previewUrl: string | null;
  fullUrl: string;
  createdAt: Date;
  isFree: Boolean;
  pubDate: string;
  Article: any;
};

export default function JournalCard({
  publication,
}: {
  publication: Publication;
}) {
  // const [isOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // return (
  //   <div className="border-b-2">
  //     <div className="flex py-5">
  //       <h6 className="text-white bg-primary px-4 py-1 text-xs rounded-md tracking-wider mr-2 line-clamp-1">
  //         ISSN: {publication.pubISSN}
  //       </h6>
  //       <h6 className="text-white bg-secondary px-4 py-1 text-xs rounded-md tracking-wider mr-2 line-clamp-1 capitalize">
  //         <svg
  //           className="inline mr-1"
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="20"
  //           height="20"
  //           viewBox="0 0 20 20"
  //         >
  //           <path
  //             fill="currentColor"
  //             d="M15 0v20h1.5c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM2 18c0 1.1.9 2 2 2h10V0H4C2.9 0 2 .9 2 2zM4 5h8v1H4zm3 2h5v1H7z"
  //           />
  //         </svg>
  //         {publication.pubType}
  //       </h6>
  //     </div>
  //     <div>
  //       <Link
  //         href={`/journal/${publication.id}`}
  //         className="font-semibold link link-hover uppercase text-xl"
  //       >
  //         {publication.pubTitle}
  //       </Link>
  //       <div className="flex text-xs py-2">
  //         <span>Author(s):</span>
  //         {publication.Article.map((article: any) => (
  //           <div
  //             key={article.id}
  //             className="tooltip tooltip-bottom tooltip-secondary font-semibold tracking-wider"
  //             // data-tip={author.organisation}
  //           >
  //             {/* <p className="uppercase px-3 cursor-pointer">{author.fullName}</p> */}
  //           </div>
  //         ))}
  //       </div>
  //       <div>
  //         <p className="line-clamp-4 text-sm">{publication.pubTitle}</p>
  //       </div>
  //       <div className="flex items-center py-4">
  //         <p className="text-xs text-yellow-950">
  //           Published: {convertIsoDate(publication?.createdAt)}
  //         </p>
  //         <Link
  //           href={`/journal/${publication.id}`}
  //           className="btn btn-link text-xs ml-5 p-0"
  //         >
  //           Preview
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Link href={`/publication/${publication.id}`} as="hello">
      <div className="card card-side rounded-0">
        <figure>
          <img
            width={100}
            height={150}
            src={`${publication.frontPageImgUrl}`}
            alt={publication.pubType}
          />
        </figure>
        <div className="px-4 w-full">
          <div className="flex justify-between">
            <div className="flex text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 26 26"
              >
                <g fill="none">
                  <defs>
                    <mask id="pepiconsPencilLockOpenCircleFilled0">
                      <path fill="#fff" d="M0 0h26v26H0z" />
                      <g fill="#000">
                        <path
                          fill-rule="evenodd"
                          d="M10.5 15.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M15 10.5h-5A3.5 3.5 0 0 0 6.5 14v3a3.5 3.5 0 0 0 3.5 3.5h5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5ZM7.5 14a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7.5 17v-3Z"
                          clip-rule="evenodd"
                        />
                        <path d="M10 11a.5.5 0 0 1-1 0V7.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0V11Z" />
                      </g>
                    </mask>
                  </defs>
                  <circle
                    cx="13"
                    cy="13"
                    r="13"
                    fill="currentColor"
                    mask="url(#pepiconsPencilLockOpenCircleFilled0)"
                  />
                </g>
              </svg>
              <span className="text-xs px-2"> Open Access</span>
            </div>
            <p className="text-xs text-accent font-semibold capitalize tracking-wider px-4 py-1 rounded-md">
              {publication.pubType}
            </p>
          </div>

          <Link
            href={`${publication.id}`}
            className="card-title capitalize text-primary"
          >
            {publication.pubTitle}
          </Link>
          <p className="text-xs font-semibold capitalize py-1">
            Publisher: Redeemers college of technology and management
          </p>
          <p className="text-xs font-semibold capitalize py-1">
            Published Date: {publication.pubDate}
          </p>
          <p className="text-xs font-semibold capitalize py-1">
            ISSN: {publication.pubISSN}
          </p>
          <p className="text-xs text-success font-semibold capitalize">
            Pliagiarism check ✅{" > "} {publication.Article.length} Articles 📚
          </p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Watch</button> */}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </Link>
  );
}
