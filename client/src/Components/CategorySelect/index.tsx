import { CategorySelectProps } from "./types"

export const CategorySelect: React.FC<CategorySelectProps> = ({
  content,
  dispatch,
  }): JSX.Element => {
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    dispatch({ type: "FILTER_CATEGORY", payload: evt.target.value })
  }
  return(
    <div className="CheckoutInput">
    <select className="CheckoutInput" onChange={handleChange}>
        {content.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
    </select>
    </div>
  )
  
}