import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODOS } from "../utils/queries";
import ToDoList from "../components/ToDoLists/ToDoLists";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_TODOS);
  const ToDos = data?.ToDos || [];
  console.log(ToDos);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToDoList ToDos={ToDos} title="Some Feed for ToDo(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
