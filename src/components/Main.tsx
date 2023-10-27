import prisma from "@/lib/prisma";
import JournalCard from "./JournalCard";
import SideNav from "./SideNav";

async function getPaper() {
  const publication = await prisma?.publication.findMany({
    include: {
      Article: true,
    },
  });

  return publication;
}

export default async function Main() {
  const publication = await getPaper();
  if (!publication) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-gray-500">
      <div className="col-span-1 lg:col-span-2 p-5">
        <h4 className="text-lg pb-5 capitalize text-gray-600 font-semibold">
          Recent Publication
        </h4>
        <section className="space-y-4">
          {publication.map((pub) => (
            <JournalCard key={pub.id} publication={pub} />
          ))}
        </section>
      </div>
      <div className="col-span-1 p-5 bg-primary ">
        <SideNav />
      </div>
    </div>
  );
}
