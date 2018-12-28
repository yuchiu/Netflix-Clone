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

  searchTermQuery: (searchTerm, size) => ({
    size,
    from: 0,
    query: {
      multi_match: {
        query: searchTerm,
        fuzziness: 1,
        fields: ["title", "description", "storyline"]
      }
    }
  })
};
