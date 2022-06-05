const SignModalReducer = (state, action) => {
  if (action.type === 'OPEN_MODAL') return { modalStatus: true };
  else if (action.type === 'CLOSE_MODAL') return { modalStatus: false };
  else return state;
};

export default SignModalReducer;
