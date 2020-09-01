import React from 'react';
import PropTypes from 'prop-types';

const HIDE_TEXT = 'HIDE';
const SHOW_TEXT = 'SHOW';

export default class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.hidden ? props.hidden : false,
    };
  }

  toggleVisibility = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };

  toggleText = () => {
    const { hidden } = this.state;
    return hidden ? SHOW_TEXT : HIDE_TEXT;
  }

  render = () => {
    const { children } = this.props;
    const { hidden } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleVisibility}>
          {this.toggleText()}
        </button>
        {!hidden && children}
      </div>
    );
  }
}

VisibilityToggle.defaultProps = {
  hidden: false,
};

VisibilityToggle.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
};
