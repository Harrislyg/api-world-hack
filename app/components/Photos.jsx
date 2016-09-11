var React = require('react')
var {Link, IndexLink} = require('react-router')
var reader

class Photos extends React.Component {

  render () {
    return (
      <div id="flex-item">
        <img id="preview" ref="preview" src={"http://imgur.com/" + this.props.photo.name}/>
      </div>
    )
  }
}

module.exports = Photos
