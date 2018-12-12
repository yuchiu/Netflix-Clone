export default {
  testSearchAll: () => ({
    size: 10,
    from: 0,
    query: {
      match_all: {}
    }
  })
};
