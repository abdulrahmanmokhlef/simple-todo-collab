import TodoItem from "./TodoItem";
export default function TodoList(props) {
  /* Destructure props */
  const { todoItems, onCompleteChange, onDelete } = props;

  return (
    <ul>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
