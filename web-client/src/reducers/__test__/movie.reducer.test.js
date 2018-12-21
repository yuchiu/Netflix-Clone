import { Reducer } from "redux-testkit";

import actionTypes from "@/actionTypes";
import { movieReducer } from "@/reducers";

const initialState = {
  selectedMovie: {},
  trendingCollectionList: [],
  popularCollectionList: [],
  topRatingCollectionList: [],
  isLoading: false
};

describe("movie.reducer initial state", () => {
  it("should have initial state", () => {
    expect(movieReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle MOVIE_COLLECTION_FETCH action on initial state", () => {
    const action = {
      type: actionTypes.MOVIE_COLLECTION_FETCH
    };
    const result = {
      selectedMovie: {},
      trendingCollectionList: [],
      popularCollectionList: [],
      topRatingCollectionList: [],
      isLoading: true
    };
    Reducer(movieReducer)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle MOVIE_COLLECTION_FETCH_SUCCESS action on existing state", () => {
    const action = {
      type: actionTypes.MOVIE_COLLECTION_FETCH_SUCCESS,
      payload: {
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
    };
    const state = {
      selectedMovie: {},
      trendingCollectionList: [],
      popularCollectionList: [],
      topRatingCollectionList: [],
      isLoading: true
    };
    const result = {
      selectedMovie: {},
      trendingCollectionList: [],
      popularCollectionList: [
        {
          id: "tt4633694",
          score: 1,
          data: {
            title: "Spider-Man: Into the Spider-Verse"
          }
        }
      ],
      topRatingCollectionList: [],
      isLoading: false
    };
    Reducer(movieReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
  it("should have initial state", () => {
    expect(movieReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle MOVIE_FETCH action on initial state", () => {
    const action = {
      type: actionTypes.MOVIE_FETCH
    };
    const result = {
      selectedMovie: {},
      trendingCollectionList: [],
      popularCollectionList: [],
      topRatingCollectionList: [],
      isLoading: true
    };
    Reducer(movieReducer)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle MOVIE_FETCH_SUCCESS action on existing state", () => {
    const action = {
      type: actionTypes.MOVIE_FETCH_SUCCESS,
      payload: {
        selectedMovie: {
          id: "tt4633694",
          score: 1,
          data: {
            title: "Spider-Man: Into the Spider-Verse"
          }
        }
      }
    };
    const state = {
      selectedMovie: {},
      trendingCollectionList: [],
      popularCollectionList: [],
      topRatingCollectionList: [],
      isLoading: true
    };
    const result = {
      selectedMovie: {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      },
      trendingCollectionList: [],
      popularCollectionList: [],
      topRatingCollectionList: [],
      isLoading: false
    };
    Reducer(movieReducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
