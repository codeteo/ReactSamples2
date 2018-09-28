const initState = {
  posts: [
    {
      id: "1",
      title: "First Title",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      id: "2",
      title: "Second Title",
      body:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      id: "3",
      title: "Third Title",
      body:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
