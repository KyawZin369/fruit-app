import { useAppContext } from "./ThemedApp";

const style = {
  padding: 20,
  borderBottom: "1px solid transparent",
  display: "flex",
  borderRadius: "20px",
  justifyContent: "space-between",
};

function Item({ fruit, remove }) {

  const { mode } = useAppContext()

  return (
    <li style={{ ...style, borderColor: mode == "dark" ? "#555" : "#ccc" }}>
      {fruit.content}
      <button onClick={() => remove(fruit.id)}>Delete</button>
    </li>
  );
}

export default Item;
