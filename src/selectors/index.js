import { createSelector } from 'reselect'
 
const getImageArray = (state) => state.imageData.imageArray
const getNumberOfImagesToBeShown = (state) => state.imageData.numberOfImagesToBeShown
 
export const getVisibleImages = createSelector(
  [ getImageArray, getNumberOfImagesToBeShown ],
  (imageArray, numberOfImagesToBeShown) => {
       //Extracting number of images to be shown based on the pagination selection
        var imageData = imageArray.length && imageArray.slice(0,numberOfImagesToBeShown)
        //Making valid image URL
        if(imageData && imageData.length){
            return imageData.map((t) => {
                return {
                url: `https://farm${t.farm}.staticflickr.com/${t.server}/${t.id}_${t.secret}.jpg`,
                owner: t.owner,
                } 
            });
        } 
        return [];
    }
)
