import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  toLight = () => {
    this.setState(prevState => ({isDark: false}))
  }

  toDark = () => {
    this.setState(prevState => ({isDark: true}))
  }

  render() {
    const {isDark} = this.state
    const modeClassName = isDark ? 'dark' : 'light'

    return (
      <div className="bgColor">
        <div className={`cont ${modeClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          {isDark ? (
            <button type="button" className="button" onClick={this.toLight}>
              Light Mode
            </button>
          ) : (
            <button
              type="button"
              className="button light"
              onClick={this.toDark}
            >
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
