import { Thunk } from "redux-testkit";
import actionTypes from "@/actionTypes";
import { movieAction } from "@/actions";
import { movieService } from "@/actions/services";

jest.mock("../services/movie.service");

describe("movie.action", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should fetch movie collection list from server", async () => {
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
    const dispatches = await Thunk(movieAction.fetchMovieCollection).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.MOVIE_COLLECTION_FETCH
    });
    expect(dispatches[1].getAction()).toEqual({
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
    });
  });
  it("should fetch movie from server", async () => {
    movieService.fetchMovie.mockReturnValueOnce({
      data: {
        data: {
          id: "tt4633694",
          score: 1,
          data: {
            title: "Spider-Man: Into the Spider-Verse"
          }
        }
      }
    });
    const dispatches = await Thunk(movieAction.fetchMovie).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: actionTypes.MOVIE_FETCH
    });
    expect(dispatches[1].getAction()).toEqual({
      type: actionTypes.MOVIE_FETCH_SUCCESS,
      payload: {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      }
    });
  });
});
