const ADDED_BOOK = { type: 'ADDED_BOOK' };
const REMOVED_BOOK = { type: 'REMOVED_BOOK' };

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbet',
  },
];

export const addedBook = (book) => ({
  type: 'ADDED_BOOK',
  book,
});

export const removedBook = () => ({
  type: 'REMOVED_BOOK',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
