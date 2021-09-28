/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Link } from "react-scroll";
import { debounce } from "../../../utilities/helper";
import classes from "./Header.module.css";
import clsx from "clsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconContext } from "react-icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import logo from "../../../Assets/logo.png";
import Sidebar from "./Components/Sidebar";
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={clsx(classes.main, visible ? classes.visible : classes.hide)}
    >
      <div className={classes.container}>
        <div className={classes.headerFlex}>
          <div className={classes.flex1}>
            <img src={logo} alt="logo" width="100px" />
          </div>
          <div className={classes.flex2}>
            <div className={classes.linksFlex}>
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
          <div className={classes.flex3}>
            <IconContext.Provider
              value={{ size: "24px", className: classes.cartIcon }}
            >
              <BsThreeDotsVertical
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </IconContext.Provider>

            <div className={classes.hamIcon}>
              <Sidebar />
            </div>
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <a
                className={classes.anchor}
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
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <a
                className={classes.anchor}
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
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Header;
