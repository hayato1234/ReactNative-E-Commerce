import * as ActionTypes from "./ActionTypes";
import { ITEMS } from "../shared/items";
import { baseUrl } from "../shared/baseUrl";

export const fetchItemList = () => (dispatch) => {
  console.log("fetchcalled");
  dispatch(itemListLoading);
  setTimeout(() => {
    dispatch(loadItems(ITEMS));
  }, 1000);
  return fetch(baseUrl + "products/category/electronics")
    .then(
      (response) => {
        if (response.ok) {
          // console.log(response.json());
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        //no response
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((items) => dispatch(loadItems(items)))
    .catch((error) => failedLoadItems(error));
};

function itemListLoading() {
  return { type: ActionTypes.ITEM_LIST_LOADING };
}

function loadItems(items) {
  return { type: ActionTypes.LOAD_ITEM_LIST, payload: items };
}

function failedLoadItems(error) {
  return { type: ActionTypes.ITEM_LIST_FAILED, payload: error.message };
}

export function addToCart(item) {
  return { type: ActionTypes.ADD_TO_CART, payload: item };
}
