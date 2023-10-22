"use client";

import { useState } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlertError } from "../../components/Alert";
import axios from "axios";
import { useRouter } from "next/navigation";

const initialPaperAuthor = {
  fullName: "",
  email: "",
  department: "",
  organisation: "",
};

const initialPaperInformation = {
  ownerEmail: "",
  abstract: "",
  paperCategory: "",
  paperTitle: "",
  paperISSN: "",
  paperVolume: "",
  receivedDate: "",
  approvedDate: "",
  keywords: "",
};

export default function Publish() {
  const router = useRouter();
  const [showAuthorForm, setShowAuthorForm] = useState(false);
  const [paperInformation, setPaperInformation] = useState(
    initialPaperInformation
  );
  const [paperAuthor, setPaperAuthor] = useState(initialPaperAuthor);
  const [authors, setAuthors] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/paper/addPaper", {
        ...paperInformation,
        authors: {
          create: authors,
        },
      });

      // console.log(response.data.PaperAndAuthor.id);
      router.push(
        `/admin/dashboard/publish/upload?id=${response.data.PaperAndAuthor.id}`
      );
    } catch (error: any) {
      // console.log("failed", error.response.data.error);
      AlertError("error", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e4b6c9] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div>
      <ToastContainer />
      {showAuthorForm ? (
        <form className="pt-20 max-w-3xl m-auto">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                Authors Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                You can add contributors here
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {/* list here */}
                <div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Author added {authors.length}
                    </h3>
                  </div>
                  <div className="mt-2 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 line-clamp-1">
                          {paperAuthor.fullName}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                          {paperAuthor.email}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Department
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                          {paperAuthor.department}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Organisation
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                          {paperAuthor.organisation}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Author's Full name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                        <input
                          required
                          value={paperAuthor.fullName}
                          onChange={(e) =>
                            setPaperAuthor({
                              ...paperAuthor,
                              fullName: e.target.value,
                            })
                          }
                          type="text"
                          name="full-name"
                          className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Author's Email
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                        <input
                          required
                          value={paperAuthor.email}
                          onChange={(e) =>
                            setPaperAuthor({
                              ...paperAuthor,
                              email: e.target.value,
                            })
                          }
                          type="email"
                          name="email"
                          className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Author's Department
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                        <input
                          required
                          value={paperAuthor.department}
                          onChange={(e) =>
                            setPaperAuthor({
                              ...paperAuthor,
                              department: e.target.value,
                            })
                          }
                          type="text"
                          name="department"
                          className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Author's Organisation
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                        <input
                          required
                          value={paperAuthor.organisation}
                          onChange={(e) =>
                            setPaperAuthor({
                              ...paperAuthor,
                              organisation: e.target.value,
                            })
                          }
                          type="text"
                          name="organisation"
                          className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e: any) => {
                      e.preventDefault();
                      if (
                        !validator.isByteLength(paperAuthor.fullName, {
                          min: 5,
                          max: undefined,
                        }) ||
                        !validator.isEmail(paperAuthor.email) ||
                        !validator.isByteLength(paperAuthor.department, {
                          min: 5,
                          max: undefined,
                        }) ||
                        !validator.isByteLength(paperAuthor.organisation, {
                          min: 5,
                          max: undefined,
                        })
                      ) {
                        return AlertError(
                          "error",
                          "Fill all information correctly"
                        );
                      }

                      setAuthors([...authors, paperAuthor]);
                      setPaperAuthor(initialPaperAuthor);
                    }}
                    className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Add Author
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                setShowAuthorForm(false);
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Go Back
            </button>
            <button
              onClick={onSubmit}
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Save and Continue
            </button>
          </div>
        </form>
      ) : (
        <form className="pt-20 max-w-3xl m-auto">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                Paper Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Uploader Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.ownerEmail}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            ownerEmail: e.target.value,
                          })
                        }
                        type="email"
                        name="email"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="journal-category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Paper Category
                  </label>
                  <div className="mt-2">
                    <select
                      onChange={(e) =>
                        setPaperInformation({
                          ...paperInformation,
                          paperCategory: e.target.value,
                        })
                      }
                      name="journal-category"
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select</option>
                      <option value="journal">Journal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="paper-title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Paper Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.paperTitle}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            paperTitle: e.target.value,
                          })
                        }
                        type="text"
                        name="paper-title"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="issn"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ISSN
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.paperISSN}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            paperISSN: e.target.value,
                          })
                        }
                        type="text"
                        name="issn"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="volume"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Volume number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.paperVolume}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            paperVolume: e.target.value,
                          })
                        }
                        type="text"
                        name="volume"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="received-date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Received Date
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.receivedDate}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            receivedDate: e.target.value,
                          })
                        }
                        type="date"
                        name="received-date"
                        autoComplete="username"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="approved-date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Approved Date
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                      <input
                        required
                        value={paperInformation.approvedDate}
                        onChange={(e) =>
                          setPaperInformation({
                            ...paperInformation,
                            approvedDate: e.target.value,
                          })
                        }
                        type="date"
                        name="username"
                        className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="abstract"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Paaper Abstract
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={paperInformation.abstract}
                      onChange={(e) =>
                        setPaperInformation({
                          ...paperInformation,
                          abstract: e.target.value,
                        })
                      }
                      name="abstract"
                      rows={4}
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Keeywords separarted by comma ","
                  </p>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="keywords"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Keywords
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={paperInformation.keywords}
                      onChange={(e) =>
                        setPaperInformation({
                          ...paperInformation,
                          keywords: e.target.value,
                        })
                      }
                      name="about"
                      rows={2}
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Keeywords separarted by comma ","
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={(e: any) => {
                e.preventDefault();

                if (
                  !validator.isEmail(paperInformation.ownerEmail) ||
                  !validator.isByteLength(paperInformation.paperCategory, {
                    min: 5,
                    max: undefined,
                  }) ||
                  !validator.isByteLength(paperInformation.paperTitle, {
                    min: 5,
                    max: undefined,
                  }) ||
                  !validator.isByteLength(paperInformation.paperISSN, {
                    min: 5,
                    max: undefined,
                  }) ||
                  !validator.isByteLength(paperInformation.paperVolume, {
                    min: 5,
                    max: undefined,
                  }) ||
                  !validator.isByteLength(paperInformation.abstract, {
                    min: 5,
                    max: undefined,
                  }) ||
                  !validator.isDate(paperInformation.receivedDate) ||
                  !validator.isDate(paperInformation.approvedDate)
                ) {
                  return AlertError("error", "Fill all information correctly");
                }

                setShowAuthorForm(true);
              }}
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
