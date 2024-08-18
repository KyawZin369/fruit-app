import { useAppContext } from "./ThemedApp";
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material"


function Item({ fruit, remove }) {

  const { mode } = useAppContext()

  return (
    <ListItem>
      <ListItemText primary={fruit.content}/>
      <ListItemSecondaryAction>
        <IconButton onClick={()=>remove(fruit.id)}>
          <DeleteIcon color="error"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Item;
