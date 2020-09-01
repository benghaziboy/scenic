import React from 'react';
import PropTypes from 'prop-types';

const ImageDock = (props) => {
  const { badAction, goodAction, image } = props;
  const { src } = image || {};
  return (
    <div className="image-dock">
      <img src={src} alt="testing" />
      <div className="category-choices">
        <button
          type="button"
          onClick={() => goodAction(image)}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => badAction(image)}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

ImageDock.propTypes = {
  badAction: PropTypes.func.isRequired,
  goodAction: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageDock;
