export default function TodoItem(props) {
  /* Destructure props */
  const { todo, onCompleteChange, onDelete } = props;

  return (
    <div>
      <p>{todo.text}</p>
      <button
        onClick={(e) => {
          onDelete(e, todo.id);
        }}
      >
        Delete
      </button>
      <input
        type="checkbox"
        value={todo.completed}
        onChange={(e) => {
          onCompleteChange(e, todo.id);
        }}
      />
    </div>
  );
}
