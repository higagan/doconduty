import React, { useState } from 'react';
import './MultiSearchBar.css';

const MultiSearchBar = ({ onSearch }) => {
  const [searchValues, setSearchValues] = useState({
    hospital: '',
    date: '',
    shiftTime: '',
    department: '',
    qualification: ''
  });

  const handleChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    onSearch(searchValues);
  };

  return (
    <div className="multi-search-bar">
      <input
        type="text"
        name="hospital"
        value={searchValues.hospital}
        onChange={handleChange}
        placeholder="Search Hospital"
      />
      <input
        type="date"
        name="date"
        value={searchValues.date}
        onChange={handleChange}
        placeholder="Search Date"
      />
      <select name="shiftTime" value={searchValues.shiftTime} onChange={handleChange}>
        <option value="">Select Shift Time</option>
        <option value="morning">Morning Shift</option>
        <option value="afternoon">Afternoon Shift</option>
        <option value="night">Night Shift</option>
      </select>
      <select name="department" value={searchValues.department} onChange={handleChange}>
        <option value="">Select Department</option>
        <option value="ward">Ward</option>
        <option value="icu">ICU</option>
        <option value="emergency">Emergency</option>
      </select>
      <select name="qualification" value={searchValues.qualification} onChange={handleChange}>
        <option value="">Select Qualification</option>
        <option value="mbbs">MBBS</option>
        <option value="ayush">AYUSH</option>
        <option value="bds">BDS</option>
        <option value="nursing">Nursing</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MultiSearchBar;
