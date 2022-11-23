import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { store } from "../../../redux/store";
import { setConditionAge, setConditionFamily, setConditionGender, setConditionPay, setConditionPersonal } from "../../../redux/store/searchCondition";



export default function RadioButtonsGroup(props: any) {
  
  const [checkState, setCheckState] = useState(Array(props.values.length).fill(false))
  const [isClick, setIsClick] = useState(false);

  const onClickCheck = (index: number, arrLength: number)=>{
    setIsClick(true);
    const allFalse = Array(arrLength).fill(false);
    setCheckState(allFalse);
    allFalse[index] = true;
    setCheckState(allFalse);
  }

  const onChangeCondition = (event: any)=>{
   
    
    if(props.type==="age"){
      store.dispatch(setConditionAge({
        age: event.currentTarget.value
      }))
    } else if(props.type==="gender"){
      store.dispatch(setConditionGender({
        gender: event.currentTarget.value
      }))
    } else if(props.type==="pay"){
      store.dispatch(setConditionPay({
        pay: event.currentTarget.value,
      }))
    } else if(props.type==="personal"){
      store.dispatch(setConditionPersonal({
        personal: event.currentTarget.value,
      
      }))
    } else {
      store.dispatch(setConditionFamily({
        family: event.currentTarget.value
      }))
    }
    
    console.log(store.getState().searchConditionStore);
  }

 


  return (
    <FormControl>
      {
        props.state === true ? (
          
            props.values.map((el: {value: string, label: string},index: number)=>(
              <FormControlLabel 
                key={uuidv4()}
                control={
                  <Checkbox value={el.value} 
                    onChange={onChangeCondition}
                    onClick={()=>onClickCheck(index, props.values.length)} 
                    disabled={checkState[index] ? true : false} 
                    checked={checkState[index] ? true : false} 
                  />} 
                label={el.label} />
            ))
          
        ):(
          
            props.values.map((el: {value: string, label: string},index: number)=>(
              <FormControlLabel 
                key={uuidv4()}
                control={
                  <Checkbox value={el.value} 
                    onChange={onChangeCondition}
                  />} 
                label={el.label} />
            ))
          
        )
      }
     
        
    </FormControl>
  );
}