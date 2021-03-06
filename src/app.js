import React from 'react';
import ReactDOM from 'react-dom';
import ProgressiveImg from './index.js';
import './index.css';

const Main = () => {
  const progressiveImgProps = {
    smallImageSource: 'https://assets-cn.htcvive.com/vr_developer_published_assets/app/ac50a8cb-904c-4859-88a2-73065ed7da8a/media/publish/thumbnail_medium_v1491882781.jpg/w370q30',
    normalImageSource: 'https://assets-cn.htcvive.com/vr_developer_published_assets/app/ac50a8cb-904c-4859-88a2-73065ed7da8a/media/publish/thumbnail_medium_v1491882781.jpg',
    imgAlt: 'Viveport Arcade Saga',
    aspectRationFill: '56.154%',
  };

  return (
    <div style={{ margin: 'auto', width: '60%' }}>
      <h1>ProgressiveImg Component</h1>
      <a>
        <ProgressiveImg
          {...progressiveImgProps}
        />
      </a>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('app'));
