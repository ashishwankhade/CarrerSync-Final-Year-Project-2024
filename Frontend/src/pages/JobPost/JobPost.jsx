import React from "react";

function UpdateProductForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-3xl px-4 py-8 md:mx-12 mx-2 lg:py-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Create a New Job
        </h2>
  

        <form>
          <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
            Company Details
          </h2>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Company Name"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                About Company
              </label>

              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md  py-3 px-5 dark:shadow-sm-light text-base mb-4"
                placeholder="Enter Brief About Company"
              ></textarea>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                Company Logo
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="block w-full border border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-5 dark:file:bg-[#1E293B] dark:file:text-gray-400 mb-4 "
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Website Link
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-8"
                placeholder="Enter Website Link of Company"
                required
              />

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Job Details
              </h2>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Job Title Here"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                Job Description
              </label>

              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md  py-3 px-5 dark:shadow-sm-light text-base mb-4"
                placeholder="Enter Job Description"
              ></textarea>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Position
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Job Title Here"
                required
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Type
              </label>

              <select
                id="countries"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
              >
                <option value="">Choose Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Timer">Part Timer</option>
                <option value="Work From Home">Work From Home</option>
                <option value="Remote Job">Remote Job</option>
              </select>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Salary
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Salary Range or Fixed Value"
                required
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Location
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Job Location"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Qualification
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Qualification"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Skills
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="HTML , CSS ,JS ,JAVA ,C etc"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Experince
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-8"
                placeholder="Enter Experince  eg. Fresher"
                required
              />

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Selection Process
              </h2>

              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md  py-3 px-5 dark:shadow-sm-light text-base mb-4"
                placeholder="Enter Brief About Selection Process"
              ></textarea>

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Terms and conditions of employment:
              </h2>

              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md  py-3 px-5 dark:shadow-sm-light text-base mb-4"
                placeholder="Enter Terms And Conditions"
              ></textarea>

<label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
             Registration Link:
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-8"
                placeholder="Enter Registration Link"
                required
              />

            <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
             Deadline for Registration
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-8"
                placeholder="Enter Deadline for Registration"
                required
              />

            </div>

            {/* Additional form fields */}
          </div>
          <div className="flex items-center space-x-4">
          <button
        type="submit"
        className="w-full md:w-1/2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 mx-auto"
      >
        Create  new Job
      </button>
           
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateProductForm;
