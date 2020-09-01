import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

export default class SlideshowQueue extends React.Component {
  constructor(props) {
    super(props);
    const { queue } = this.props;
    this.state = { queue };
  }

  getQueueComponents = () => {
    const { queue } = this.state;
    const liAr = map(queue, (img) => (
      <li className="image-queue-asset">
        <img src={img.src} alt="testing" />
      </li>
    ));
    return (
      <ul className="image-queue">{liAr}</ul>
    );
  }

  render = () => {
    const { title } = this.props;
    return (
      <div className="queue-wrapper">
        <h1>{title}</h1>
        <div>
          {this.getQueueComponents()}
        </div>
      </div>
    );
  }
}

SlideshowQueue.defaultProps = {
  queue: [],
};

SlideshowQueue.propTypes = {
  title: PropTypes.string.isRequired,
  queue: PropTypes.array,
};
