import React from 'react';

const Gallery = (props) => {
  return (
    <div className={props.galleryClasses}>
      <div className="imgList"><img src={props.pictures ? props.pictures[0] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[0]}` : "picture"} alt='countryPicture'/>
      <img src={props.pictures ? props.pictures[1] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[1]}` : "picture"} alt='countryPicture'/>
      <img src={props.pictures ? props.pictures[2] : null} className={props.pictureClasses ? `picture ${props.pictureClasses[2]}` : "picture"} alt='countryPicture'/>
      </div>
      {props.loadPics ? (
              <div>
                <button className="btn">Find hotels in {props.country}</button>
                <button className="btn">Other destination</button>
                <p style={{fontSize: "10px"}}><em>NB : Buttons are inactive</em></p>
              </div>
              
            ) : null}
    </div>
  );
};

export default Gallery;