import classes from "./LinksBanner.module.css";
import { IconContext } from "react-icons";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const LinksBanner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.iconsFlex}>
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
  );
};
export default LinksBanner;
