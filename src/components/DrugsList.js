import React from "react";

const DrugsList = (props) => {
  const { list } = props;

  return (
    <div className="mt-4">
      <ol className="list-group list-group-numbered">
        {list?.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.drugsName}</div>
              </div>
              <span className="badge bg-primary rounded-pill">
                {item.amount}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default DrugsList;
