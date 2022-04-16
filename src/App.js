import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DrugsForm from "./components/DrugsForm";
import DrugsList from "./components/DrugsList";
import DrugsSearch from "./components/DrugsSearch";

function App() {
  const [drugsList, setDrugsList] = useState(drugsListArr);
  const [filteredArr, setFilteredArr] = useState(drugsList);

  return (
    <div className="App container">
      {/* props drilling */}
      <DrugsForm
        setDrugsList={setDrugsList}
        setFilteredArr={setFilteredArr}
        drugsList={drugsList}
      />
      <DrugsSearch setFilteredArr={setFilteredArr} drugsList={drugsList} />
      <DrugsList list={filteredArr} />
    </div>
  );
}

export default App;

const drugsListArr = [
  {
    id: 1,
    drugsName: "lorem 1",
    amount: "3",
  },
  {
    id: 2,
    drugsName: "lorem 2",
    amount: "5",
  },
  {
    id: 3,
    drugsName: "lorem 3",
    amount: "1",
  },
];
