import classes from "./Footer.module.css";
import { IconContext } from "react-icons";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className={classes.mainFooter}>
        <div className={classes.container}>
          <div className={classes.flex}>
            <div>
              <a
                href="https://discord.gg/ZJtQJqSu"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ className: classes.icon }}>
                  <FaDiscord />
                </IconContext.Provider>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/big_brainnft?s=21"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ className: classes.icon }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className={classes.secondaryFooter}>
        <div className={classes.container}>
          <p className={classes.secondaryText}>
            {/* © 2021 CryptoDads: <span>App Name</span> */}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
