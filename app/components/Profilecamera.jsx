var React = require('react')
var {Link, IndexLink} = require('react-router')

class Profilecamera extends React.Component {

  render () {
    return (
      <div>
        <p>
          <input type="file" multiple="multiple" accept="image/*;capture=camera" />
        </p>

      </div>


    )
  }
}

module.exports = Profilecamera
