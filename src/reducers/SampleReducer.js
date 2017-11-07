import {
  SOMETHING_SUCCESSFUL,
  SOMETHING_FAILED,
  SOMETHING_RUNNING,
  SOMETHING_COMPLETE
} from '../actions'

const initialState = {
  message: 'Waiting for Action...',
  runningInit: false
}

export default function logReducer(state = initialState, action) {
    switch (action.type) {
        case SOMETHING_SUCCESSFUL:
        case SOMETHING_FAILED:
        case SOMETHING_RUNNING:
        case SOMETHING_COMPLETE:
            return {
                ...state,...action.data
            };
        default:
            return state;
    }
}
