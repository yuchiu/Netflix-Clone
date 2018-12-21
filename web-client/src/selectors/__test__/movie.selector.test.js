import { Selector } from "redux-testkit";

import { movieSelector } from "@/selectors";

describe("movie.selector", () => {
  it("should select one movie", () => {
    const state = {
      movieReducer: {
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
      }
    };
    const result = {
      id: "tt4633694",
      score: 1,
      data: {
        title: "Spider-Man: Into the Spider-Verse"
      }
    };
    Selector(movieSelector.getSelectedMovie)
      .expect(state)
      .toReturn(result);
  });
  it("should get is movie loading", () => {
    const state = {
      movieReducer: {
        selectedMovie: {},
        trendingCollectionList: [],
        popularCollectionList: [],
        topRatingCollectionList: [],
        isLoading: true
      }
    };
    const result = true;
    Selector(movieSelector.getMovieIsLoading)
      .expect(state)
      .toReturn(result);
  });
  it("should get popular movie collection list", () => {
    const state = {
      movieReducer: {
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
      }
    };
    const result = [
      {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      }
    ];
    Selector(movieSelector.getPopularCollectionList)
      .expect(state)
      .toReturn(result);
  });
  it("should get trending movie collection list", () => {
    const state = {
      movieReducer: {
        selectedMovie: {},
        trendingCollectionList: [
          {
            id: "tt4633694",
            score: 1,
            data: {
              title: "Spider-Man: Into the Spider-Verse"
            }
          }
        ],
        popularCollectionList: [],
        topRatingCollectionList: [],
        isLoading: false
      }
    };
    const result = [
      {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      }
    ];
    Selector(movieSelector.getTrendingCollectionList)
      .expect(state)
      .toReturn(result);
  });
  it("should get top rating movie collection list", () => {
    const state = {
      movieReducer: {
        selectedMovie: {},
        trendingCollectionList: [],
        popularCollectionList: [],
        topRatingCollectionList: [
          {
            id: "tt4633694",
            score: 1,
            data: {
              title: "Spider-Man: Into the Spider-Verse"
            }
          }
        ],
        isLoading: false
      }
    };
    const result = [
      {
        id: "tt4633694",
        score: 1,
        data: {
          title: "Spider-Man: Into the Spider-Verse"
        }
      }
    ];
    Selector(movieSelector.getTopRatingCollectionList)
      .expect(state)
      .toReturn(result);
  });
});
