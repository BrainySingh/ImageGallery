import * as ACTIONS from '../actions/actionTypes';
import  imageData from '../reducers/imageData'

const imageArr = [  {
                        "id": "43944553145",
                        "owner": "28380673@N03",
                        "secret": "13b2d1ef49",
                        "server": "1978",
                        "farm": 2,
                        "title": "_IMG4132",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0
                    }, {
                        "id": "43043917550",
                        "owner": "128018919@N07",
                        "secret": "7d7d185549",
                        "server": "1857",
                        "farm": 2,
                        "title": "Blooms in the Mountains...",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0
                    },{
                        "id": "44856954051",
                        "owner": "141061815@N02",
                        "secret": "0542b5cf4d",
                        "server": "1854",
                        "farm": 2,
                        "title": "Have a beautiful sunday guys\ud83c\udf30\ud83c\udf30\ud83c\udf30\ud83c\udf3a\ud83c\udf3a\ud83c\udf37\ud83c\udf38 #shemale #shemales #tgirl #tgirls #trans #transgender #transsexual #ladyboy #ladyboys #ass #booty #sunday #morning #girl #girls #women #womens #adult #te",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0
                    }, {
                        "id": "44856953691",
                        "owner": "141061815@N02",
                        "secret": "f2466fdb7c",
                        "server": "1931",
                        "farm": 2,
                        "title": "Have a beautiful sunday guys\ud83c\udf30\ud83c\udf30\ud83c\udf30\ud83c\udf3a\ud83c\udf3a\ud83c\udf37\ud83c\udf38 #shemale #shemales #tgirl #tgirls #trans #transgender #transsexual #ladyboy #ladyboys #ass #booty #sunday #morning #girl #girls #women #womens #adult #te",
                        "ispublic": 1,
                        "isfriend": 0,
                        "isfamily": 0
                    }
                ]

describe("IMAGE DATA REDUCER", () => {

    it("RECEIVED IMAGES SUCCESS", () => { 

    const state = { isFetching: true,
                    imageArray: [],
                    errorMsg:'',
                    numberOfImagesToBeShown: '2'}
    
    const action = {  type: ACTIONS.RECEIVED_IMAGES,
                      data: imageArr
                   }

    const results = imageData(state, action)
    expect(results).toEqual({
                                isFetching: false,
                                imageArray: imageArr,
                                errorMsg:'',
                                numberOfImagesToBeShown: '2'
                            }) 
    });

    it("RECEIVED IMAGES ERROR", () => { 
        const state = { isFetching: false,
                        imageArray: imageArr,
                        errorMsg:''
                      }
    
        const action = { type: ACTIONS.ERROR_RECEIVED,
                         errorMsg: 'Error in loading images'
                       }
    
        const results = imageData(state, action)
        expect(results).toEqual({
                                isFetching: false,
                                imageArray: [],
                                errorMsg:'Error in loading images'
                            }) 
                        
    });

    it("RESET SEARCH RESULTS", () => { 
    const state = { isFetching: false,
                    imageArray: imageArr,
                    errorMsg:'',
                    numberOfImagesToBeShown: '2'}

    const action = { type: ACTIONS.RESET_IMAGES,
                     data: []
                   }

    const results = imageData(state, action)
    expect(results).toEqual({   isFetching: false,
                                imageArray: [],
                                errorMsg:'',
                                numberOfImagesToBeShown: '2'
                            }) 
                                                         
                    
    });
    it("SHOW IMAGES", () => { 
        const state = { isFetching: false,
                        imageArray: imageArr,
                        errorMsg:'',
                        numberOfImagesToBeShown: '2'}
    
        const action = { type: ACTIONS.SHOW_IMAGES,
                         numberOfImagesToBeShown: '4'
                       }
    
        const results = imageData(state, action)
        expect(results.numberOfImagesToBeShown).toEqual('4') 
    });
    
})