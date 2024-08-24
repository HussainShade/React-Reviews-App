import {Component} from 'react'
import './index.css'

// Write your code here

class ReviewsCarousel extends Component {
  state = {
    reviewListIndex: 0,
  }

  onPreviousButtonClick = () => {
    const {reviewListIndex} = this.state
    if (reviewListIndex > 0) {
      this.setState(prevState => ({
        reviewListIndex: prevState.reviewListIndex - 1,
      }))
    }
  }

  onNextButtonClick = () => {
    const {reviewListIndex} = this.state
    const {reviewsList} = this.props
    if (reviewListIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewListIndex: prevState.reviewListIndex + 1,
      }))
    }
  }

  render() {
    const {reviewListIndex} = this.state
    const {reviewsList} = this.props
    const reviewDetail = reviewsList[reviewListIndex]
    const {imgUrl, username, companyName, description} = reviewDetail

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onPreviousButtonClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} className="person-image" />
            <p className="person-name">{username}</p>
            <p className="person-description">{companyName}</p>
            <p className="person-description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onNextButtonClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
