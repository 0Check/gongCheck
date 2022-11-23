import { Chip } from '@material-ui/core';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { store } from '../../../redux/store';


export default function Chips() {
  console.log(store.getState().searchConditionStore);
  const objValue = Object.values(store.getState().searchConditionStore)
  return (
    <>
    {
      !store.getState().searchConditionStore.age 
      ? ""
      : (
        objValue.map((el)=>(
          <Chip label={el} key={uuidv4()} />
        ))
      )
    }
       
    </>
       
  
     
  );
}