import React from 'react';
import styles from './index.css';

const propTypes = {
  smallImageSource: React.PropTypes.string.isRequired,
  normalImageSource: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string,
  aspectRationFill: React.PropTypes.string,
  onLoadHandler: React.PropTypes.func,
  onErrorHandler: React.PropTypes.func,
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

  onErrorHandler() {
    if (this.props.onErrorHandler) {
      this.props.onErrorHandler();
    }
  }

  render () {
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