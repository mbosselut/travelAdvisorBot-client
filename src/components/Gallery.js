import React from 'react';

const Gallery = (props) => {
  return (
    <div className={props.galleryClasses}>
      <img src={props.pictures ? props.pictures[0] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[0]}` : "picture"}/>
      <img src={props.pictures ? props.pictures[1] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[1]}` : "picture"}/>
      <img src={props.pictures ? props.pictures[2] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[2]}` : "picture"}/>

    </div>
  );
};

export default Gallery;