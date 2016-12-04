import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './gif-preview.css';
import classnames from 'classnames';
class GifPreview extends React.Component {

   constructor(props) {
      super(props);
      const a = document.createElement('a');
      a.href = this.props.gifSrc;
      this.state = {
        hostname:a.hostname,
        imgSrc:props.src,
        gifMode:false,
        loadMode:false
      }
      this.onClickCircle = this.onClickCircle.bind(this);
      this.onClickOnImg = this.onClickOnImg.bind(this);
      this.onLoadImage = this.onLoadImage.bind(this);
   }

   componentWillReceiveProps(nextProps) {
     if(nextProps.gifSrc !== this.props.gifSrc) {
       const a = document.createElement('a');
       a.href = this.props.gifSrc;
       this.setState({
         hostname:a.hostname
       });
     }
   }

   onClickCircle() {
     this.setState({
       loadMode:true
     });
   }

   onClickOnImg() {
     if(this.state.gifMode) {
       this.setState({
         gifMode:!this.state.gifMode
       });
     }
   }

   onLoadImage() {
     if(this.state.loadMode) {
       this.setState({
         gifMode:!this.state.gifMode,
         loadMode:false
       });
     }
   }

   render() {
     return (
        <div className="jqGifPreview" onClick={this.onClickOnImg}>
           <div className="jqGifImageDiv">
              <img className="jqGifImage" onLoad={this.onLoadImage} src={this.state.loadMode || this.state.gifMode ? this.props.gifSrc : this.props.src}/>
              <div className="jqGifCircle" onClick={this.onClickCircle} style = {{
                   display:this.state.gifMode?'none':'block'
                }}>
                <div className="jqGifImageCenter"></div>
                <div className={classnames("jqGifImageCircle", {"jqGifRotating":this.state.loadMode})}></div>
                <div className="jqGifImageName"></div>
              </div>
          </div>
          <div className="jqGifImageFooter" style = {{
            display:this.state.gifMode?'none':'block'
          }}>
            <a className="jqGifImageFooterLeft" href={this.props.gifSrc} target="_blank">{this.state.hostname}</a>
            <a href={this.props.gifSrc} target="_blank" className="jqGifImageFooterRight"></a>
          </div>
       </div>
    );
   }
}

GifPreview.propTypes = {
  src:React.PropTypes.string,
  gifSrc:React.PropTypes.string
};

GifPreview.defaultProps = {
  src:'',
  gifSrc:''
};

export default GifPreview;
