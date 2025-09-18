import { useState, useEffect, useRef } from "react"
import "./SuccessStories.css"
import ProfImg1 from "./images/prof1.png"
import ProfImg2 from "./images/prof2.png"
import ProfImg3 from "./images/prof3.jpg"
import ProfImg4 from "./images/prof4.png"
import ProfImg5 from "./images/prof5.png"

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)

  const successStories = [
    { id: 1, name: "Sarah Johnson", role: "Senior SDET at Microsoft", image: ProfImg1, rating: 5, testimonial: "This SDET program completely transformed my career.", company: "Microsoft" },
    { id: 2, name: "Ahmed Khan", role: "Test Automation Lead at Google", image: ProfImg2, rating: 5, testimonial: "Excellent curriculum covering everything from basics to advanced automation.", company: "Google" },
    { id: 3, name: "Maria Garcia", role: "QA Engineer at Amazon", image: ProfImg3, rating: 5, testimonial: "The comprehensive coverage gave me the confidence to tackle complex automation challenges.", company: "Amazon" },
    { id: 4, name: "David Chen", role: "Automation Engineer at Netflix", image: ProfImg4, rating: 5, testimonial: "Outstanding program with practical projects mirroring real industry scenarios.", company: "Netflix" },
    { id: 5, name: "Lisa Thompson", role: "SDET at Apple", image: ProfImg5, rating: 5, testimonial: "From zero testing background to landing my dream job at Apple.", company: "Apple" },
    { id: 6, name: "Raj Patel", role: "Test Lead at Uber", image: ProfImg3, rating: 5, testimonial: "The program prepared me exceptionally well for leadership roles in testing.", company: "Uber" },
  ]

  const visibleCards = 3
  const maxIndex = Math.max(0, successStories.length - visibleCards)

  // Auto-scroll functionality
useEffect(() => {
  if (!isHovered) {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > maxIndex-1 ? 0 : prevIndex + 1
      )
      
    }, 4000)
  }
  

  return () => clearInterval(intervalRef.current)
}, [isHovered, maxIndex])

useEffect(() => {
  if (currentIndex > maxIndex-1) {
    setCurrentIndex(0)

  } else if (currentIndex < 0) {
    setCurrentIndex(maxIndex)
  }
  console.log("Current Index:", currentIndex, "Max Index:", maxIndex)
}, [currentIndex, maxIndex])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ))

  return (
    <section className="success-stories">
      <div className="success-stories-container">
        <div className="success-stories-header">
          <h2 className="success-stories-title">Success Stories</h2>
          <p className="success-stories-subtitle">
            Hear from our graduates who have successfully transitioned into SDET roles at top companies
          </p>
        </div>

        <div className="carousel-container">
          <div
            className="testimonials-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                transition: "transform 0.8s linear",
              }}
            >
              {successStories.map((story) => (
                <div key={story.id} className="testimonial-card">
                  <div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">{story.testimonial}</p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="profile-section">
                        <img src={story.image} alt={story.name} className="profile-image" />
                        <div className="profile-info">
                          <h3 className="profile-name">{story.name}</h3>
                          <p className="profile-role">{story.role}</p>
                        </div>
                      </div>
                      <div className="rating">{renderStars(story.rating)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom-navigation">
            <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="carousel-arrow right-arrow" onClick={goToNext}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
