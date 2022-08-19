import React from "react";

const SingleToDo = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{" "}
          ToDo on createdAt
        </p>
        <div className="card-body">
          <p>ToDo Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
