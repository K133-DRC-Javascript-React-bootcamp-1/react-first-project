import React, { useState } from "react";

function DrugsForm(props) {
  const { setDrugsList, drugsList, setFilteredArr } = props;
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault();

    setDrugsList([
      ...drugsList,
      {
        drugsName: name,
        amount: amount,
        id: drugsList[drugsList.length - 1].id + 1,
      },
    ]);
    setFilteredArr([
      ...drugsList,
      {
        drugsName: name,
        amount: amount,
        id: drugsList[drugsList.length - 1].id + 1,
      },
    ]);
    setName("");
    setAmount(0);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Drug name
        </label>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Amount
        </label>
        <input
          onChange={(event) => setAmount(event.target.value)}
          value={amount}
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default DrugsForm;
