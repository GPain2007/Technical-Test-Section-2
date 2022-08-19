import React from "react";

const ToDoList = ({ ToDos, title }) => {
  if (!ToDos.length) {
    return <h3>Nothing ToDo</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {ToDos &&
        ToDos.map((ToDo) => (
          <div key={ToDo._id} className="card mb-3">
            <p className="card-header">
              {ToDo.username}
              ToDo on {ToDo.createdAt}
            </p>
            <div className="card-body">
              <p>{ToDo.ToDoText}</p>
              {/* <p className="mb-0">
                Reactions: {ToDo.reactionCount} || Click to{" "}
                {ToDo.reactionCount ? "see" : "start"} the discussion!
              </p> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDoList;
