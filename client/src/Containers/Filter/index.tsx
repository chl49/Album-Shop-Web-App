import React, { useContext } from "react";
import { FilterProps } from "./types";
import { Ctx } from "../../Context";
import { CategorySelect } from "../../Components/CategorySelect";
import { LabelSelect } from "../../Components/LabelSelect";

export const Filter: React.FC<FilterProps> = ({ dispatch, isInHeader }): JSX.Element => {
  const state = useContext(Ctx)
  const { categories, labels, filterAt, searching } = state
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER_CATEGORY", payload: e.target.value })
  }
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER_LABEL", payload: e.target.value })
  }

  return(
    <section className="Filter">
      <select defaultValue={searching ? "All items" : filterAt} className="Filter__dropdown" onChange={handleChange}>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <CategorySelect 
          content={categories}
          dispatch={dispatch}
          to={isInHeader ? "/" : ""}
      />
      <select defaultValue={searching ? "All items" : filterAt} className="Filter__dropdown" onChange={handleChange2}>
        {labels.map(label => (
          <option value={label} key={label}>
            {label}
          </option>
        ))}
      </select>
      <LabelSelect 
          content={labels}
          dispatch={dispatch}
          to={isInHeader ? "/" : ""}
      />
    </section>
  )
}