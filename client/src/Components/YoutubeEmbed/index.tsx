import React from "react";
import { EmbedProps } from "./types";

export const YoutubeEmbed: React.FC<EmbedProps> = ({ content }): JSX.Element => {
    return(
      <div className="video-responsive">
      <iframe
        width="560" 
        height="315"
        src={`https://www.youtube.com/embed/${content}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
      </div>
    )
  }
  /*
export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

*/
//export default YoutubeEmbed;