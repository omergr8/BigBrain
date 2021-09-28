import classes from "./CryptoBanner.module.css";
import LinksBanner from "../LinksBanner/LinksBanner";
const CryptoBanner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {/* <h2>JOIN US FOR PRE-LAUNCH GIVEAWAYS AND MORE!</h2> */}
        <div>
          <LinksBanner />
        </div>
      </div>
    </div>
  );
};
export default CryptoBanner;
