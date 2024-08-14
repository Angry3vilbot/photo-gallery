import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";
import { images } from "../images";
import "../PictureGallery.css"
import { videos } from "../videos";
import { thumbnails } from "../thumbnails";

function PictureGallery() {
  const [index, setIndex] = useState(-1);

  const slides = images.map(({ src }) => ({
    src: src,
  }));


  const videoSlides = videos.map(({ src }) => ({
    type: "video",
    width: 1280,
    height: 720,
    sources: [
      {
        src: src,
        type: "video/mp4"
      }
    ]
  }));

  const handleClick = (i: number) => setIndex(i);
  return (
    <div id="gallery-container">
      <Gallery images={[...images, ...thumbnails]} onClick={handleClick} enableImageSelection={false} /> {/*@ts-expect-error works as intended*/}
      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={[...slides, ...videoSlides]} plugins={[Fullscreen, Video, Zoom]} video={{ controls: true }} />
    </div>
  );
}

export default PictureGallery;