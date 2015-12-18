import React from 'react'

class HTML extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <html lang='en'>
      <head>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'/>
      <title>{this.props.title}</title>
      </head>
      <body>

        {this.props.children}
      </body>
      </html>
    )
  }
}

HTML.propTypes = {
  children: React.PropTypes.string,
  title: React.PropTypes.string
}

HTML.defaultProps = {}

export default HTML
