import * as ACTIONS from '../actions/actionTypes';
const defaultState = {
  isFetching: false,
  imageArray: [],
  errorMsg:'',
  numberOfImagesToBeShown: '2'
}
const imageData = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_IMAGES:
      return {
        ...state,
          isFetching: true,
          imageArray: [],
          errorMsg:''
      }
    case ACTIONS.RECEIVED_IMAGES:
    return {
        ...state,
        isFetching: false,
        imageArray: action.data,
        errorMsg:''
      }
    case ACTIONS.ERROR_RECEIVED:
    return {
        ...state,
        isFetching: false,
        imageArray: [],
        errorMsg: action.errorMsg
      }
      case ACTIONS.RESET_IMAGES:
      return {
          ...state,
          isFetching: false,
          imageArray: [],
          errorMsg: '',
          numberOfImagesToBeShown:'2'
        }
      case ACTIONS.SHOW_IMAGES:
      return {
        ...state,
        numberOfImagesToBeShown: action.numberOfImagesToBeShown
      }
    default:
      return state
  }
}
export default imageData