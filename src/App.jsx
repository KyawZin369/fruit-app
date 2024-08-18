import { useRef } from "react";
import { useState } from "react";
import Item from "./Item";
import Header from "./Header";
import { useAppContext } from "./ThemedApp";
import {
  List,
  Box,
  Container,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function App() {
  const { mode } = useAppContext;

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
    <Box>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        {showForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              add(inputRef.current.value);
              e.currentTarget.reset();
            }}
          >
            <OutlinedInput
              fullWidth
              type="text"
              inputRef={inputRef}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <AddIcon></AddIcon>
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
        )}
        <List>
          {data.map((fruit) => {
            return <Item key={fruit.id} fruit={fruit} remove={remove} />;
          })}
        </List>
      </Container>
    </Box>
  );
}
