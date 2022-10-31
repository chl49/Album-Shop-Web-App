import { useParams } from "react-router-dom"
import { ButtonCTA } from "../../Components/ButtonCTA"
import { YoutubeEmbed } from "../../Components/YoutubeEmbed"
import { ItemInterface, PageProps } from "../../globalTypes"

export const Product: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const { title } = useParams()
  const { items } = state
  const item: ItemInterface = items.find(index => index.title.trim() === title?.trim()) as ItemInterface
  return(
    <section className="Detail">
      <article className="Detail__thumbnail">
        <div className="Detail__thumbnail--scroller">
        <img src={item.image} alt="" />
        <p className="Detail__thumbnail--description">
          Tracklist:
          <br></br> 
          {item.description}
        </p>
        </div>
      </article>
      <article className="Detail__info">
        <div className="Detail__info--header">
          <h2>{item.title}</h2>
          <h2><YoutubeEmbed content={item.embed} /></h2>
        </div>
        <div className="Detail__info--meta">
          <span className="Detail__price"> Price: ${item.price}    
          </span>
          <h2><ButtonCTA
            ItemId={item.id}
            dispatch={dispatch}
            added={item.added}
          /></h2>
        </div>
      </article>
    </section>
  )
}