import { Thunk } from "redux-testkit";
import actionTypes from "@/actionTypes";
import { userAction } from "@/actions";
import { userService } from "@/actions/services";

jest.mock("../services/user.service");

describe("user.action", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should try auto sign in user", async () => {
    userService.fetchTryAutoSignIn.mockReturnValueOnce({
      data: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
    const dispatches = await Thunk(userAction.fetchTryAutoSignIn).execute();
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.USER_FETCH_TRY_AUTO_LOGIN,
      payload: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
  });

  it("should fetch sign up user", async () => {
    userService.fetchSignUpUser.mockReturnValueOnce({
      data: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
    const dispatches = await Thunk(userAction.fetchSignUpUser).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.USER_FETCH_LOGIN
    });
    expect(dispatches[1].getAction()).toEqual({
      type: actionTypes.USER_FETCH_LOGIN_SUCCESS,
      payload: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
  });

  it("should fetch sign in user", async () => {
    userService.fetchSignInUser.mockReturnValueOnce({
      data: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
    const dispatches = await Thunk(userAction.fetchSignInUser).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.USER_FETCH_LOGIN
    });
    expect(dispatches[1].getAction()).toEqual({
      type: actionTypes.USER_FETCH_LOGIN_SUCCESS,
      payload: {
        id: 2,
        username: "tester",
        email: "tester@email.com",
        token: "dasasddasasdxxxx2324234sadads"
      }
    });
  });

  it("should fetch sign out user", async () => {
    const dispatches = await Thunk(userAction.signOutUser).execute();
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.USER_LOGOUT
    });
  });
});
