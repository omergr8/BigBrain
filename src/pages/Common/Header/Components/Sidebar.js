import React, { useState } from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import List from "@mui/material/List";
import classes from "../Header.module.css";
import logo from "../../../../Assets/logo.png";
const Sidebar = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.sidebarMain}
    >
      <List>
        <div className={classes.sidebarLogo}>
          <img src={logo} alt="logo" width="35%" />
        </div>
        <div className={classes.sideContainer}>
          <div className={classes.sidebarLinks}>
            <Link
              className={classes.anchor}
              to="Home"
              spy={true}
              smooth={true}
              duration={800}
            >
              <p>Home</p>
            </Link>
            <Link
              className={classes.anchor}
              to="We"
              spy={true}
              smooth={true}
              duration={800}
            >
              <p>Who Are We</p>
            </Link>
            <Link
              className={classes.anchor}
              to="Launch"
              spy={true}
              smooth={true}
              duration={800}
            >
              <p>Launch</p>
            </Link>
            <Link
              className={classes.anchor}
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={800}
            >
              <p>Roadmap</p>
            </Link>
            <Link
              className={classes.anchor}
              to="Team"
              spy={true}
              smooth={true}
              duration={800}
            >
              <p>Team</p>
            </Link>
          </div>
        </div>
      </List>
      <hr />
      <List>
        <div className={classes.sideContainer}>
          <a
            className={classes.anchorS}
            href="https://discord.gg/ZJtQJqSu"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <span>
                <FaDiscord />{" "}
              </span>
              Discord
            </p>
          </a>
          <a
            className={classes.anchorS}
            href="https://twitter.com/big_brainnft?s=21"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <span>
                <FaTwitter />
              </span>{" "}
              Twitter
            </p>
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)}>
        <IconContext.Provider
          value={{ size: "24px", className: classes.hamIcon }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
      </div>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};
export default Sidebar;
