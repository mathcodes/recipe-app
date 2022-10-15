import React from 'react'
import { useHistory } from "react-router-dom";

const SelectComponent = () => {
  const history = useHistory();
  return (
    <div>
      SelectComponent
      <button onClick={()=>history.push('steps/2')}>STEPS PAGE</button>
    </div>
  )
}

export default SelectComponent