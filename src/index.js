import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  smallImageSource: PropTypes.string.isRequired,
  normalImageSource: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  aspectRationFill: PropTypes.string,
  onLoadHandler: PropTypes.func,
  onErrorHandler: PropTypes.func,
};

class ProgressiveImg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      normalImgStatus: '',
    };

    this.smallImgOnLoad = this.smallImgOnLoad.bind(this);
    this.normalImgOnLoad = this.normalImgOnLoad.bind(this);
    this.onErrorHandler = this.onErrorHandler.bind(this);
  }

  onErrorHandler() {
    if (this.props.onErrorHandler) {
      this.props.onErrorHandler();
    }
  }

  smallImgOnLoad() {
    if (this.props.onLoadHandler) {
      this.props.onLoadHandler();
    }
  }

  normalImgOnLoad() {
    if (this.props.onLoadHandler) {
      this.props.onLoadHandler();
    }

    this.setState({ normalImgStatus: 'loaded' });
  }

  render() {
    return (
      <div className="progressive">
        <img
          className="small-img loaded"
          src={this.props.smallImageSource}
          alt={this.props.imgAlt}
          onLoad={this.smallImgOnLoad}
          onError={this.onErrorHandler}
        />
        <div
          className="aspect-ratio-fill"
          style={{ paddingBottom: this.props.aspectRationFill }}
        />
        <img
          className={`normal-img ${this.state.normalImgStatus}`}
          src={this.props.normalImageSource}
          alt={this.props.imgAlt}
          onLoad={this.normalImgOnLoad}
          onError={this.onErrorHandler}
        />
      </div>
    );
  }
};

ProgressiveImg.propTypes = propTypes;

export default ProgressiveImg;
