import "./CourseDetails.css"

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="course-details-container">
        <div className="course-details-header">
          <h2 className="course-details-title">Course Details</h2>
          <p className="course-details-subtitle">
            Comprehensive 6-month SDET program designed to transform your career in software testing
          </p>
        </div>

        <div className="course-details-content">
          {/* Left Side - Main Info Cards */}
          <div className="main-info-section">
            {/* Duration Card */}
            <div className="info-card duration-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div className="card-title-section">
                  <h3 className="card-title">Duration</h3>
                  <p className="duration-text">6 Months</p>
                </div>
              </div>

              <div className="schedule-section">
                <div className="schedule-item weekdays">
                  <div className="schedule-indicator weekdays-indicator"></div>
                  <div className="schedule-content">
                    <h4 className="schedule-title">Weekdays Schedule</h4>
                    <p className="schedule-days">Tuesday | Wednesday | Thursday</p>
                    <p className="schedule-time">7:00 PM to 9:00 PM CST</p>
                  </div>
                </div>

                <div className="schedule-item weekend">
                  <div className="schedule-indicator weekend-indicator"></div>
                  <div className="schedule-content">
                    <h4 className="schedule-title">Weekend Schedule</h4>
                    <p className="schedule-days">Saturday | Sunday</p>
                    <p className="schedule-time">9:00 AM to 12:00 PM CST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Level Card */}
            <div className="info-card entry-level-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <svg className="target-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="card-title-section">
                  <h3 className="card-title">Entry Level</h3>
                  <p className="entry-level-text">No IT Background Required</p>
                </div>
              </div>
              <p className="entry-level-description">
                Perfect for beginners and career changers looking to enter the SDET field
              </p>
            </div>
          </div>

          {/* Right Side - Feature Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h4 className="feature-title">Online Classes</h4>
              <p className="feature-description">Attend from Anywhere!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4 className="feature-title">Class Recordings</h4>
              <p className="feature-description">Access to the Recording of the Classes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9,11 12,14 22,4" />
                  <path d="m21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11" />
                </svg>
              </div>
              <h4 className="feature-title">Homework</h4>
              <p className="feature-description">Plenty of Examples for Homework</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              </div>
              <h4 className="feature-title">Assessments</h4>
              <p className="feature-description">Bi Weekly Quizzes and Exams</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m22,2-5,10-3,-3-10,5" />
                </svg>
              </div>
              <h4 className="feature-title">Mentorship</h4>
              <p className="feature-description">Weekly 1 to 1 Mentorship</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
              </div>
              <h4 className="feature-title">Real Projects</h4>
              <p className="feature-description">Real Time Mock Project Experience</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h4 className="feature-title">Rewards</h4>
              <p className="feature-description">Lots of Rewards to Motivate Students on Exams</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6" />
                  <path d="m21 12-6 0m-6 0-6 0" />
                  <path d="m16.24 7.76-4.24 4.24m-4.24 4.24-4.24 4.24" />
                  <path d="M16.24 16.24l-4.24-4.24m-4.24-4.24L3.76 3.76" />
                </svg>
              </div>
              <h4 className="feature-title">Interview Prep</h4>
              <p className="feature-description">Interview Preparation Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails
