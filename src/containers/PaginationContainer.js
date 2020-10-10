import React from 'react'
import { connect } from 'react-redux'
import { showImages } from '../actions'
import PropTypes from 'prop-types'


class PaginationContainer extends React.Component {

  constructor(props) {
    super(props)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  // On selecting the pagination option
  handleOptionChange (changeEvent) {
    this.props.dispatch(showImages(changeEvent.target.value))
  }
  render() {
    const { numberOfImagesToBeShown } = this.props;
    return (
        <div className='radio-button-wrapper'>
          <form>
            <div className="radio">
              <input type="radio" 
                     id="rd1" 
                     value="2" 
                     checked={numberOfImagesToBeShown === '2'} 
                     onChange={this.handleOptionChange} />
              <label htmlFor="rd1">2</label>
            </div>
            <div className="radio">
              <input type="radio" 
                     id="rd2" 
                     value="10" 
                     checked={numberOfImagesToBeShown === '10'} 
                     onChange={this.handleOptionChange} />
              <label htmlFor="rd2">10</label>
            </div>
            <div className="radio">
              <input type="radio" 
                     id="rd3" 
                     value="30" 
                     checked={numberOfImagesToBeShown === '30'} 
                     onChange={this.handleOptionChange} />
               <label htmlFor="rd3">30</label>
            </div>
          </form>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    numberOfImagesToBeShown: state.imageData.numberOfImagesToBeShown
  }
}
PaginationContainer.propTypes = {
  numberOfImagesToBeShown: PropTypes.string,
}
export default connect(mapStateToProps)(PaginationContainer);