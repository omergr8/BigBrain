import classes from "./Team.module.css";
import Button from "@mui/material/Button";
import team from "../../../../Assets/team.png";
import member1 from "../../../../Assets/member1.jpeg";
import member2 from "../../../../Assets/member2.jpeg";
import member3 from "../../../../Assets/member3.png";
import member4 from "../../../../Assets/member4.png";
const data = [
  {
    name: "StackinNFTz",
    text: "Degree in Marketing with over 6 years of experience in social media marketing and sales. Somewhat of a networking guru. Started multiple B2C companies and looking to grow a community and long term platform on the blockchain through NFT’s. Crypto addict and NFT junkie.",
    image: member1,
    twitter: "https://twitter.com/StackinNFTz",
  },
  {
    name: "FlippaNft",
    text: "Degree in Entrepreneurship with experience in multi level business development. Worked with startups and participated in business consulting. Former Amazon employee. Started NFT trading this last year and found a passion for starting up his own.",
    image: member2,
    twitter: "https://twitter.com/FlippaNft",
  },
  {
    name: "Exion",
    text: "Crypto Veteran of 9 years touching all aspects. Multiple token and NFT launches along with providing consulting support to multiple other projects.",
    image: member4,
    twitter: "",
  },
  {
    name: "Dr. Jones",
    text: "A director/cinematographer by trade for the last 12 years and heavily in the crypto community for the last 4 years. During the covid lockdowns is where my creative passion and crypto enthusiasm overlapped in the NFT space. Down the rabbit hole and never turning back!",
    image: member3,
    twitter: "https://twitter.com/shilldianajones",
  },
];
const Team = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.heading}>
          Meet The <span>Team</span>
        </h2>
        <div>
          <img
            src={team}
            alt="team"
            width="100%"
            className={classes.teamImage}
          />
        </div>

        <div className={classes.founderCard}>
          {data.map((dt, i) => (
            <div key={i} className={classes.flexItem}>
              <div className={classes.founderAvatar}>
                <img src={dt.image} alt="member1" width="50%" />
              </div>
              <div className={classes.founderText}>
                <h2>{dt.name}</h2>
                <p>{dt.text}</p>
              </div>
              <div className={classes.founderButton}>
                <a
                  href={dt.twitter}
                  target="_blank"
                  className={classes.anchorButton}
                >
                  <Button variant="outlined" className={classes.twitterButton}>
                    twitter
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
