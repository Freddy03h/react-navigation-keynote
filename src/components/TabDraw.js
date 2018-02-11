import React from 'react'
import ScreenDraw from './ScreenDraw'

export default class TabDraw extends React.PureComponent {

  render() {
    const minWidth = this.props.minWidth || 200;
    const minHeight = this.props.minHeight || 300;
    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={styles.inner}>
        {
          this.props.data.map((screen, index) =>
            <ScreenDraw
              key={index}
              color="#3F51B5"
              screen={screen}
              style={{
                marginLeft: -index * 4,
              }}
              minWidth={minWidth}
              minHeight={minHeight}
            />
          )
        }
        </div>
        <div style={styles.containerTitle}>Tabs</div>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: 'auto',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  inner: {
    display: 'flex',
  },
  containerTitle: {
    color: '#3F51B5',
    textAlign: 'center',
  },
}