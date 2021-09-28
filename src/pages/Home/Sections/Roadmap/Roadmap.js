import classes from "./Roadmap.module.css";
import clsx from "clsx";
const Roadmap = () => {
  return (
    <div>
      <div className={classes.roadMain}>
        <div className={classes.textContainer}>
          <h2 className={classes.mainHeading}>Roadmap</h2>
          <h3 className={classes.secondaryHeading}>Season 1</h3>
          <p>
            {/* As we get closer to launch we think you'll be a little mind blown by
            the things we got planned! OG Big Brains in our discord may even
            have some say over the things we do. A bunch of Big Brains is always
            better than one, right? */}
          </p>
          <p>#Brainstorming</p>
        </div>
        <div className={classes.main}>
          <ul className={classes.timeline}>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={classes.flag}>
                    <h2>20%</h2>
                    <p>
                      {/* Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it! */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionR}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>40%</h2>
                    <p>
                      {" "}
                      {/* Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it! */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>60%</h2>
                    <p>
                      {" "}
                      {/* Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it! */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionR}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>80%</h2>
                    <p>
                      {" "}
                      {/* Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it! */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>100%</h2>
                    <p>
                      {" "}
                      {/* Highest reward tokenomics ever SEEN before, With
                      experienced, smart, and motivated group of developers
                      behind it! */}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
