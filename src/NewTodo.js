export default function NewTodo(props) {
  const { onChange, onSubmit, text } = props;

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}
