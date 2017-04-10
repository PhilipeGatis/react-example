export const GET_CONTACT = 'GET_CONTACT';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILED = 'GET_CONTACT_FAILED';

export const getContact = id => ({
  type: GET_CONTACT,
  payload: {
    id,
  },
});

export const getContactFailed = error => ({
  type: GET_CONTACT_FAILED,
  payload: {
    error,
  },
});

export const getContactSuccess = contact => ({
  type: GET_CONTACT_SUCCESS,
  payload: {
    contact,
  },
});
