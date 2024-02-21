// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentReviewDisplay = reviewsList[activeIndex]

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDisplay)}
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
