# react-progressive-media-loading

Demo: https://cdn.rawgit.com/DavisChang/react-progressive-media-loading/master/build/index.html


## Usage

### 1. npm install

```shell
$ npm install react-progressive-media-loading --save
```

### 2. In your component.js

```js

import ProgressiveImg from 'react-progressive-media-loading';

class Component extends React.Component {
  render () {
    const progressiveImgProps = {
      smallImageSource: 'small.png',
      normalImageSource: 'normal.png',
      imgAlt: 'img-alt',
      aspectRationFill: '50%',
    };

    return (
      <div>
        <h1>ProgressiveImg Component</h1>
        <a target="_blank" href="#">
          <ProgressiveImg
            { ...progressiveImgProps }
          />
        </a>
      </div>
    );
  };
};

```

## How to Develop, Test, Build

#### 1. How to develop module

```shell
$ npm run dev
```

#### 2. How to test module

```shell
$ npm run test
```

#### 3. How to build module

```shell
$ npm run build
$ npm run webpack
```
