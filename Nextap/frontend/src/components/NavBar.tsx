import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

interface User {
  name: string; // Define the structure of `user`
}

interface NavBarProps {
  user?: User; // Optional user object
  onLogout?: () => void; // Optional logout handler
  title: string; // Required title prop
  loginLabel: string; // Required login label
}

const NavBar: React.FC<NavBarProps> = ({ user, onLogout, title, loginLabel }) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  // Open the menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        {/* Left Section: App Title */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" className="nav-link">
            {title}
          </Link>
        </Typography>

        {/* Right Section */}
        <Box>
          {user && (
            <Typography
              variant="body1"
              style={{ marginRight: "16px", display: "inline-block" }}
            >
              Hello, {user.name}
            </Typography>
          )}
          <IconButton
            color="inherit"
            aria-controls="nav-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/send-receive" className="nav-link">
                Send & Receive
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/statements" className="nav-link">
                Statements
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/balance" className="nav-link">
                Balance
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/add-card" className="nav-link">
                Add Card
              </Link>
            </MenuItem>
          </Menu>
          {user && (
            <Button
              color="secondary"
              variant="contained"
              onClick={onLogout}
              style={{ marginLeft: "16px" }}
            >
              {loginLabel}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;