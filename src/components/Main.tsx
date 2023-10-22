import prisma from "@/lib/prisma";
import JournalCard from "./JournalCard";
import SideNav from "./SideNav";

async function getPaper() {
  const papers = await prisma.paper.findMany({
    include: {
      authors: true,
    },
  });

  return papers;
}

export default async function Main() {
  const papers = await getPaper();
  if (!papers) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-gray-500">
      <div className="col-span-1 lg:col-span-2 p-5">
        <h4 className="text-xl pb-5 uppercase text-gray-600 font-semibold">
          Recent Uploads
        </h4>
        <section>
          {papers.map((paper) => (
            <JournalCard key={paper.id} paper={paper} />
          ))}
        </section>
      </div>
      <div className="col-span-1 p-5 bg-primary ">
        <SideNav />
      </div>
    </div>
  );
}
