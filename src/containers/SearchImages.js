import React from 'react'
import { connect } from 'react-redux'
import { fetchImages, resetImages } from '../actions'
import { SEARCH_BAR_PLACEHOLDER, NO_IMAGE_ERROR_MESSAGE } from '../assets/text/en_US'
import PaginationContainer from './PaginationContainer'
import ImageGallery from '../components/ImageGallery'
import PropTypes from 'prop-types'
import { getVisibleImages } from '../selectors'
import { css } from 'react-emotion'
import { FadeLoader } from 'react-spinners';

const override = css`
                  z-index: 2;
                  height: 2em;
                  width: 2em;
                  margin: auto;
              `;

class SearchImages extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      showSearchButton: true
    }
    this.searchImages = this.searchImages.bind(this)
    this.clearText = this.clearText.bind(this)
  }
  //For initial focus on search bar
  componentDidMount() {
    const {_title} = this.refs
    _title.focus();
  }
  //On Submitting the search string
  searchImages(e) {
    const {_title} = this.refs
    e.preventDefault();
    if(!_title.value.trim()) {return} //Return if there is no value
    this.props.dispatch(fetchImages(_title.value))
    this.setState({ showSearchButton: false });
  }
  //On resetting the search
  clearText() {
    const {_title} = this.refs
    _title.value = ''
    this.props.dispatch(resetImages())
    this.setState({ showSearchButton: true });
    _title.focus();
  }
  render() {
    const { imageArray,
            errorMsg,
            isFetching } = this.props;
    return (
        <div className='search-image-wrapper'>
          {/* Search Bar */}
          <form className='search-image'>
            <input ref="_title"
                   type="text"
                   placeholder={SEARCH_BAR_PLACEHOLDER}/>
              { this.state.showSearchButton ? 
                   <button onClick={this.searchImages} className="action-buttons search"></button> : 
                   <button onClick={this.clearText} className="action-buttons cancel"></button> 
              }
          </form>
          {/* Error Handling */}
          {(errorMsg) ? <div className="error-block">
                          <p>{NO_IMAGE_ERROR_MESSAGE}</p> 
                          <p>Reason: {errorMsg}</p>
                        </div> : ""}
          {/* Pagination */}
          <PaginationContainer></PaginationContainer>
          {/* Progress Spinner */}
          <FadeLoader
            className={override}
            color={'#50A0E3'}
            loading={isFetching}
          />
          {/* Image Gallery - Passing Image URLs*/}
          <ImageGallery imageArray={imageArray}></ImageGallery>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imageArray: getVisibleImages(state), //Calling selectors to filter out the number of images and passing only image url and owner name to the presentation component
    errorMsg: state.imageData.errorMsg, // Handle any network error
    isFetching: state.imageData.isFetching //Spinner Logic
  }
}

SearchImages.propTypes = {
  imageArray: PropTypes.array,
  isFetching: PropTypes.bool,
  errorMsg: PropTypes.string
}

export default connect(mapStateToProps)(SearchImages);