import {
  SOMETHING_SUCCESSFUL,
  SOMETHING_FAILED
} from '../actions'

export default function logReducer(state = { message: 'Waiting for Action...' }, action) {
    switch (action.type) {
        case SOMETHING_SUCCESSFUL:
            return {
                ...state,...action.data
            };
        case SOMETHING_FAILED:
            return {
                ...state,...action.data
            };
        default:
            return state;
    }
}
