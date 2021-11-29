import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  
  return (
    <Grid item md={3} xs={6} >
    <Card className="card">  
      <CardMedia className="product-image">
        <img src={product.image} alt="nothing" />
</CardMedia>
                <CardContent>
                <Typography variant="subtitle1">
                    {product.name}
                  </Typography>

                  <Typography color="textSecondary" variant="subtitle2">
                  ₹{product.cost}
                  </Typography>
                    <Rating name="read-only" value={product.rating} readOnly />
                    <Button fullWidth variant="contained" onClick={handleAddToCart}>
            Add To Cart </Button>
                </CardContent>
            
    </Card>
    </Grid>
  );
};

export default ProductCard;
