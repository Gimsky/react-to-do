import React, { useState } from "react";
import { PropTypes, func } from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(e) {
    e.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: func.isRequired,
};

export default AddTodo;
