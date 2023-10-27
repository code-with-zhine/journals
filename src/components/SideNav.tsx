import prisma from "@/lib/prisma";

// async function getPaper() {
//   const papers = await prisma.paper.findMany();

//   return papers;
// }

async function SideNav() {
  // const papers = await getPaper();
  // if (!papers) return null;

  return (
    <>
      <section className="pb-5">
        <h4 className="bg-secondary text-xs p-2 uppercase text-black font-semibold">
          Journals by Title
        </h4>
        <div className="text-gray-300">
          {/* {papers.map((paper) => (
            <a
              key={paper.id}
              className="btn text-gray-300 text-left p-0 mb-1 btn-link"
            >
              {paper.paperTitle}
            </a>
          ))} */}
        </div>
        <div>
          <p className="text-xs text-secondary mb-1">
            {/* Showing {papers.length} out of {papers.length} */}
          </p>
          <button className="btn btn-sm btn-secondary btn-outline">
            All Journals by title
          </button>
        </div>
      </section>
      <hr />
      <section className="pt-5">
        <h4 className="bg-secondary text-xs uppercase text-black font-semibold p-2">
          Useful Links
        </h4>
        <div className="text-gray-300 pt-3">
          <a className="btn text-gray-300 text-left p-0 btn-link block">
            Publication Format & Date
          </a>
          <a className="btn text-gray-300 text-left p-0 btn-link block">
            Submission Deadline
          </a>
          <a className="btn text-gray-300 text-left p-0 btn-link block">
            Submission Guidelines
          </a>
          <a className="btn text-gray-300 text-left p-0 btn-link block">
            Processing Fee
          </a>
        </div>
      </section>
    </>
  );
}

export default SideNav;
