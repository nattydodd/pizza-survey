import axios from 'axios';

export const CREATE_RESPONSE_ID = 'CREATE_RESPONSE_ID';

export function createResponseId(props) {
  const request = axios.post('api/v1/responses.json', props);

  return {
    type: CREATE_RESPONSE_ID,
    payload: request
  }
}
