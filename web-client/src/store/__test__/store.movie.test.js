import _ from "lodash";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { FlushThunks } from "redux-testkit";

import { movieReducer } from "@/reducers";
import { movieAction } from "@/actions";
import { movieSelector } from "@/selectors";
import { movieService } from "@/actions/services";

jest.mock("@/actions/services/movie.service");

describe("store/movies integration", () => {
  let flushThunks;
  let store;

  beforeEach(() => {
    jest.resetAllMocks();
    _.shuffle = jest.fn();
    _.shuffle.mockImplementation(arr => arr);
    flushThunks = FlushThunks.createMiddleware();
    store = createStore(
      combineReducers({ movieReducer }),
      applyMiddleware(flushThunks, thunk)
    );
  });

  it("should fetch movie collection", async () => {
    movieService.fetchMovieCollection.mockReturnValueOnce({
      data: {
        data: {
          collectionLength: 1,
          collectionName: "popular",
          timeSpent: 1,
          total: 9950,
          movieCollection: [
            {
              id: "tt4633694",
              score: 1,
              data: {
                title: "Spider-Man: Into the Spider-Verse"
              }
            }
          ]
        }
      }
    });
    await store.dispatch(movieAction.fetchMovieCollection());
    expect(movieSelector.getPopularCollectionList(store.getState())).toEqual([
      {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      }
    ]);
  });
});
