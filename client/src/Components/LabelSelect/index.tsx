import { LabelSelectProps } from "./types"

export const LabelSelect: React.FC<LabelSelectProps> = ({
  content,
  dispatch,
  }): JSX.Element => {
  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    dispatch({ type: "FILTER_LABEL", payload: evt.target.value })
  }

  return(
    <div className="CheckoutInput">
    <select className="CheckoutInput" onChange={handleChange}>
        {content.map(label => (
          <option value={label} key={label}>
            {label}
          </option>
        ))}
    </select>
    </div>
  )
  
}