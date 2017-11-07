import {
  SOMETHING_SUCCESSFUL,
  SOMETHING_FAILED,
  SOMETHING_RUNNING,
  SOMETHING_COMPLETE
} from './'

export const SampleAction = (input) => {
  return (dispatch) => {
    if (input) dispatch(somethingHappens(SOMETHING_SUCCESSFUL))
    else dispatch(somethingHappens(SOMETHING_FAILED))
  }
}

export const SampleActionRunning = (input) => {
  return (dispatch) => {
    if (!input) dispatch(somethingRunning(SOMETHING_COMPLETE))
    else dispatch(somethingRunning(SOMETHING_RUNNING))
  }
}

const somethingHappens = (payload) => {
  switch (payload) {
    case SOMETHING_SUCCESSFUL:
      return {
        type: payload,
        data: { message: 'Action Success :)' }
      }
    default:
      return {
        type: payload,
        data: { message: 'Action Failed :(' }
      }
  }
}

const somethingRunning = (payload) => {
  switch (payload) {
    case SOMETHING_COMPLETE:
      return {
        type: payload,
        data: { runningInit: false }
      }
    default:
      return {
        type: payload,
        data: { runningInit: true }
      }
  }
}
