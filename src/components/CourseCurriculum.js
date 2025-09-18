import "./CourseCurriculum.css"

const CourseCurriculum = () => {
  const curriculumItems = [
    { name: "Java", icon: "☕", color: "#FF6B35" },
    { name: "Selenium", icon: "🌐", color: "#00D4AA" },
    { name: "Cucumber", icon: "🥒", color: "#23D160" },
    { name: "Object Oriented Programming", icon: "🧩", color: "#FF3860" },
    { name: "TestNG", icon: "🔧", color: "#3273DC" },
    { name: "Framework Development", icon: "🏗️", color: "#3273DC" },
    { name: "Agile Methodology", icon: "⚡", color: "#FF9500" },
    { name: "Mock Project", icon: "📋", color: "#FF3860" },
    { name: "Interview Prep", icon: "💼", color: "#00D4AA" },
    { name: "Maven", icon: "📦", color: "#8B5CF6" },
    { name: "GitHub", icon: "🐙", color: "#24292E" },
    { name: "Jenkins", icon: "⚙️", color: "#3273DC" },
    { name: "MySQL", icon: "🗄️", color: "#3273DC" },
    { name: "Postman", icon: "📮", color: "#FF6B35" },
    { name: "Rest Assured", icon: "🔒", color: "#23D160" },
  ]

  return (
    <section className="course-curriculum">
      <div className="curriculum-container">
        <div className="curriculum-header">
          <h2 className="curriculum-title">Course Curriculum</h2>
          <p className="curriculum-subtitle">
            Master the essential technologies and tools used by SDET professionals worldwide
          </p>
        </div>

        <div className="curriculum-grid">
          {curriculumItems.map((item, index) => (
            <div key={index} className="curriculum-card" style={{ "--card-color": item.color }}>
              <div className="curriculum-icon">
                <span className="icon-symbol">{item.icon}</span>
              </div>
              <h3 className="curriculum-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCurriculum
