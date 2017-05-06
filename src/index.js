import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

class Progress extends React.Component {
  render () {
    return (
      <div className="progress">
        <h1>Davis npm module react-progressive-media-loading</h1>
        <img src={this.props.imageSrc} />
      </div>
    );
  }
};

Progress.propTypes = {
  imageSrc: PropTypes.string,
};

Progress.defaultProps = {
  imageSrc: 'https://assets-cn.htcvive.com/vr_developer_published_assets/app/4777434b-9fad-429c-b409-1f0253bbb9e4/media/publish/thumbnail_medium_v1493966558.jpg',
};

export default Progress;