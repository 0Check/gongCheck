import styled from "@emotion/styled";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../styles/theme";

interface ISimpleAccordionProps {
  width: string,
  border: string,
  title: string,
  height: string,
  menus: JSX.Element
}
// export const useStyles = makeStyles((theme: any)
export const useStyles = makeStyles(() => ({
  detailRoot: {
    display: "block",
    '& .MuiCollapse-entered': {
      overflow: "auto",
    },   
  },
  root: {
    '& .Mui-expanded': {
      margin: "0px"
    },
    position: "unset",  
  },
  summary: {
    
  }
}));


export default function SimpleAccordion(props: ISimpleAccordionProps) {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
      <AccordionWrapper 
        width={props.width}
        border={props.border} 
        elevation={0}
        classes={{ root: classes.root }}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionWrappers height={props.height}  classes={{ root: classes.detailRoot }}>
          <Typography>{props.menus}</Typography>
        </AccordionWrappers>
      </AccordionWrapper>
    // </ThemeProvider>
  );
}
export const AccordionWrapper = styled(Accordion)<{width: string, border: string}>`
  width: ${(props)=>props.width}; 
  border: ${(props)=>props.border}; 
 
`
export const AccordionWrappers = styled(AccordionDetails)<{height: string}>`
  height: ${(props)=>props.height}; 
 
`




