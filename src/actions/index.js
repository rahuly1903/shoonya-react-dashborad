import api from "../apis/axios";

export const searchScript = (data) => async (dispatch) => {
  const responce = await api.get(`/bn?ticker=${data}`);

  dispatch({
    type: "SEARCH_SCRIPT",
    payload: responce.data,
  });
};

export const addScriptToWishlist = (data) => {
  return {
    type: "ADD_SCRIPT_TO_WISHLIST",
    payload: data,
  };
};

export const showWebSocketData = (data) => {
  return {
    type: "WEBSOCKET_DATA",
    payload: data,
  };
};
