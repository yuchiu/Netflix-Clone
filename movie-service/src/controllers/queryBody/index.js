export default {
  searchAll: size => ({
    size,
    from: 0,
    query: {
      match_all: {}
    }
  }),

  findById: id => ({
    size: 1,
    from: 0,
    query: {
      terms: {
        _id: [id]
      }
    }
  }),

  countMatchSearchTerm: searchTerm => ({
    query: {
      multi_match: {
        query: searchTerm,
        fuzziness: 1,
        fields: ["title", "description", "storyline"]
      }
    }
  }),

  searchTermQuery: (searchTerm, size, from) => ({
    size,
    from,
    query: {
      multi_match: {
        query: searchTerm,
        fuzziness: 1,
        fields: ["title", "description", "storyline"]
      }
    }
  }),

  searchSuggestionQuery: (searchTerm, size) => ({
    size,
    query: {
      multi_match: {
        query: searchTerm,
        fuzziness: 1,
        fields: ["title", "description", "storyline"]
      }
    },
    suggest: {
      "my-suggestion": {
        text: searchTerm,
        term: {
          field: "title"
        }
      }
    }
  })
};
