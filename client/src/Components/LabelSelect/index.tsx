import React, { useContext } from "react";
import { LabelSelectProps } from "./types"
import { Ctx } from "../../Context";

export const LabelSelect: React.FC<LabelSelectProps> = ({
  content,
  dispatch,
  }): JSX.Element => {
  const state = useContext(Ctx)
  const {searching } = state
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    dispatch({ type: "FILTER_LABEL", payload: evt.target.value })
  }

  return(
    <div className="CheckoutInput">
    <select defaultValue={state.labelFilter} className="CheckoutInput" onChange={handleChange}>
        {content.map(label => (
          <option value={label} key={label}>
            {label}
          </option>
        ))}
    </select>
    </div>
  )
  
}