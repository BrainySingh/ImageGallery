import fetch from 'cross-fetch'
import * as ACTIONS from './actionTypes';
import { _API_KEY, FALLBACK_ERROR_MESSAGE } from '../assets/text/en_US'

function requestImages() {
  return {
    type: ACTIONS.REQUEST_IMAGES
  }
}

export function receivedImages (imageData){
  return{
    type: ACTIONS.RECEIVED_IMAGES,
    data: imageData
  }
}

function errorReceivingImage (msg){
  return{
    type: ACTIONS.ERROR_RECEIVED,
    errorMsg: msg
  }
}

export function resetImages() {
  return {
    type: ACTIONS.RESET_IMAGES
  }
}

export function showImages(num) {
  return {
    type: ACTIONS.SHOW_IMAGES,
    numberOfImagesToBeShown: num
  }
}

export const fetchImages = (searchString) => {
  return (dispatch) => {
    dispatch(requestImages());
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${_API_KEY}&text=${searchString}&format=json&nojsoncallback=1`)
    .then(response => response.json()
    .then(data => ({
        data: data,
        status: response.status
    }))
    .then(res => { 
      if (res.data.photos.photo) {
        dispatch(receivedImages(res.data.photos.photo))
      } else if (res.data.stat === 'fail' ){
        dispatch(errorReceivingImage(res.data.message))
      } else {
        dispatch(errorReceivingImage(FALLBACK_ERROR_MESSAGE))
      }
    }));
  }
}