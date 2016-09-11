var React = require('react')
var {Link, IndexLink} = require('react-router')
var Photos = require('Photos')


class Profilecamera extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      photos: {}
    }
  }

  photoUpload (e) {
    // console.log(e.target.files)

    this.setState ({
      photos: e.target.files
    })
  }
  onGenerate (e) {
    e.preventDefault()
    console.log('Hello')
  }

  render () {

  console.log(this.state.photos)
  var photoArray = $.map(this.state.photos, function(value, index) {
    return [value]
  })


console.log(photoArray);

    return (
      <div>
        <p><br/></p>
        <div className="mui-container">
          <div className="mui-panel">
            <legend>Upload</legend>
            <p><br/></p>
            {photoArray.map((photo, i) => (<Photos photo={photo} index={i} key={i}/>))}

            <p><br/></p>
            <input onChange={this.photoUpload.bind(this)} type="file" multiple="multiple" accept="image/*;capture=camera" />
        <form id="signUpForm" onSubmit={this.onGenerate.bind(this)}>
          <input type="hidden" ref="avatarUrl" name="profileImg" value="/images/default.png"/>
          <button type="submit" className="mui-btn mui-btn--raised mui-btn--primary">Generate</button>
        </form>
          </div>
        </div>
      </div>

    )
  }
}

module.exports = Profilecamera
