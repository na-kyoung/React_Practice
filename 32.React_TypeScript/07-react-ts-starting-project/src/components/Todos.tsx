import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
// const Todos = (props: { items: string[] }) => {
return (
    <ul>
      {/* <li>Learn React</li>
      <li>Learn TypeScript</li> */}
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

export default Todos;