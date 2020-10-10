import React from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  
  static propTypes = {
    imageArray: PropTypes.array
  }
  render() {
    const { imageArray } = this.props
    return (
      <div>
        {(imageArray || []).map((image, i) =>
         <div className="image-container" key={i}>
           <span className="image-text">{image.owner}</span>
           <img className="image" 
                src={image.url} 
                alt=""/>
         </div>
        )}
     </div>
    )
  }
}
export default ImageGallery;
