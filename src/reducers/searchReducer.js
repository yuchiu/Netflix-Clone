function getId(todos) {
    return todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId)
    }, -1) + 1
  }
  


const searchReducer = function (search = [], action) {

  switch (action.type) {
    case 'FETCH_RECEIVED':
      return [
        {
            movies: action.movies.data.results, //add new todo info
            
          id: getId(search)
        },
        ...search //append todos
      ]
    case 'FETCH_ERROR':
      return console.log('errorrrrr');

    default:
      return search;
  }
}
export default searchReducer;