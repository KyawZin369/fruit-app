const style = {
  padding: 20,
  borderBottom: "1px solid #ddd",
  display: "flex",
  borderRadius: "20px",
  justifyContent: "space-between"
}

function Item({ fruit , remove }) {
  return <li style={style}>{fruit.content}
  <button onClick={() => remove(fruit.id)}>Delete</button>
  
  </li>;
}

export default Item;
