import React from "react"
var ReactDOMServer = require("react-dom/server")

class Main extends React.Component {
  render() {
    return <div>Server rendered react args: {JSON.stringify(this.props)}</div>
  }
}

var init = (props) => { return ReactDOMServer.renderToString(<Main {...props}/>) }
module.exports = {init}