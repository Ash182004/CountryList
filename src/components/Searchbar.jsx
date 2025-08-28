import React, { useState } from "react"; 
import { motion } from "framer-motion";
import "./SearchBar.css";

function SearchBar({ onSearch, hasResults }) {
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country.trim() !== "") {
      onSearch(country);
    }
  };

  return (
    <motion.div
      className={`search-container ${hasResults ? "top" : "center"}`}
      initial={false}
      animate={hasResults ? { y: 0 } : { y: 0 }} // keep layout natural
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Enter country name..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </motion.div>
  );
}

export default SearchBar;
