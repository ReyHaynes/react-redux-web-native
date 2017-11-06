import {
  SOMETHING_SUCCESSFUL,
  SOMETHING_FAILED
} from './'

export default function SampleAction(input) {
  return (dispatch) => {
    if (input === 1) dispatch(somethingHappens(SOMETHING_SUCCESSFUL))
    else dispatch(somethingHappens(SOMETHING_FAILED))
  }
}

const somethingHappens = (payload) => {

  switch (payload) {
    case SOMETHING_SUCCESSFUL:
      return {
        type: payload,
        data: { message: 'Action Success :)' }
      }
      break;
    default:
      return {
        type: payload,
        data: { message: 'Action Failed :(' }
      }
  }
}
