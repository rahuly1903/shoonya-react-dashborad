import { Component } from "react";
import { connect } from "react-redux";
import { addScriptToWishlist, showWebSocketData } from "../actions";
const websocket = new WebSocket("ws://localhost:4100");

class MainContent extends Component {
  componentDidMount() {
    websocket.onmessage = (value) => {
      // console.log(value.data);
      const { tk, lp } = JSON.parse(value.data);
      console.log(tk, lp);
      if (tk && lp) {
        this.props.showWebSocketData(JSON.parse(value.data));
      }
    };
  }
  sendWSSubscription = () => {
    if (this.props.addScriptToSubscribe.length) {
      let subscibe_instrument = "";
      this.props.addScriptToSubscribe.forEach((ticker, index) => {
        subscibe_instrument += `NFO|${ticker}${
          index < this.props.addScriptToSubscribe.length - 1 ? "#" : ""
        }`;
      });
      console.log(subscibe_instrument);
      //
      websocket.send(subscibe_instrument);
    }
  };
  showAllScript = () => {
    if (this.props.fetchScript.reply) {
      return this.props.fetchScript.reply.values.map((data, index) => {
        const subscibed_Tokens = this.props.addScriptToSubscribe;
        let buttonText = "Add to list";
        if (subscibed_Tokens.indexOf(data.token) > -1) {
          buttonText = "Added to list";
        }
        return (
          <div className="item" key={index}>
            <div className="content">
              <div className="custom-description">
                <p className="script-name">{data.dname}</p>
                <button
                  className="ui button primary"
                  onClick={() => {
                    this.props.addScriptToWishlist(data);
                    this.sendWSSubscription();
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else if (this.props.fetchScript.e) {
      return this.props.fetchScript.e;
    } else {
      return "No script Found";
    }
  };

  render() {
    return (
      <div className="main-content">
        <div className="main-content-wrapper">
          <h1>Script List</h1>
          <div className="ui relaxed divided list">{this.showAllScript()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  addScriptToWishlist,
  showWebSocketData,
})(MainContent);
