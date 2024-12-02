import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

interface User {
  name: string;
}

interface NavBarProps {
  user: User; // `user` is required
  onLogout: () => void; // `onLogout` is required
}

const NavBar: React.FC<NavBarProps> = ({ user, onLogout }) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" className="nav-link">
            Nextap
          </Link>
        </Typography>
        <Box>
          <Typography variant="body1" style={{ marginRight: "16px" }}>
            Hello, {user.name}
          </Typography>
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
          <Button
            color="secondary"
            variant="contained"
            onClick={onLogout}
            style={{ marginLeft: "16px" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;