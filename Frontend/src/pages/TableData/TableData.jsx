import React from "react";
import { useState ,useEffect } from "react";
const fetchDataFromDatabase = () => {
  return Promise.resolve([
    {
      "SN": 1,
    "College ID": "20BE0351",
    "Enrollment Number": 201680283,
    "Full Name": "Aachal Pradeepkumar  Chede",
    "Gender": "Female ",
    "Date of Birth": "10-11-2002",
    "Branch": "Computer Science & Engineering",
    "College": "Sipna COET, Amravati",
    "Year Of Passing": 2024,
    "SSC Percentage": 92.4,
    "SSC (Year Of Passing)": 2018,
    "SSC Board": "Maharashtra State Board",
    "HSC Percentage": 82.31,
    "HSC (Year Of Passing)": 2020,
    "HSC Board": "Maharashtra State Board",
    "Diploma Branch": "NA",
    "Diploma Percentage": "NA",
    "Diploma Year Of Passing": "NA",
    "Diploma Board": "NA",
    "I Semester Percentage": 100,
    "II Semester Percentage": 100,
    "III Semester Percentage": 95.5,
    "IV Semester Percentage": 93,
    "BE AGGREGATE": 97.13,
    "I Semester PTR": 10,
    "II Semester PTR": 10,
    "III Semester PTR": 9.55,
    "IV Semester PTR": 9.32,
    "BE SGPA": 9.72,
    "Current Backlog": 0,
    "History Of Backlog": 0,
    "Year down": 0,
    "Mobile Number": 8080257817,
    "Email ID": "chedeaachal@gmail.com",
    "Local Address": "NH 6, Opposite Nemani Godown, Nimbora, Badnera Rd, Amravati, Maharashtra 444701 Hostel rani lashami bai",
    "Permanent Address": "Begampura, near ram mandir achlpur-444806",
    "University": "S.G.B.A.U., Amravati",
    "Skill Set": "C,C++,Java,Python,javascript,HTML,CSS,SQL",
    "Aadhar Number": "7994 9209 3545",
    "University Roll Number": "21BD310231"
    },
    {
      "SN": 1,
    "College ID": "20BE0351",
    "Enrollment Number": 201680283,
    "Full Name": "Aachal Pradeepkumar  Chede",
    "Gender": "Female ",
    "Date of Birth": "10-11-2002",
    "Branch": "Computer Science & Engineering",
    "College": "Sipna COET, Amravati",
    "Year Of Passing": 2024,
    "SSC Percentage": 92.4,
    "SSC (Year Of Passing)": 2018,
    "SSC Board": "Maharashtra State Board",
    "HSC Percentage": 82.31,
    "HSC (Year Of Passing)": 2020,
    "HSC Board": "Maharashtra State Board",
    "Diploma Branch": "NA",
    "Diploma Percentage": "NA",
    "Diploma Year Of Passing": "NA",
    "Diploma Board": "NA",
    "I Semester Percentage": 100,
    "II Semester Percentage": 100,
    "III Semester Percentage": 95.5,
    "IV Semester Percentage": 93,
    "BE AGGREGATE": 97.13,
    "I Semester PTR": 10,
    "II Semester PTR": 10,
    "III Semester PTR": 9.55,
    "IV Semester PTR": 9.32,
    "BE SGPA": 9.72,
    "Current Backlog": 0,
    "History Of Backlog": 0,
    "Year down": 0,
    "Mobile Number": 8080257817,
    "Email ID": "chedeaachal@gmail.com",
    "Local Address": "NH 6, Opposite Nemani Godown, Nimbora, Badnera Rd, Amravati, Maharashtra 444701 Hostel rani lashami bai",
    "Permanent Address": "Begampura, near ram mandir achlpur-444806",
    "University": "S.G.B.A.U., Amravati",
    "Skill Set": "C,C++,Java,Python,javascript,HTML,CSS,SQL",
    "Aadhar Number": "7994 9209 3545",
    "University Roll Number": "21BD310231"
    },
    {
      "SN": 2,
      "College ID": "20BE0349",
      "Enrollment Number": 201680017,
      "Full Name": "Aadesh Umesh Sawarkar",
      "Gender": "Male",
      "Date of Birth": "18-11-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 87,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "C.B.S.E.",
      "HSC Percentage": 89,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "C.B.S.E",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 90.16,
      "II Semester Percentage": 94.33,
      "III Semester Percentage": 88,
      "IV Semester Percentage": 74.5,
      "BE AGGREGATE": 86.75,
      "I Semester PTR": 9.77,
      "II Semester PTR": 10,
      "III Semester PTR": 10,
      "IV Semester PTR": 8.73,
      "BE SGPA": 9.63,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9517797905,
      "Email ID": "sawarkaranu@gmail.com",
      "Local Address": "77B Thakurwadi, Near Avatar Meher Baba Center, Amravati",
      "Permanent Address": "77B Thakurwadi, Near Avatar Meher Baba Center, Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "Python,HTML",
      "Aadhar Number": 949000000000,
      "University Roll Number": "21BD310232"
    },
    {
      "SN": 3,
      "College ID": "20BE0338",
      "Enrollment Number": "NA",
      "Full Name": "Aayushi Saket Thakur",
      "Gender": "Female",
      "Date of Birth": "14-02-2003",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 79.4,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 68,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 98,
      "II Semester Percentage": 97,
      "III Semester Percentage": 94,
      "IV Semester Percentage": 79,
      "BE AGGREGATE": 92,
      "I Semester PTR": 10,
      "II Semester PTR": 10,
      "III Semester PTR": 9.7,
      "IV Semester PTR": 7.38,
      "BE SGPA": 9.27,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9028320113,
      "Email ID": "aayushit142@gmail.com",
      "Local Address": "B-6 Rukhmini Appartment, Ambika Nagar, near Ganesh mandir Rukhmini nagar Amravati Maharashtra India 444606",
      "Permanent Address": "B-6 Rukhmini Appartment, Ambika Nagar, near Ganesh mandir Rukhmini nagar Amravati Maharashtra India 444606",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C,C++,HTML, Java Script, PHP.",
      "Aadhar Number": 498000000000,
      "University Roll Number": "21BD310235"
    },
    {
      "SN": 4,
      "College ID": "20be0179",
      "Enrollment Number": "NA",
      "Full Name": "Abhijeet  Arvind  Gadge",
      "Gender": "Male",
      "Date of Birth": "19-03-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 81,
      "SSC (Year Of Passing)": 2016,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 57,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 98,
      "II Semester Percentage": 100,
      "III Semester Percentage": 97,
      "IV Semester Percentage": 57.1,
      "BE AGGREGATE": 88.03,
      "I Semester PTR": 9.8,
      "II Semester PTR": 10,
      "III Semester PTR": 9.7,
      "IV Semester PTR": 5.71,
      "BE SGPA": 8.8,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 7588620133,
      "Email ID": "20be0179sipmaengg.ac.in",
      "Local Address": "Saroj colony near sadguru coaching classes amravati",
      "Permanent Address": "Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C/java",
      "Aadhar Number": "2044-0980-5364",
      "University Roll Number": "21BD310237"
    },
    {
      "SN": 5,
      "College ID": "20be0210",
      "Enrollment Number": 201680358,
      "Full Name": "Abhishek  Gajanan Bharsake",
      "Gender": "Male",
      "Date of Birth": "30-05-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 86.24,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 70.46,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 96.6,
      "II Semester Percentage": 98.5,
      "III Semester Percentage": 91,
      "IV Semester Percentage": 57.1,
      "BE AGGREGATE": 85.8,
      "I Semester PTR": 10,
      "II Semester PTR": 10,
      "III Semester PTR": 9.85,
      "IV Semester PTR": 6,
      "BE SGPA": 8.96,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9423636211,
      "Email ID": "abhishekbharsake@gmail.com",
      "Local Address": "Sai Nagar Amravati",
      "Permanent Address": "New patwari colony juni vasti Murtizapur",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C/C++/Java",
      "Aadhar Number": 228000000000,
      "University Roll Number": "21BD310239"
    },
    {
      "SN": 6,
      "College ID": "20BE0294",
      "Enrollment Number": 201680282,
      "Full Name": "Abhishek  Sanjayrao  Pinge",
      "Gender": "Male",
      "Date of Birth": "11-03-2003",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 70,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 55.69,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 86.5,
      "II Semester Percentage": 90.66,
      "III Semester Percentage": 86.85,
      "IV Semester Percentage": 48.37,
      "BE AGGREGATE": 78.1,
      "I Semester PTR": 9.5,
      "II Semester PTR": 10,
      "III Semester PTR": 9.65,
      "IV Semester PTR": 0,
      "BE SGPA": 7.29,
      "Current Backlog": 4,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 8010064434,
      "Email ID": "abhishekpinge11@gmail.com",
      "Local Address": "Dhanwadi , po. Bhandaraj, tq. Anjangaon surji , Amravati",
      "Permanent Address": "Dhanwadi , po. Bhandaraj, tq. Anjangaon surji , Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C++ , java , python",
      "Aadhar Number": 828000000000,
      "University Roll Number": "21BD310241"
    },
    {
      "SN": 7,
      "College ID": "21BE0258",
      "Enrollment Number": "NA",
      "Full Name": "Abhishek Govind Agrawal",
      "Gender": "Male",
      "Date of Birth": "23-09-2000",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 72.8,
      "SSC (Year Of Passing)": 2017,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": "NA",
      "HSC (Year Of Passing)": "NA",
      "HSC Board": "NA",
      "Diploma Branch": "Information Technology",
      "Diploma Percentage": 88.17,
      "Diploma Year Of Passing": 2021,
      "Diploma Board": "MSBTE",
      "I Semester Percentage": 0,
      "II Semester Percentage": 0,
      "III Semester Percentage": 91,
      "IV Semester Percentage": 64.8,
      "BE AGGREGATE": 77.9,
      "I Semester PTR": 0,
      "II Semester PTR": 0,
      "III Semester PTR": 9.85,
      "IV Semester PTR": 7.23,
      "BE SGPA": 8.5,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 1,
      "Mobile Number": 9545028110,
      "Email ID": "abhishek1.aa2@gmail.com",
      "Local Address": "Sai Nagar Amravati",
      "Permanent Address": "At post Ansing Tq dist Washim",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "Java, HTML, CSS",
      "Aadhar Number": 695000000000,
      "University Roll Number": "21BD310240"
    },
    {
      "SN": 8,
      "College ID": "20BE0282",
      "Enrollment Number": 201680242,
      "Full Name": "Aditya  Dinanath  Nawathe",
      "Gender": "Male",
      "Date of Birth": "09-09-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 88,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 68.31,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 96.33,
      "II Semester Percentage": 97.5,
      "III Semester Percentage": 93.71,
      "IV Semester Percentage": 71.37,
      "BE AGGREGATE": 89.73,
      "I Semester PTR": 10,
      "II Semester PTR": 10,
      "III Semester PTR": 10,
      "IV Semester PTR": 8.41,
      "BE SGPA": 9.6,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9172039050,
      "Email ID": "adityanawathe0909@gmail.com",
      "Local Address": "Nawathe Garden, Opposite Dasera Maidan, Badnera Road, Amravati",
      "Permanent Address": "Nawathe Garden, Opposite Dasera Maidan, Badnera Road, Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "Python",
      "Aadhar Number": 833000000000,
      "University Roll Number": "21BD310244"
    },
    {
      "SN": 9,
      "College ID": "20BE0163",
      "Enrollment Number": 201680318,
      "Full Name": "Aditya Sandip Sukode",
      "Gender": "Male",
      "Date of Birth": "16-06-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 83.55,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "C.B.S.E.",
      "HSC Percentage": 80.38,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "C.B.S.E",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 97.5,
      "II Semester Percentage": 98.33,
      "III Semester Percentage": 91.42,
      "IV Semester Percentage": 77,
      "BE AGGREGATE": 91.06,
      "I Semester PTR": 10,
      "II Semester PTR": 10,
      "III Semester PTR": 9.89,
      "IV Semester PTR": 9.18,
      "BE SGPA": 9.77,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 7773923996,
      "Email ID": "aditya.sukode2002@gmail.com",
      "Local Address": "Usha Colony Sai nagar , Amravati",
      "Permanent Address": "Q.No SB-4 ACC colony Shindola Mines Dist Yavatmal",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C, C++, Java, Python, HTML",
      "Aadhar Number": "7262 4556 5499",
      "University Roll Number": "21BD310245"
    },
    {
      "SN": 10,
      "College ID": "20be0185",
      "Enrollment Number": "NA",
      "Full Name": "Ajay Chaitram Hingve",
      "Gender": "Male",
      "Date of Birth": "23-07-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 79.6,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 66.62,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 94.5,
      "II Semester Percentage": 93.66,
      "III Semester Percentage": 89.71,
      "IV Semester Percentage": 67,
      "BE AGGREGATE": 86.22,
      "I Semester PTR": 9.92,
      "II Semester PTR": 10,
      "III Semester PTR": 9.85,
      "IV Semester PTR": 7.77,
      "BE SGPA": 9.39,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9359509994,
      "Email ID": "ajayhingawe@gmail.com",
      "Local Address": "WARUD",
      "Permanent Address": "WARUD",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "c/java/Python/HTML,CSS",
      "Aadhar Number": 978000000000,
      "University Roll Number": "21BD312046"
    },
    {
      "SN": 11,
      "College ID": "20be0293",
      "Enrollment Number": "NA",
      "Full Name": "Akash  Vinod Pawar",
      "Gender": "Male",
      "Date of Birth": "02-08-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 73.42,
      "SSC (Year Of Passing)": 2016,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 78.65,
      "HSC (Year Of Passing)": 2018,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "Bse",
      "Diploma Percentage": 76.54,
      "Diploma Year Of Passing": 2018,
      "Diploma Board": "MSBTE",
      "I Semester Percentage": 89,
      "II Semester Percentage": 95,
      "III Semester Percentage": 87,
      "IV Semester Percentage": 98,
      "BE AGGREGATE": 92.25,
      "I Semester PTR": 10,
      "II Semester PTR": 10,
      "III Semester PTR": 10,
      "IV Semester PTR": 8.09,
      "BE SGPA": 9,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 8080434632,
      "Email ID": "pawarakashvinod693@gmail.com",
      "Local Address": "Kali dk mahagao yavatmal",
      "Permanent Address": "Tulshibagar Kali dk taluka mahagao district yavatmal",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "Java html css",
      "Aadhar Number": 419000000000,
      "University Roll Number": "21BD310247"
    },
    {
      "SN": 12,
      "College ID": "21BE0014",
      "Enrollment Number": "NA",
      "Full Name": "Amit  Sunilrao Tayade",
      "Gender": "Male",
      "Date of Birth": "29-12-2001",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 79,
      "SSC (Year Of Passing)": 2017,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": "NA",
      "HSC (Year Of Passing)": "NA",
      "HSC Board": "NA",
      "Diploma Branch": "EXTC",
      "Diploma Percentage": 90.65,
      "Diploma Year Of Passing": 2021,
      "Diploma Board": "MSBTE",
      "I Semester Percentage": 0,
      "II Semester Percentage": 0,
      "III Semester Percentage": 93,
      "IV Semester Percentage": 56.3,
      "BE AGGREGATE": 74.65,
      "I Semester PTR": 0,
      "II Semester PTR": 0,
      "III Semester PTR": 10,
      "IV Semester PTR": 5.86,
      "BE SGPA": 7.9,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 8411063653,
      "Email ID": "tayade2912@gmail.com",
      "Local Address": "Sainagar, Amravati",
      "Permanent Address": "Takarkheda Purna post -Asegaon Purna Tq-Chandur Bazar Dist-Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C,Python",
      "Aadhar Number": 512000000000,
      "University Roll Number": "21BD310248"
    },
    {
      "SN": 13,
      "College ID": "20BE0234",
      "Enrollment Number": 201680246,
      "Full Name": "Aniket  Purushottam  Gawande",
      "Gender": "Male",
      "Date of Birth": "20-11-2002",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 78.2,
      "SSC (Year Of Passing)": 2018,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 64,
      "HSC (Year Of Passing)": 2020,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "NA",
      "Diploma Percentage": "NA",
      "Diploma Year Of Passing": "NA",
      "Diploma Board": "NA",
      "I Semester Percentage": 85,
      "II Semester Percentage": 88,
      "III Semester Percentage": 82,
      "IV Semester Percentage": 52,
      "BE AGGREGATE": 76.75,
      "I Semester PTR": 9.54,
      "II Semester PTR": 9.9,
      "III Semester PTR": 9.85,
      "IV Semester PTR": 5.8,
      "BE SGPA": 8.77,
      "Current Backlog": 1,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9637995507,
      "Email ID": "aniketgawande3687@gmail.com",
      "Local Address": "Amravati",
      "Permanent Address": "Sant tukdoji ward hinganghat",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "Paython",
      "Aadhar Number": 475000000000,
      "University Roll Number": "21BD310249"
    },
    {
      "SN": 14,
      "College ID": "21BE0244",
      "Enrollment Number": "NA",
      "Full Name": "Aniruddha  Sanjay Bansod",
      "Gender": "Male",
      "Date of Birth": "11-03-2001",
      "Branch": "Computer Science & Engineering",
      "College": "Sipna COET, Amravati",
      "Year Of Passing": 2024,
      "SSC Percentage": 88,
      "SSC (Year Of Passing)": 2016,
      "SSC Board": "Maharashtra State Board",
      "HSC Percentage": 55.4,
      "HSC (Year Of Passing)": 2018,
      "HSC Board": "Maharashtra State Board",
      "Diploma Branch": "Computer engineering",
      "Diploma Percentage": 89.39,
      "Diploma Year Of Passing": 2021,
      "Diploma Board": "MSBTE",
      "I Semester Percentage": 0,
      "II Semester Percentage": 0,
      "III Semester Percentage": 93.55,
      "IV Semester Percentage": 60.45,
      "BE AGGREGATE": 77,
      "I Semester PTR": 0,
      "II Semester PTR": 0,
      "III Semester PTR": 10,
      "IV Semester PTR": 7.32,
      "BE SGPA": 8.7,
      "Current Backlog": 0,
      "History Of Backlog": 0,
      "Year down": 0,
      "Mobile Number": 9503803398,
      "Email ID": "aniruddhabansod11@gmail.com",
      "Local Address": "Shirajgaon Kasba, TQ. Chandur B. Dist. Amravati",
      "Permanent Address": "Shirajgaon Kasba, TQ. Chandur B. Dist. Amravati",
      "University": "S.G.B.A.U., Amravati",
      "Skill Set": "C,C++,Java/Python,HTML,CSS, etc",
      "Aadhar Number": "2554 6297 7299",
      "University Roll Number": "21BD310250"
    }
    // Add more items as needed
  ]);
};



