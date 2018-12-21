import { Reducer } from "redux-testkit";

import actionTypes from "@/actionTypes";
import { userReducer } from "@/reducers";

const initialState = {
  isUserAuthenticated: false,
  currentUser: {},
  isLoading: false
};

describe("user.reducer initial state", () => {
  it("should have initial state", () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle USER_FETCH_TRY_AUTO_LOGIN action on initial state", () => {
    const action = {
      type: actionTypes.USER_FETCH_TRY_AUTO_LOGIN,
      payload: {
        user: {
          id: 2,
          username: "tester",
          email: "tester@email.com"
        },
        token: "dasasddasasdxxxx2324234sadads"
      }
    };
    const state = {
      isUserAuthenticated: false,
      currentUser: {},
      isLoading: false
    };
    const result = {
      isUserAuthenticated: true,
      currentUser: { id: 2, email: "tester@email.com", username: "tester" },
      isLoading: false
    };
    Reducer(userReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle USER_FETCH_LOGIN action on initial state", () => {
    const action = {
      type: actionTypes.USER_FETCH_LOGIN
    };
    const result = {
      isUserAuthenticated: false,
      currentUser: {},
      isLoading: true
    };
    Reducer(userReducer)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle USER_FETCH_LOGIN_SUCCESS action on existing state", () => {
    const action = {
      type: actionTypes.USER_FETCH_LOGIN_SUCCESS,
      payload: {
        user: {
          id: 2,
          username: "tester",
          email: "tester@email.com"
        },
        token: "dasasddasasdxxxx2324234sadads"
      }
    };
    const state = {
      isUserAuthenticated: false,
      currentUser: {},
      isLoading: true
    };
    const result = {
      isUserAuthenticated: true,
      currentUser: { id: 2, email: "tester@email.com", username: "tester" },
      isLoading: false
    };
    Reducer(userReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle USER_LOGOUT action on existing state", () => {
    const action = {
      type: actionTypes.USER_LOGOUT
    };
    const state = {
      isUserAuthenticated: true,
      currentUser: { id: 2, email: "tester@email.com", username: "tester" },
      isLoading: false
    };
    const result = {
      isUserAuthenticated: false,
      currentUser: {},
      isLoading: false
    };
    Reducer(userReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
