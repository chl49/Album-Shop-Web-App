import React, { useContext } from "react";
import { CategorySelectProps } from "./types"
import { Ctx } from "../../Context";

export const CategorySelect: React.FC<CategorySelectProps> = ({
  content,
  dispatch,
  }): JSX.Element => {
  const state = useContext(Ctx)
  const {searching } = state
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    dispatch({ type: "FILTER_CATEGORY", payload: evt.target.value })
  }
  return(
    <div className="CheckoutInput">
    <select defaultValue={state.categoryFilter} className="CheckoutInput" onChange={handleChange}>
        {content.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
    </select>
    </div>
  )
  
}