import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center px-5 lg:px-10 py-5 pt-[90px]">
        <Link href="/">
          <Image
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
            src="/rectem.png"
            alt="RECTEM LOGO"
          />
        </Link>
        <div className="pl-5 text-center md:text-left text-primary uppercase font-extrabold text-2xl">
          <h1 className="hidden md:block">
            Rectem International Multidisciplinary Journal [REIMJL]
          </h1>
          <h1 className="block md:hidden">REIMJL</h1>
        </div>
      </div>
      <div className="bg-primary px-5 lg:px-10 pt-20 pb-5 shadow-2xl border-y-2 border-secondary">
        <div>
          <h1 className="pb-5 uppercase text-5xl font-extrabold text-secondary">
            REIMJL
          </h1>
          <h1 className="text-4xl font-medium pb-4 text-white capitalize">
            Find academic journals
          </h1>
        </div>

        <form>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-secondary">
                Search by Author or Title
              </span>
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Search for journal"
                className="input rounded-none input-bordered input-accent w-full"
              />
              <button className="btn btn-accent rounded-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
