import { useEffect, useRef, useState } from "react"
import  AboutImg from "./About_img.png"
import  "./About.css"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: "⚡",
      title: "Industry-Relevant Curriculum",
      description:
        "Learn the exact skills and tools used by SDET professionals at companies like Google, Microsoft, and Amazon.",
    },
    {
      icon: "</>",
      title: "Hands-On Projects",
      description: "Build real automation frameworks and testing solutions that you can showcase in your portfolio.",
    },
    {
      icon: "👤",
      title: "Expert Mentorship",
      description: "Learn from experienced SDET professionals who provide personalized guidance and career advice.",
    },
    {
      icon: "🏆",
      title: "Job Placement Support",
      description:
        "85% job placement rate with dedicated career support, interview preparation, and industry connections.",
    },
  ]

  const codeLines = [
    'const { test, expect } = require("@playwright/test");',
    "",
    'test("User Login Flow", async ({ page }) => {',
    '  await page.goto("https://example.com/login");',
    '  await page.fill("#email", "user@test.com");',
    '  await page.fill("#password", "password123");',
    '  await page.click("button[type=submit]");',
    '  await expect(page).toHaveURL("/dashboard");',
    "});",
  ]

  return (
    <section ref={sectionRef} className={`about-section ${isVisible ? "visible" : ""}`}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Why Choose Our SDET Program?</h2>
          <p className="about-description">
            Our comprehensive program is designed by industry experts to provide hands-on experience with the latest
            testing tools and methodologies used by top tech companies.
          </p>
        </div>

        <div className="about-content">
          {/* <div className="laptop-mockup">
            <div className="laptop-screen">
              <div className="code-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="file-name">test-automation.js</span>
              </div>
              <div className="code-content">
                {codeLines.map((line, index) => (
                  <div key={index} className="code-line">
                    <span className="line-number">{line ? index + 1 : ""}</span>
                    <span className="code-text">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <img src={AboutImg} alt="About Us" className="about-image" />

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
