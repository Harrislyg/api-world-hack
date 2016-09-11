var React = require('react')
var {Link, IndexLink} = require('react-router')
var reader

class Photos extends React.Component {

  render () {
    return (
      <div>
        <img id="preview" ref="preview" src={"/Users/harrisleow/Desktop/NOCHacks/api-world-hack/public/images/" + this.props.photo.name}/>
      </div>
    )
  }
}

module.exports = Photos
