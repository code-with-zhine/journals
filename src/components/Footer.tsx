import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-2 border-secondary">
      <div className="flex flex-col sm:flex-row justify-between px-5 py-10">
        <div className="p-3 ">
          <h4 className="font-semibold text-xl footer-title">
            What is REIMJL?
          </h4>
          <p className="line-clamp-4 max-w-lg text-[0.9rem]">
            The RECTEM International Multidisciplinary Journal (REIMJ) welcomes
            submission manuscripts for its Maiden edition, Vol 1, No 1, July
            2022. The journal is a high quality peer-reviewed research journal
            of publication by Redeemer's College of Technology of and
            Management, Mowe Ogun State. It provides
          </p>
          <button className="btn text-secondary p-0 btn-link">
            Learn More
          </button>
        </div>
        <div className="p-3">
          <h6 className="footer-title">Editor-In-Chief</h6>
          <p className="font-semibold">Gbolade Soneye, PhD</p>
          <data className="text-xs">
            <p>Department of Accountancy</p>
            <p>Redeemer's College of Technology and Management.</p>
            <p>Mowe, Ogun State</p>
            <a
              href="mailto: eyiolorunshe.dt@rectem.edu.ng"
              className="block link-secondary cursor-pointer"
            >
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 11L3 6v10h10v2H3q-.825 0-1.413-.588T1 16V4q0-.825.588-1.413T3 2h16q.825 0 1.413.588T21 4v5h-2V6l-8 5Zm0-2l8-5H3l8 5Zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.588T21 18v-4h2v4q0 1.65-1.175 2.825T19 22ZM3 6V4v12V6Z"
                />
              </svg>{" "}
              Drgboladesoneye@rectem.edu.ng
            </a>
            <a
              href="tel:+2348033515852"
              className="block link-secondary cursor-pointer"
            >
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.95 22q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T2 5.05q0-.45.3-.75t.75-.3H7.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T8.4 9.45L5.975 11.9q.5.925 1.187 1.788t1.513 1.662q.775.775 1.625 1.438T12.1 18l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T20 16.9v4.05q0 .45-.3.75t-.75.3ZM5.05 10L6.7 8.35L6.25 6h-2.2q.125 1.025.35 2.025T5.05 10ZM14 18.905q.975.42 1.98.692q1.003.271 2.02.353v-2.2l-2.35-.5L14 18.905ZM5.05 10q-.425-.975-.65-1.975T4.05 6h2.2l.45 2.35L5.05 10ZM14 18.9l1.65-1.65l2.35.5v2.2q-1.025-.075-2.025-.35T14 18.9Zm3-6.9q-2.075 0-3.538-1.463T12 7q0-2.075 1.463-3.538T17 2q2.075 0 3.538 1.463T22 7q0 2.075-1.463 3.538T17 12Zm-.5-2h1V6h-1v4Zm.5-5q.2 0 .35-.15t.15-.35q0-.2-.15-.35T17 4q-.2 0-.35.15t-.15.35q0 .2.15.35T17 5Z"
                />
              </svg>{" "}
              +2348033515852
            </a>
          </data>
        </div>
        <div className="p-3">
          <h6 className="footer-title">Support</h6>
          <p className="font-semibold">Mr David Eyiolorunshe</p>
          <data className="text-xs">
            <p>Department Business Administration</p>
            <p>Redeemer's College of Technology and Management.</p>
            <p>Mowe, Ogun State</p>
            <a
              href="mailto: eyiolorunshe.dt@rectem.edu.ng"
              className="block link-secondary cursor-pointer"
            >
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 11L3 6v10h10v2H3q-.825 0-1.413-.588T1 16V4q0-.825.588-1.413T3 2h16q.825 0 1.413.588T21 4v5h-2V6l-8 5Zm0-2l8-5H3l8 5Zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.588T21 18v-4h2v4q0 1.65-1.175 2.825T19 22ZM3 6V4v12V6Z"
                />
              </svg>
              eyiolorunshe.dt@rectem.edu.ng
            </a>
            <a
              href="tel:+2347035438380"
              className="block link-secondary cursor-pointer"
            >
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.95 22q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T2 5.05q0-.45.3-.75t.75-.3H7.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T8.4 9.45L5.975 11.9q.5.925 1.187 1.788t1.513 1.662q.775.775 1.625 1.438T12.1 18l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T20 16.9v4.05q0 .45-.3.75t-.75.3ZM5.05 10L6.7 8.35L6.25 6h-2.2q.125 1.025.35 2.025T5.05 10ZM14 18.905q.975.42 1.98.692q1.003.271 2.02.353v-2.2l-2.35-.5L14 18.905ZM5.05 10q-.425-.975-.65-1.975T4.05 6h2.2l.45 2.35L5.05 10ZM14 18.9l1.65-1.65l2.35.5v2.2q-1.025-.075-2.025-.35T14 18.9Zm3-6.9q-2.075 0-3.538-1.463T12 7q0-2.075 1.463-3.538T17 2q2.075 0 3.538 1.463T22 7q0 2.075-1.463 3.538T17 12Zm-.5-2h1V6h-1v4Zm.5-5q.2 0 .35-.15t.15-.35q0-.2-.15-.35T17 4q-.2 0-.35.15t-.15.35q0 .2.15.35T17 5Z"
                />
              </svg>{" "}
              +2348033515852
            </a>
          </data>
        </div>
      </div>

      <div className="footer p-5 py-4 border-t  border-base-300">
        <aside className="items-center grid-flow-col">
          <Image width={30} height={30} src="/rectem.png" alt="RECTEM LOGO" />
          <div>
            <span className="uppercase text-2xl font-extrabold text-secondary">
              REIMJL
            </span>
            <p>
              KM 46 Lagos - Ibadan Expressway, Redemption City, Mowe, Ogun
              State, Nigeria.
            </p>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
