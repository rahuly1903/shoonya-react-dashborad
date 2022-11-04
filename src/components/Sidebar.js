import { Component } from "react";
import { connect } from "react-redux";
import { searchScript } from "../actions";

class Sidebar extends Component {
  formSubmit = (e) => {
    e.preventDefault();
    this.props.searchScript(e.target.script.value);
  };
  showTickerLastPrice = (token) => {
    if (this.props.websocketData) {
      // console.log(this.props.websocketData[token]);
      if (this.props.websocketData[token]) {
        return this.props.websocketData[token];
      } else {
        return "fetching";
      }
    }
  };
  showWishlistedScript = () => {
    if (this.props.addScriptToWishlist.length) {
      return this.props.addScriptToWishlist.map((ticker) => {
        return (
          <div className="item" key={ticker.token}>
            <div className="content">
              <div className="description">
                <p className="script-name">{ticker.dname}</p>
                <p className="script-price">
                  {this.showTickerLastPrice(ticker.token)}
                </p>
                <button className="ui button primary">Buy</button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return "";
    }
  };
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-fixed-wrapper">
            <form id="search-script-form" onSubmit={this.formSubmit}>
              <div className="ui right labeled input">
                <input
                  type="text"
                  name="script"
                  placeholder="Find Option Script"
                />
                <button className="ui dropdown label" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="ui relaxed divided list wishlist-scripts">
              {this.showWishlistedScript()}
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { searchScript })(Sidebar);
