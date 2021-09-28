import classes from "./WhoAreWe.module.css";
import Button from "@mui/material/Button";
import Avatar1 from "../../../../Assets/avatar1.png";
import Avatar2 from "../../../../Assets/avatar2.png";

const WhoAreWe = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.flex}>
          <div className={classes.flex1}>
            <h1>What Are Big Brains?</h1>
            <p>
              If you have to ask yourself what a Big Brain is this probably
              isn't the project for you, unless you are lucky enough to mint a
              smooth brain. Big Brains are 7777 unique and randomly generated
              masterpieces modeled after the big brains us smooth brains aspire
              to be like big - brain?
              <br />
              <br />
              Big Brain Gang is created to resemble who Big Brains are -
              intelligent, sexy, desirable and for big big brains - wealthy!
              <br />
              <br />
              Big Brains come from a long line of the smartest and most
              well-versed people in the metaverse. They know everything there is
              to know about everything.
              <br />
              <br />
              Being apart of the Big Brain Gang will automatically make you one
              of the metaverse elite! Joining our community is a no-brainer!
            </p>
            {/* <Button variant="contained" className={classes.officialButton}>
              Official Opensea
            </Button> */}
          </div>
          <div className={classes.flex2}>
            <div className={classes.imageFlex}>
              <div className={classes.image1}>
                <img src={Avatar1} alt="Avatar1" width="100%" />
              </div>
              <div className={classes.image2}>
                <img src={Avatar2} alt="Avatar2" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoAreWe;
