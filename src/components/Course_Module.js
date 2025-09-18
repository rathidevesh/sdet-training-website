
import { useState } from "react"
import "./CourseModules.css"
import Img1 from "./images/Img1.jpg"
import Img2 from "./images/Img2.jpg"
import Img3 from "./images/Img3.jpg"
import Img4 from "./images/Img4.jpg"
import Img5 from "./images/Img5.jpg"
import Img6 from "./images/Img6.jpg"

const CourseModules = () => {
  const [selectedLevel, setSelectedLevel] = useState("All Levels")

  const courses = [
    {
      id: 1,
      title: "Selenium WebDriver Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      description: "Master the basics of Selenium WebDriver for web automation testing",
      features: ["Element locators", "WebDriver commands", "Browser automation", "Basic test scripts"],
      image: Img1,
    },
    {
      id: 2,
      title: "Advanced Test Automation",
      level: "Advanced",
      duration: "6 weeks",
      description: "Build robust automation frameworks with advanced testing patterns",
      features: ["Page Object Model", "Data-driven testing", "Parallel execution", "CI/CD integration"],
      image: Img2,
    },
    {
      id: 3,
      title: "API Testing Mastery",
      level: "Intermediate",
      duration: "5 weeks",
      description: "Comprehensive API testing with REST, GraphQL, and automation tools",
      features: ["REST API testing", "Postman automation", "JSON validation", "Performance testing"],
      image: Img3,
    },
    {
      id: 4,
      title: "Mobile Test Automation",
      level: "Intermediate",
      duration: "5 weeks",
      description: "Native and hybrid mobile app testing with Appium and modern tools",
      features: ["Appium setup", "iOS/Android testing", "Mobile gestures", "Device cloud testing"],
      image: Img4,
    },
    {
      id: 5,
      title: "Performance Testing",
      level: "Advanced",
      duration: "4 weeks",
      description: "Load testing, stress testing, and performance optimization strategies",
      features: ["JMeter mastery", "Load scenarios", "Performance metrics", "Bottleneck analysis"],
      image: Img5,
    },
    {
      id: 6,
      title: "Test Framework Design",
      level: "Advanced",
      duration: "8 weeks",
      description: "Build scalable, maintainable test automation frameworks from scratch",
      features: ["Framework architecture", "Custom utilities", "Reporting systems", "Maintenance strategies"],
      image: Img6,
    },
  ]

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses =
    selectedLevel === "All Levels" ? courses : courses.filter((course) => course.level === selectedLevel)

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "beginner"
      case "Intermediate":
        return "intermediate"
      case "Advanced":
        return "advanced"
      default:
        return "beginner"
    }
  }

  return (
    <section className="course-modules">
      <div className="course-modules-container">
        <h2 className="course-modules-title">Course Modules</h2>
        <p className="course-modules-subtitle">
          Choose from our comprehensive range of SDET courses designed to take you from beginner to expert
        </p>

        <div className="filter-section">
          <div className="filter-tabs">
            {levels.map((level) => (
              <button
                key={level}
                className={`filter-tab ${selectedLevel === level ? "active" : ""}`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image || "/placeholder.svg"} alt={course.title} />
                <div className={`level-badge ${getLevelColor(course.level)}`}>{course.level}</div>
                <div className="duration-badge">
                  <span className="clock-icon">🕒</span>
                  {course.duration}
                </div>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>

                <ul className="course-features">
                  {course.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="enroll-button">
                  Enroll Now
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseModules
