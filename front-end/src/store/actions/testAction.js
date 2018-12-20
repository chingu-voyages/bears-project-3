export const testAction = () => (dispatch) => {
  dispatch({
    type: 'TEST_ACTION',
    payload: 'Success! Redux is connected.',
  });
};
