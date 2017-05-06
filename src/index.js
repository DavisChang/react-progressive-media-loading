import React from 'react';

const PropTypes = {
  imageSrc: React.PropTypes.string,
};

const defaultProps = {
  imageSrc: 'https://assets-cn.htcvive.com/vr_developer_published_assets/app/4777434b-9fad-429c-b409-1f0253bbb9e4/media/publish/thumbnail_medium_v1493966558.jpg',
};

class Progress extends React.Component {

  render () {
    return (
      <div>
        <h1>npm module react-progressive-media-loading</h1>
        <img src={this.props.imageSrc} />
      </div>
    );
  }
};

Progress.propTypes = PropTypes;
Progress.defaultProps = defaultProps;

export default Progress;