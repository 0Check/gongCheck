import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

export default function RadioButtonsGroup(props: any) {


  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.values[0].value}
        name="radio-buttons-group"
      >
        {
          props.values.map((el: {value: string, label: string})=>(
            <FormControlLabel key={uuidv4()} value={el.value} control={<Radio />} label={el.label} />
          ))
        }
       
      </RadioGroup>
    </FormControl>
  );
}