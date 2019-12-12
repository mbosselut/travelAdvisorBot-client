import React from 'react';

const Gallery = (props) => {
  const pictures = props.pictures ? props.pictures.map(picture => <img src={picture} className='picture'/>) : null;
  return (
    <div className={props.galleryClasses}>
      {pictures}
    </div>
  );
};

export default Gallery;