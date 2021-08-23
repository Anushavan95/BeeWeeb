import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Gmail from "../../icons/gmail.png";
import FacebookIcon from "../../icons/face.png";
import Github from "../../icons/github.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ListAccount() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading} variant={"2"}>
            Contact Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className="list-contact">
              <a href={"mailto:yanushavan@gmail.com"}>
                <img src={Gmail} />
                Gmail
              </a>
            </li>
            <li className="list-contact">
              <a href={"https://www.facebook.com/"}>
                <img src={FacebookIcon} />
                Facebook
              </a>
            </li>
            <li className="list-contact">
              <a href={"https://github.com/Anushavan95"}>
                <img src={Github} />
                Github
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
