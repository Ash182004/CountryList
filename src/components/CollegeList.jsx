import React from "react";
import { motion } from "framer-motion";
import "./CollegeList.css";

function CollegeList({ colleges }) {
  if (colleges.length === 0) {
    return <p className="no-data">No college found! Try again</p>;
  }

  const countryName = colleges[0].country;

  return (
    <div className="college-list-container">
      <h2>Universities in {countryName}</h2>

      <table className="college-table">
        <thead>
          <tr>
            <th>#</th>
            <th>University Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <td>{index + 1}</td>
              <td>{college.name}</td>
              <td>
                <a href={college.web_pages[0]} target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollegeList;
