import React, { useState } from "react";
import {
  Box,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import EditIcon from "@mui/icons-material/Edit";

export default function ShoppingListItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSubtractQuantity = () => {
    quantity - 1 < 0 ? setQuantity(0) : setQuantity(quantity - 1);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleEditClick = () => {
    console.log("edit clicked");
  };

  return (
    <Box sx={{ paddingBottom: 3 }}>
      <Paper sx={{ borderRadius: 2 }} elevation={3}>
        <ListItem
          secondaryAction={
            <IconButton onClick={handleEditClick} edge="end">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            <CircleRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={`${item.name}`}
            secondary={`Quantity: ${quantity}`}
          />
          {/* <IconButton onClick={handleSubtractQuantity}>
            <RemoveCircleOutlineRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleAddQuantity}>
            <AddCircleOutlineRoundedIcon fontSize="small" />
          </IconButton> */}
        </ListItem>
      </Paper>
    </Box>
  );
}
