import { useRef } from "react";
import { useState } from "react";
import Item from "./Item";
import Header from "./Header";

export default function App() {
  const [data, setData] = useState([
    { id: 3, content: "Apple" },
    { id: 2, content: "Orange" },
    { id: 1, content: "Mango" },
  ]);

  const inputRef = useRef();

  const add = (content) => {
    const id = data[0] ? data[0].id + 1 : 1;
    setData([{ id, content }, ...data]);
  };

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <form
        style={{ marginBottom: 20, display: showForm ? "flex" : "none"  }}
        onSubmit={(e) => {
          e.preventDefault();
          add(inputRef.current.value);
          e.currentTarget.reset();
        }}
      >
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
      <ul className="list">
        {data.map((fruit) => {
          return <Item key={fruit.id} fruit={fruit} remove={remove} />;
        })}
      </ul>
    </div>
  );
}
