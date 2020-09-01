import React from 'react';
import PropTypes from 'prop-types';
import ImageDock from './image_dock';
import SlideshowQueue from './slideshow_queue';

export default class QueueManager extends React.Component {
  constructor(props) {
    super(props);
    const { queue } = props;
    this.state = {
      currentImage: queue[0],
      queue: queue.slice(1),
      goodList: [],
      badList: [],
    };
  }

  getNextImage = () => {
    const { queue } = this.state;
    return queue.shift();
  };

  onSelectGood = (obj) => {
    const { currentImage, goodList } = this.state;
    const candidate = obj === currentImage ? this.getNextImage() : currentImage;
    if (!goodList.includes(obj)) {
      goodList.push(obj);
    }
    this.setState({
      currentImage: candidate,
      goodList,
    });
  };

  onSelectBad = (obj) => {
    const { currentImage, badList } = this.state;
    const candidate = obj === currentImage ? this.getNextImage() : currentImage;
    if (!badList.includes(obj)) {
      badList.push(obj);
    }
    this.setState({
      currentImage: candidate,
      badList,
    });
  };

  render = () => {
    const { badList, currentImage, goodList } = this.state;

    return (
      <div className="queue-manager">
        {
          currentImage
          && (
            <ImageDock
              image={currentImage}
              goodAction={this.onSelectGood}
              badAction={this.onSelectBad}
            />
          )
        }
        <SlideshowQueue
          title="Good"
          queue={goodList}
        />
        <SlideshowQueue
          title="Bad"
          queue={badList}
        />
      </div>
    );
  }
}

QueueManager.defaultProps = {
  queue: [],
};

QueueManager.propTypes = {
  queue: PropTypes.array,
};
