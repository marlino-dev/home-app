import React, { useEffect, useState } from "react";
import { Box, Typography, List, Button, Paper, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingListItem from "./ShoppingListItem";

export function ShoppingList() {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    setShoppingList([
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
      { name: "Cuban Bread Rolls", quantity: 1 },
    ]);
  }, []);

  const handleAddItemClick = () => {
    console.log("add item clicked");
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          m: 1,
          marginLeft: 4,
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="h3">Shopping List</Typography>
        </Box>
        <Typography fontSize={20} variant="caption">
          Items: {shoppingList.length}
        </Typography>
      </Box>
      {shoppingList.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: 1,
            p: 1,
          }}
        >
          <Box
            sx={{
              m: 1,
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
              Add to shopping list
            </Button>
          </Box>
          <Paper
            sx={{
              m: 1,
              p: 2,
              width: "80%",
              maxHeight: "340px",
              overflow: "auto",
            }}
            elevation={7}
          >
            <List>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {shoppingList.map((item, index) => {
                  return (
                    <Grid item key={index} xs={2} sm={4} md={4}>
                      <ShoppingListItem item={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </List>
          </Paper>
        </Box>
      ) : (
        <Box
          sx={{
            m: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <img
            src={require("../assets/empty_cart.png")}
            alt="Empty shopping cart"
          ></img>
          <Box sx={{ m: 3 }} />
          <Typography variant="h6">
            The shopping list is empty! Add some items.
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
}
