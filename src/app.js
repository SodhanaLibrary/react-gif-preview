import React from 'react';
import GifPreview from './gif-preview/gif-preview';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>It Works </h1>
        <p>This React project just works with react-gif-preview</p>
        <GifPreview src="sample.png"  gifSrc="sample.gif"/>
      </div>
    )
  }
}
