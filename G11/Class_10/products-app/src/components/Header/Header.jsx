import "./Header.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItemsLength = useSelector((state) => state.cart.cartItems.length);

  const pages = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
  ];

  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {pages.map((page) => (
            <Button key={page.to}>
              <Link
                to={page.to}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {page.label}
              </Link>
            </Button>
          ))}
        </Box>

        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={cartItemsLength} color="success">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
