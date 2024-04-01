import React from "react";
import { useState, useEffect } from "react";


function TableData() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get current items to display on the page
    const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  // Get current items to display on the page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("http://localhost:3000/Dashboard/studentdata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        // Handle the data
        console.log(data);
        setData(data)
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log("This is Student data component");

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Student Data
        </h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <nav className="">
          <ul className="pagination flex mb-4 float-right">
            {/* Previous Button */}
            {currentPage > 1 && (
              <li className="page-item">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="text-sm dark:bg-indigo-500 bg-indigo-500 text-white px-3 py-2 rounded-lg mx-1 focus:outline-none"
                >
                  Prev
                </button>
              </li>
            )}

            {/* Page Numbers */}
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, i) => i + 1
            )
              .slice(
                Math.max(0, currentPage - 2),
                Math.min(currentPage + 1, Math.ceil(data.length / itemsPerPage))
              )
              .map((number) => (
                <li key={number} className="page-item">
                  <button
                    onClick={() => paginate(number)}
                    className={`${
                      currentPage === number
                        ? "text-sm bg-indigo-500 text-white"
                        : "bg-white px-3 py-1 dark:bg-[#1E293B]"
                    } hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-lg mx-1 focus:outline-none text-sm`}
                  >
                    {number}
                  </button>
                </li>
              ))}

            {/* Next Button */}
            {currentPage < Math.ceil(data.length / itemsPerPage) && (
              <li className="page-item">
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="text-sm dark:bg-indigo-500 bg-indigo-500 text-white px-3 py-2 rounded-lg mx-1 focus:outline-none"
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="relative overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left  text-gray-500 bg-red-500 dark:bg-[#1E293B] ">
          <thead className="text-sm bg-indigo-500  dark:text-white w-full whitespace-nowrap text-white">
            <tr className="text-center w-full">
              <th scope="col" className=" py-6 px-3 ">
                College ID
              </th>
              <th scope="col" className=" py-6 px-3 ">
                Enrollment Number
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 w-1/4">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Branch
              </th>
              <th scope="col" className="px-6 py-3">
                College
              </th>
              <th scope="col" className="px-6 py-3">
                Year Of Passing
              </th>
              <th scope="col" className="px-6 py-3">
                SSC Board
              </th>

              <th scope="col" className="px-6 py-3">
                SSC (Year Of Passing)
              </th>
              <th scope="col" className="px-6 py-3">
                SSC Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                HSC Board
              </th>
              <th scope="col" className="px-6 py-3">
                HSC (Year Of Passing)
              </th>
              <th scope="col" className="px-6 py-3">
                HSC Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                Diploma Board
              </th>
              <th scope="col" className="px-6 py-3">
                Diploma Branch
              </th>
              <th scope="col" className="px-6 py-3">
                Diploma Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                Diploma Year Of Passing
              </th>

              <th scope="col" className="px-6 py-3">
                I Semester Percentage
              </th>

              <th scope="col" className="px-6 py-3">
                II Semester Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                III Semester Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                IV Semester Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                BE AGGREGATE
              </th>
              <th scope="col" className="px-6 py-3">
                I Semester PTR
              </th>
              <th scope="col" className="px-6 py-3">
                II Semester PTR
              </th>
              <th scope="col" className="px-6 py-3">
                III Semester PTR
              </th>
              <th scope="col" className="px-6 py-3">
                IV Semester PTR
              </th>
              <th scope="col" className="px-6 py-3">
                BE SGPA
              </th>
              <th scope="col" className="px-6 py-3">
                Current Backlog
              </th>
              <th scope="col" className="px-6 py-3">
                History Of Backlog
              </th>
              <th scope="col" className="px-6 py-3">
                Year down
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email ID
              </th>
              <th scope="col" className="px-6 py-3 ">
                Local Address
              </th>
              <th scope="col" className="px-6 py-3">
                Permanent Address
              </th>
              <th scope="col" className="px-6 py-3">
                University
              </th>
              <th scope="col" className="px-6 py-3">
                Skill Set
              </th>
              <th scope="col" className="px-6 py-3">
                Aadhar Number
              </th>
              <th scope="col" className="px-6 py-3">
                University Roll Number
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((Data, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800   whitespace-nowrap text-center dark:text-slate-300 text-black font-medium"
              >
                <td scope="row" class="px-6 py-4  ">
                  {Data["College ID"]}
                </td>
                <td scope="row" class="px-6 py-4">
                  {Data["Enrollment Number"]}
                </td>
                <td class="px-6 py-4 ">{Data["Full Name"]}</td>
                <td class="px-6 py-4">{Data["Gender"]}</td>
                <td class="px-6 py-4">{Data["Date of Birth"]}</td>
                <td
                  class="px-6
                 py-4 "
                >
                  {Data["Branch"]}
                </td>
                <td class="px-6 py-4">{Data["College"]}</td>
                <td class="px-6 py-4">{Data["Year Of Passing"]}</td>
                <td class="px-6 py-4">{Data["SSC Board"]}</td>

                <td class="px-6 py-4">{Data["SSC (Year Of Passing)"]}</td>

                <td class="px-6 py-4">{Data["SSC Percentage"]}</td>

                <td class="px-6 py-4">{Data["HSC Board"]}</td>
                <td class="px-6 py-4">{Data["HSC (Year Of Passing)"]}</td>
                <td class="px-6 py-4">{Data["HSC Percentage"]}</td>
                <td class="px-6 py-4">{Data["Diploma Board"]}</td>
                <td class="px-6 py-4">{Data["Diploma Branch"]}</td>
                <td class="px-6 py-4">{Data["Diploma Percentage"]}</td>
                <td class="px-6 py-4">{Data["Diploma Year Of Passing"]}</td>
                <td class="px-6 py-4">{Data["I Semester Percentage"]}</td>
                <td class="px-6 py-4">{Data["II Semester Percentage"]}</td>
                <td class="px-6 py-4">{Data["III Semester Percentage"]}</td>
                <td class="px-6 py-4">{Data["IV Semester Percentage"]}</td>
                <td class="px-6 py-4">{Data["BE AGGREGATE"]}</td>
                <td class="px-6 py-4">{Data["I Semester PTR"]}</td>
                <td class="px-6 py-4">{Data["II Semester PTR"]}</td>
                <td class="px-6 py-4">{Data["III Semester PTR"]}</td>
                <td class="px-6 py-4">{Data["IV Semester PTR"]}</td>
                <td class="px-6 py-4">{Data["BE SGPA"]}</td>
                <td class="px-6 py-4">{Data["Current Backlog"]}</td>
                <td class="px-6 py-4">{Data["History Of Backlog"]}</td>
                <td class="px-6 py-4">{Data["Year down"]}</td>
                <td class="px-6 py-4">{Data["Mobile Number"]}</td>
                <td class="px-6 py-4">{Data["Email ID"]}</td>
                <td scope="row" class="px-6 py-4  w-32">
                  {Data["Local Address"]}
                </td>
                <td class="px-6 py-4">{Data["Permanent Address"]}</td>
                <td class="px-6 py-4">{Data["University"]}</td>
                <td class="px-6 py-4">{Data["Skill Set"]}</td>
                <td class="px-6 py-4">{Data["Aadhar Number"]}</td>
                <td class="px-6 py-4">{Data["University Roll Number"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableData;
