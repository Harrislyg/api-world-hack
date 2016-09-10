var React = require('react')
var {Link, IndexLink} = require('react-router')

class Home extends React.Component {

  render () {
    return (
      <div>
        <div id="panel-image"></div>
        <div>
          <div id="home-top" className="mui--text-dark-secondary mui--text-display1 home-header">Better Receipts</div>
            <div className="mui--text-dark-secondary mui--text-subhead home-header">RLess makes it simple to manage your receipts, payments and more.</div>
        </div>
        <div className="home-div mui-container-fluid">
          <div className="mui-row">
            <Link className="home-links" to="/Receipt"  activeStyle={{fontWeight: 'bold'}}><div id="home-one" className="mui-col-md-6 mui-link mui-panel">Receipts</div></Link>
          </div>
          <div className="mui-row">
            <Link className="home-links" to="/Receipt"  activeStyle={{fontWeight: 'bold'}}><div id="home-two" className="mui-col-md-6 mui-link mui-panel">Map</div></Link>
          </div>
          <div className="mui-row">
            <Link className="home-links" to="/Receipt"  activeStyle={{fontWeight: 'bold'}}><div id="home-three" className="mui-col-md-6 mui-link mui-panel">Analytics</div></Link>
          </div>
        </div>

      </div>


    )
  }
}

module.exports = Home
