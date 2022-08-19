import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../utils/mutations";
import { QUERY_TODOS, QUERY_ME } from "../../utils/queries";

const ToDoForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addToDo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addToDo } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, ToDos: [...me.ToDos, addToDo] } },
        });
      } catch (e) {
        console.warn("First thought insertion by user!");
      }
      // update Todo array's cache
      const { ToDos } = cache.readQuery({ query: QUERY_TODOS });
      cache.writeQuery({
        query: QUERY_TODOS,
        data: { ToDos: [addToDo, ...ToDos] },
      });
    },
  });
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setText("");
    setCharacterCount(0);
    try {
      // add thought to database
      await addToDo({
        variables: { thoughtText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new thought..."
          value={thoughtText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
