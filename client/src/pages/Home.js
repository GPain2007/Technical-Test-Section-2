import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODOS, QUERY_ME_BASIC } from "../utils/queries";
import ToDoList from "../components/ToDoLists/ToDoLists";
import ToDoForm from "../components/ThoughtForm";
import Auth from "../utils/auth";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_TODOS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const ToDos = data?.ToDos || [];
  const loggedIn = Auth.loggedIn();

  console.log(ToDos);
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ToDoForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
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
