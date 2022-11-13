import styled from "@emotion/styled";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../styles/theme";



export const useStyles = makeStyles((theme: any) => ({
  detailRoot: {
    display: "block"
  },
  root: {
    '& .Mui-expanded': {
      margin: "0px"
    },
    position: "unset",  
  }
}));

export default function SimpleAccordion(props: any) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AccordionWrapper width={props.width} elevation={props.elevation} classes={{ root: classes.root }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails  classes={{ root: classes.detailRoot }}>
          <Typography>{props.menus}</Typography>
        </AccordionDetails>
      </AccordionWrapper>
    </ThemeProvider>
  );
}
export const AccordionWrapper = styled(Accordion)<{width: string}>`
  width: ${(props)=>props.width}; 
`


