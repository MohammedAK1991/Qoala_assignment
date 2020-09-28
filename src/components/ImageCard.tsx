import React from 'react';

const ImageCard: React.FC<{ image: any }> = ({ image }) => {

  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const setImageSpans = (): void => {
    const height = imageRef.current.clientHeight;
    const calculatedSpans = Math.ceil(height / 10 + 0.5);
    setSpans(calculatedSpans);
  }

  return (
    <div
      className="image-card"
      style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        alt={image.title}
        src={image.preview_photos[0].urls.regular}
        onLoad={setImageSpans}
      />
      <p>
        {image.title.toUpperCase()|| 'no description provided'}
      </p>
    </div>
  )
}

export default ImageCard;