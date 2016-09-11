var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class Profiles extends React.Component {

  onUserProfile () {

    console.log(this.props.profile._id)
    cofoundersApi.getUserProfile (this.props.profile._id)

  }

  render () {
    return (
      <div id="hoverCursor" onClick={this.onUserProfile.bind(this)}>
        <div id="grid-gap" className="mui-col-md-12">
          <div id="profile-grid" className="profile-grid mui-panel">



          <div id="left-float">




          <div id="profiles-right">
            <p id="profiles-expertise">{this.props.profile.expertise}</p>
          </div>

          <div id="profiles-bottom-left">
            <div id="profiles-bottom-inner-left">
              <p id="float-right profiles-partnerexpertise">Date: </p>
            </div>
          </div>
          <div id="profiles-bottom-right">
            <p id="profiles-expertise-extra">{this.props.profile.partnerexpertise}</p>
          </div>

          <div id="profiles-bottom-right-extra">
            <p id="profiles-partnerexpertise"><span className="glyphicon glyphicon-map-marker"></span>&nbsp;{this.props.profile.location}</p>
          </div>



          </div>




          <div id="right-float">

          <div id="profiles-left">
            <h1>$17</h1>
          </div>

          </div>





          </div>
        </div>

      </div>

    )
  }
}

module.exports = Profiles
