import React from 'react'
import ScreenDraw from './ScreenDraw'

const MARGIN = 40;

export default class StackDraw extends React.PureComponent {
  // _width = 200;
  // _height = 300;

  // state = {
  //   width: 200,
  //   height: 300,
  // };

  constructor(props) {
    super(props);

    this._width = props.minWidth || 200;
    this._height = props.minHeight || 300;

    this.state = {
      width: this._width,
      height: this._height,
    }
  }

  onScreenLayout = (width, height) => {
    this._width = Math.max(width, this._width);
    this._height = Math.max(height, this._height);
    this.setState({
      width: this._width,
      height: this._height,
    });
  };

  render() {
    console.log(this.state)
    const minWidth = this.props.minWidth || 200;
    const minHeight = this.props.minHeight || 300;
    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={Object.assign({}, styles.inner, {
          height: this.state.height,
          width: this.state.width,
          paddingRight: (this.props.data.length-1) * MARGIN,
          paddingTop: (this.props.data.length-1) * MARGIN,
        })}>
        {
          this.props.data.map((screen, index) =>
            <ScreenDraw
              key={index}
              color="#F44336"
              screen={screen}
              style={Object.assign({}, styles.screen, {
                zIndex: this.props.data.length - index,
                bottom: index * MARGIN,
                left: index * MARGIN,
                minHeight: this.state.height,
                minWidth: this.state.width,
              })}
              onLayout={this.onScreenLayout}
              minWidth={minWidth}
              minHeight={minHeight}
            />
          )
        }
        </div>
        <div style={styles.containerTitle}>Stack</div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    flex: 1,
  },
  inner: {
    flex: 1,
    boxSizing: 'content-box',
    position: 'relative',
  },
  containerTitle: {
    color: '#F44336',
  },
  screen: {
    position: 'absolute',
  },
}