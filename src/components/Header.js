import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = (props) =>
  {
    const history = useHistory();

    const explore = () =>{
      history.push("/");
    }
   const register = () => {
      history.push("/register");
    };
  
    const login = () => {
      history.push("/login");
    };
  
    const logout = () => {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      history.push("/");
      window.location.reload();
    };
  
    return (
      <Box className="header">
        <Box
          className="header-title"
        >
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {props.hasHiddenAuthButtons ? <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={explore}
        >
          Back to explore
        </Button> :
        <div className="header-action">
          {localStorage.getItem("username") ? (
            <>
              <Avatar
                src="avatar.png"
                alt="profile"
                className="profile-image" 
              />

              <div className="header-info">
                {localStorage.getItem("username")}
              </div>

              <Button variant="text" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="text" onClick={login}>
                Login
              </Button>

              <div className="header-link">
                <Button type="primary" onClick={register}>
                  Register
                </Button>
              </div>
            </>
          )}
        </div>
  }
      </Box>
    );
  };

export default Header;
