import JournalCard from "@/components/JournalCard";
import SideNav from "@/components/SideNav";
import Tabs from "@/components/Tabs";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { convertDateFormat } from "../../../lib/dateFormat";
import { convertIsoDate } from "../../../lib/convertIsoDate";
import { notFound } from "next/navigation";

export default async function Main({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const paper = await prisma.paper.findUnique({
    where: {
      id: id,
    },
    include: {
      authors: true,
    },
  });

  if (!paper) return notFound();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-gray-500">
      <div className="col-span-1 lg:col-span-2 p-5">
        <h6 className="uppercase font-semibold tracking-wider text-xs px-4 py-2 text-black bg-secondary">
          {paper?.paperCategory}
        </h6>
        <section className="py-4">
          <h4
            className="uppercase text-2xl font-semibold  text-primary 
 "
          >
            {paper?.paperTitle}
          </h4>
          <p className="text-xs">
            Authors:
            {paper?.authors.map((author) => (
              <span
                key={author.id}
                className="tooltip tooltip-bottom tooltip-secondary font-semibold tracking-wider capitalize"
                data-tip={author.organisation}
              >
                <span className="uppercase px-3 cursor-pointer">
                  {`${author.fullName} |`}
                </span>
              </span>
            ))}
          </p>
          <ul className="flex pt-4 text-accent">
            <li className="mr-2 text-xs">ISSN - {paper?.paperISSN} |</li>
            <li className="mr-2 text-xs">{paper?.paperVolume}</li>
          </ul>
          <ul className="flex py-4">
            <li className="mr-2 text-xs">
              Received: {convertDateFormat(paper?.receivedDate)} |
            </li>
            <li className="mr-2 text-xs">
              Accepted: {convertDateFormat(paper?.approvedDate)} |
            </li>
            <li className="mr-2 text-xs">
              Published: {convertIsoDate(paper?.createdAt)}
            </li>
          </ul>
        </section>
        <div>
          Abstract:
          <p>{paper?.abstract}</p>
        </div>

        <div className="py-5">
          <a
            href={`${paper?.previewUrl}`}
            className="btn btn-sm btn-primary mr-4"
          >
            Preview Paper
          </a>
          <a className="max-w-[250px] mt-5 text-white bg-success px-4 py-1 text-xs rounded-md tracking-wider line-clamp-1">
            <svg
              className="inline mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Zm9 15q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-5.75-1H6q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.963 2.038T11 18q0 1.075.338 2.087T12.25 22ZM18 18q.625 0 1.063-.438T19.5 16.5q0-.625-.438-1.063T18 15q-.625 0-1.063.438T16.5 16.5q0 .625.438 1.063T18 18Zm0 3q.75 0 1.4-.35t1.075-.975q-.575-.35-1.2-.513T18 19q-.65 0-1.275.162t-1.2.513q.425.625 1.075.975T18 21Z"
              />
            </svg>
            Payment required to download
          </a>
        </div>
        <p className="text-xs py-4">
          Copyright © 2023 Author(s) retain the copyright of this article.
        </p>
        <p className="text-xs">
          This article is published under the{" "}
          <a className="text-xs inline cursor-pointer text-accent">
            Terms of the REIMJL
          </a>
        </p>
      </div>
      <div className="col-span-1 p-5 bg-primary ">
        <SideNav />
      </div>
    </div>
  );
}
