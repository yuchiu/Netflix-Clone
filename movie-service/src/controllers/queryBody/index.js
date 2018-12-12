export default {
  testSearchAll: size => ({
    size,
    from: 0,
    query: {
      match_all: {}
    }
  })
};
