import * as React from "react";
import classes from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../../../../Constant/faqData";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Faq</h2>
      {faqData.map((data, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChangeAccordion(`panel${index}`)}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummary}
          >
            <Typography className={classes.accordionQuestion}>
              {data.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography className={classes.accordionText}>
              {data.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default Faq;
