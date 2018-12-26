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
  })
};
