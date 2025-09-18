
import { useState } from "react"
import "./PricingPlans.css"

const PricingPlans = () => {
  const [isPayAllInOne, setIsPayAllInOne] = useState(false)

  const togglePricing = () => {
    setIsPayAllInOne(!isPayAllInOne)
  }

  const pricingData = {
    monthly: {
      bootcamp: {
        price: "$299/month",
        description: "Monthly Payment Plan",
        buttonText: "Start Monthly Plan",
      },
    },
    payAllInOne: {
      bootcamp: {
        price: "Check Price",
        description: "One Time Payment",
        buttonText: "Get a Quote Now",
      },
    },
  }

  const currentPricing = isPayAllInOne ? pricingData.payAllInOne : pricingData.monthly

  return (
    <section className="pricing-plans">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Pricing Plans</h2>
          <p className="pricing-subtitle">Choose the perfect plan that fits your learning journey and career goals</p>
        </div>

        <div className="pricing-toggle">
          <span className={`toggle-label ${!isPayAllInOne ? "active" : ""}`}>Monthly</span>
          <div className="toggle-switch" onClick={togglePricing}>
            <div className={`toggle-slider ${isPayAllInOne ? "active" : ""}`}></div>
          </div>
          <span className={`toggle-label ${isPayAllInOne ? "active" : ""}`}>Pay All in One</span>
        </div>

        <div className="pricing-cards">
          {/* Career Consultation Card */}
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="card-title">Career Consultation</h3>
              <div className="card-price orange">Free</div>
              <p className="card-description">15min Zoom Session</p>
            </div>
            <button className="card-button primary">Book A Slot</button>
            <div className="card-content">
              <p className="card-info">Get personalized career advice from our team on</p>
              <ul className="feature-list orange-bullets">
                <li>Career Selection</li>
                <li>Questions</li>
                <li>Roadblocks</li>
                <li>Market Research</li>
                <li>Resume Writing</li>
              </ul>
            </div>
          </div>

          {/* SDET Bootcamp Card - Main/Popular */}
          <div className={`pricing-card popular ${isPayAllInOne ? "highlighted" : ""}`}>
            <div className="popular-badge">MOST POPULAR</div>
            <div className="card-header">
              <h3 className="card-title">SDET Bootcamp</h3>
              <div className="card-price gradient">{currentPricing.bootcamp.price}</div>
              <p className="card-description">{currentPricing.bootcamp.description}</p>
            </div>
            <button className="card-button secondary">{currentPricing.bootcamp.buttonText}</button>
            <div className="card-content">
              <p className="card-info">All-inclusive package</p>
              <ul className="feature-list green-checks">
                <li>Live Sessions</li>
                <li>Interview Preparation</li>
                <li>Resume Writing</li>
                <li>Mock Interviews</li>
                <li>1-1 Mentorship</li>
              </ul>
            </div>
          </div>

          {/* Support Session Card */}
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="card-title">Support Session</h3>
              <div className="card-price orange">Get Price</div>
              <p className="card-description">Support Session On</p>
            </div>
            <button className="card-button primary">Book A Slot</button>
            <div className="card-content">
              <ul className="feature-list orange-bullets">
                <li>Assistance in Job</li>
                <li>Assistance in Interview</li>
                <li>Job Search Strategies and Tips</li>
                <li>Mentorship</li>
                <li>Mock Interviews</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-footer">
          <p>All plans include 24/7 support and lifetime access to course materials</p>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