function TableData() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);


    // Calculate index of the last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate index of the first item on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Get current items to display on the page
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchDataFromDatabase().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);
  return (
    <>
     <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Student Data
        </h2>
    <div class="relative overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg ">
      <table class="w-full text-sm text-left  text-gray-500 bg-red-500 dark:bg-[#1E293B] ">
        <thead class="text-sm bg-[#1E293B] dark:bg-indigo-500  dark:text-white w-full whitespace-nowrap text-white">
          <tr className="text-center w-full">
            <th scope="col" class=" py-6 px-3 ">
              College ID
            </th>
            <th scope="col" class=" py-6 px-3 ">
              Enrollment Number
            </th>
            <th scope="col" class="px-6 py-3">
              Full Name
            </th>
            <th scope="col" class="px-6 py-3 w-1/4">
              Gender
            </th>
            <th scope="col" class="px-6 py-3">
              Date of Birth
            </th>
            <th scope="col" class="px-6 py-3">
              Branch
            </th>
            <th scope="col" class="px-6 py-3">
              College
            </th>
            <th scope="col" class="px-6 py-3">
              Year Of Passing
            </th>
            <th scope="col" class="px-6 py-3">
              SSC Board
            </th>

            <th scope="col" class="px-6 py-3">
              SSC (Year Of Passing)
            </th>
            <th scope="col" class="px-6 py-3">
              SSC Percentage
            </th>
            <th scope="col" class="px-6 py-3">
              HSC Board
            </th>
            <th scope="col" class="px-6 py-3">
              HSC (Year Of Passing)
            </th>
            <th scope="col" class="px-6 py-3">
              HSC Percentage
            </th>
            <th scope="col" class="px-6 py-3">
              Diploma Board
            </th>
            <th scope="col" class="px-6 py-3">
            Diploma Branch
            </th>
            <th scope="col" class="px-6 py-3">
            Diploma Percentage
            </th>
            <th scope="col" class="px-6 py-3">
            Diploma Year Of Passing
            </th>

            <th scope="col" class="px-6 py-3">
            I Semester Percentage
            </th>

            <th scope="col" class="px-6 py-3">
            II Semester Percentage
            </th>
            <th scope="col" class="px-6 py-3">
            III Semester Percentage
            </th>
            <th scope="col" class="px-6 py-3">
            IV Semester Percentage
            </th>
            <th scope="col" class="px-6 py-3">
            BE AGGREGATE
            </th>
            <th scope="col" class="px-6 py-3">
            I Semester PTR
            </th>
            <th scope="col" class="px-6 py-3">
            II Semester PTR
            </th>
            <th scope="col" class="px-6 py-3">
            III Semester PTR
            </th>
            <th scope="col" class="px-6 py-3">
            IV Semester PTR
            </th>
            <th scope="col" class="px-6 py-3">
            BE SGPA
            </th>
            <th scope="col" class="px-6 py-3">
            Current Backlog
            </th>
            <th scope="col" class="px-6 py-3">
            History Of Backlog
            </th>
            <th scope="col" class="px-6 py-3">
            Year down
            </th>
            <th scope="col" class="px-6 py-3">
            Mobile Number
            </th>
            <th scope="col" class="px-6 py-3">
            Email ID
            </th>
            <th scope="col" class="px-6 py-3 ">
            Local Address
            </th>
            <th scope="col" class="px-6 py-3">
            Permanent Address
            </th>
            <th scope="col" class="px-6 py-3">
            University
            </th>
            <th scope="col" class="px-6 py-3">
            Skill Set
            </th>
            <th scope="col" class="px-6 py-3">
            Aadhar Number
            </th>
            <th scope="col" class="px-6 py-3">
            University Roll Number
            </th>
            


           
          </tr>
        </thead>
        <tbody>

        {currentItems.map((Data, index) =>(
            <tr key={index} class="bg-white border-b dark:bg-gray-800   whitespace-nowrap text-center">
                <th scope="row" class="px-6 py-4 font-medium">
                    {Data['College ID']}
                </th>
                <td  scope="row" class="px-6 py-4">
                    {Data['Enrollment Number']}
                </td>
                <td class="px-6 py-4 ">
                {Data['Full Name']}
                </td>
                <td class="px-6 py-4">
                {Data['Gender']}
                </td>
                <td class="px-6 py-4">
                {Data['Date of Birth']}
                </td>
                <td class="px-6 py-4 ">
                {Data['Branch']}
                </td>
                <td class="px-6 py-4">
                {Data['College']}
                </td>
                <td class="px-6 py-4">
                {Data['Year Of Passing']}
                </td>
                <td class="px-6 py-4">
                {Data['SSC Board']}
                </td>
                
                <td class="px-6 py-4">
                {Data['SSC (Year Of Passing)']}
                </td>
                
                <td class="px-6 py-4">
                {Data['SSC Percentage']}
                </td>
                
                <td class="px-6 py-4">
                {Data['HSC Board']}
                </td>
                <td class="px-6 py-4">
                {Data['HSC (Year Of Passing)']}
                </td>
                <td class="px-6 py-4">
                {Data['HSC Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['Diploma Board']}
                </td>
                <td class="px-6 py-4">
                {Data['Diploma Branch']}
                </td>
                <td class="px-6 py-4">
                {Data['Diploma Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['Diploma Year Of Passing']}
                </td>
                <td class="px-6 py-4">
                {Data['I Semester Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['II Semester Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['III Semester Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['IV Semester Percentage']}
                </td>
                <td class="px-6 py-4">
                {Data['BE AGGREGATE']}
                </td>
                <td class="px-6 py-4">
                {Data['I Semester PTR']}
                </td>
                <td class="px-6 py-4">
                {Data['II Semester PTR']}
                </td>
                <td class="px-6 py-4">
                {Data['III Semester PTR']}
                </td>
                <td class="px-6 py-4">
                {Data['IV Semester PTR']}
                </td>
                <td class="px-6 py-4">
                {Data['BE SGPA']}
                </td>
                <td class="px-6 py-4">
                {Data['Current Backlog']}
                </td>
                <td class="px-6 py-4">
                {Data['History Of Backlog']}
                </td>
                <td class="px-6 py-4">
                {Data['Year down']}
                </td>
                <td class="px-6 py-4">
                {Data['Mobile Number']}
                </td>
                <td class="px-6 py-4">
                {Data['Email ID']}
                </td>
                <td  scope="row" class="px-6 py-4  w-32" >
                {Data['Local Address']}
                </td>
                <td class="px-6 py-4">
                {Data['Permanent Address']}
                </td>
                <td class="px-6 py-4">
                {Data['University']}
                </td>
                <td class="px-6 py-4">
                {Data['Skill Set']}
                </td>
                <td class="px-6 py-4">
                {Data['Aadhar Number']}
                </td>
                <td class="px-6 py-4">
                {Data['University Roll Number']}
                </td>        
               
            </tr>
        ))}


  
        </tbody>


      </table>
      
          </div>

          <nav className=" fixed md:right-14 md:top-16 right-4" >
  <ul className="pagination flex mt-6 float-right " >
    {/* Previous Button */}
    {currentPage > 1 && (
      <li className="page-item">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="text-sm dark:bg-indigo-500 text-white hover:bg-indigo-500 hover:text-white px-3 py-2    rounded-lg mx-1 focus:outline-none"
        >
          Previous
        </button>
      </li>
    )}

    {/* Page Numbers */}
    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => i + 1).map((number) => (
      <li key={number} className="page-item">
        <button
          onClick={() => paginate(number)}
          className={`${
            currentPage === number ? "text-sm bg-indigo-500 text-white" : "bg-white text-white  px-3 py-1 dark:bg-[#1E293B]"
          } hover:bg-indigo-500 hover:text-white  px-4 py-2 rounded-lg mx-1 focus:outline-none text-sm `}
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
          className="text-sm dark:bg-indigo-500 text-white hover:bg-indigo-500 hover:text-white px-3 py-2    rounded-lg mx-1 focus:outline-none"
        >
          Next
        </button>
      </li>
    )}
  </ul>
</nav>

          </>
  );
}

export default TableData;
