import axios from 'axios';

export const CREATE_RESPONSE_ID = 'CREATE_RESPONSE_ID';
export const FETCH_RESULTS = 'FETCH_RESULTS';


export function createResponseId(props) {
  const request = axios.post('api/v1/responses.json', props);

  return {
    type: CREATE_RESPONSE_ID,
    payload: request
  }
}

export function fetchResults() {
  const request = axios.get('api/v1/responses.json');

  return {
    type: FETCH_RESULTS,
    payload: request
  }
}
