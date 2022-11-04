import { combineReducers } from "redux";

const fetchScript = (option_scripts = [], action) => {
  if (action.type === "SEARCH_SCRIPT") {
    return action.payload;
  }
  return option_scripts;
};

const addScriptToWishlist = (wishlist_scripts = [], action) => {
  // console.log(action.payload);
  if (action.type === "ADD_SCRIPT_TO_WISHLIST") {
    wishlist_scripts.push(action.payload);
    return [...new Set(wishlist_scripts)];
  }
  return wishlist_scripts;
};

const addScriptToSubscribe = (subscribed_scripts = [], action) => {
  if (action.type === "ADD_SCRIPT_TO_WISHLIST") {
    subscribed_scripts.push(action.payload.token);
    return [...new Set(subscribed_scripts)];
  }
  return subscribed_scripts;
};

const websocketData = (websocketData = {}, action) => {
  if (action.type === "WEBSOCKET_DATA") {
    // console.log("action.payload", action.payload);
    const { tk, lp } = action.payload;
    websocketData[tk] = lp;
    return { ...websocketData };
  }
  return websocketData;
};

const allReducer = combineReducers({
  fetchScript: fetchScript,
  addScriptToWishlist: addScriptToWishlist,
  addScriptToSubscribe: addScriptToSubscribe,
  websocketData: websocketData,
});

export default allReducer;
