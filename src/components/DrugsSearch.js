import React, { useState } from "react";

const DrugsSearch = (props) => {
  const { setFilteredArr, drugsList } = props;

  const onSearchChange = (event) => {
    // setFilteredArr([]);
    const filteredDrugsList = drugsList.filter(
      (drug) => drug.drugsName.indexOf(event.target.value) != -1
    );
    setFilteredArr(filteredDrugsList);
  };
  return (
    <div className="my-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Search for a drug
      </label>
      <input
        onChange={onSearchChange}
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default DrugsSearch;
