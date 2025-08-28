import React, { useState } from "react";
import SearchBar from "./components/Searchbar";
import CollegeList from "./components/CollegeList";
import "./App.css";

function App() {
  const [colleges, setColleges] = useState([]);

  // Function to fetch universities by country
  const fetchColleges = async (country) => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      setColleges(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="font">🌍 College Finder</h1>
      <SearchBar onSearch={fetchColleges} />
      <CollegeList colleges={colleges} />
    </div>
  );
}

export default App;
