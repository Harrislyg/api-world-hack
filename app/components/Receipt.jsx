var React = require('react')
var Profiles = require('Profiles')
var Rolenav = require('Rolenav')

var cofoundersApi = require('cofoundersApi')

class Biz extends React.Component {
  constructor () {
    super()
    this.state = {
      profiles: []
    }
  }

  getBiz () {
    cofoundersApi.getAllBiz((err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        profiles: data.usersArray
      })
    })
  }

  componentWillMount () {
    this.getBiz()
  }

  render () {
    // console.log('Hey', this.state.profiles)
    // var person = this.state.profiles
    // console.log('Person', person[0])
    // var person = this.state.profiles
    // console.log('Person', person)
    return (
      <div>
        <div>

                  <div id="grid-gap" className="mui-col-md-12">
                    <div id="profile-grid" className="profile-grid mui-panel">

                    <div id="left-float">

                    <div id="profiles-right">
                      <p id="profiles-expertise">Walgreens</p>
                    </div>

                    <div id="profiles-bottom-left">
                      <div id="profiles-bottom-inner-left">
                        <p id="profiles-expertise-extra">Date: </p>
                      </div>
                    </div>
                    <div id="profiles-bottom-right">
                      <p id="profiles-expertise-extra">09 Sep 2016</p>
                    </div>

                    <div id="profiles-bottom-right-extra">
                      <p id="profiles-expertise-extra"><span className="glyphicon glyphicon-map-marker"></span>&nbsp;Mountain View</p>
                    </div>

                    </div>


                    <div id="right-float">

                    <div id="profiles-left">
                      <p>$17</p>
                    </div>

                    </div>

                    </div>
                  </div>


                  <div id="grid-gap" className="mui-col-md-12">
                    <div id="profile-grid" className="profile-grid mui-panel">



                    <div id="left-float">

                    <div id="profiles-right">
                      <p id="profiles-expertise">Starbucks</p>
                    </div>

                    <div id="profiles-bottom-left">
                      <div id="profiles-bottom-inner-left">
                        <p id="profiles-expertise-extra">Date: </p>
                      </div>
                    </div>
                    <div id="profiles-bottom-right">
                      <p id="profiles-expertise-extra">09 Sep 2016</p>
                    </div>

                    <div id="profiles-bottom-right-extra">
                      <p id="profiles-expertise-extra"><span className="glyphicon glyphicon-map-marker"></span>&nbsp;San Francisco</p>
                    </div>

                    </div>


                    <div id="right-float">

                    <div id="profiles-left">
                      <p>$9</p>
                    </div>

                    </div>

                    </div>
                  </div>
          {this.state.profiles.map((profile, i) => (<Profiles profile={profile} index={i} key={i}/>))}
        </div>
      </div>

    )
  }
}

module.exports = Biz
