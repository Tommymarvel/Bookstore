const STATUS_CHECKED = { type: 'STATUS_CHECKED' };
const initialState = [];

export const statusCheck = () => {
  'STATUS_CHECKED';
};

export default function statusCheckerReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}
