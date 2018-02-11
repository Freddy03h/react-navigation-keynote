import React from 'react'
import StackDraw from './StackDraw'
import TabDraw from './TabDraw'

export default class ScreenDraw extends React.PureComponent {
  componentDidMount() {
    const { screen } = this.refs
    if(this.props.onLayout) {
      setTimeout(() => {
        this.props.onLayout(screen.offsetWidth, screen.offsetHeight);
      }, 30);
    }
  }

  render() {
    const { screen } = this.props
    const minWidth = this.props.minWidth || 200;
    const minHeight = this.props.minHeight || 300;
    const isLeaf = (!screen.stack && !screen.tabs);

    const screenStyle = isLeaf ? {
      borderColor: this.props.color,
      width: minWidth,
      minHeight,
    } : {
      borderColor: this.props.color,
      minWidth,
      minHeight,
    };

    return (
      <div ref="screen" style={Object.assign({}, styles.screen, screenStyle, this.props.style)}>
        <div style={styles.screenTitle}>{ screen.title }</div>
        {
          screen.stack &&
            <div style={styles.screenNavContainer}>
              <StackDraw data={screen.stack} minWidth={minWidth} minHeight={minHeight} />
            </div>
        }
        {
          screen.tabs &&
            <div style={styles.screenNavContainer}>
              <TabDraw data={screen.tabs} minWidth={minWidth} minHeight={minHeight} />
            </div>
        }
        {
          isLeaf &&
            <div style={styles.screenNavContainer}>
              <div style={styles.realScreen} />
            </div>
        }
      </div>
    )
  }
}

const styles = {
  screen: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderRadius: 4,
    // minWidth: 200,
    // minHeight: 300,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  screenTitle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
  screenNavContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  realScreen: {
    background: `
      repeating-linear-gradient(
        -55deg,
        #FFF,
        #FFF 10px,
        #E0E0E0 10px,
        #E0E0E0 20px
      )
    `,
    borderRadius: 4,
    flex: 1,
  },
}