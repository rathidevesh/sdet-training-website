import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Hero1 from './components/Hero1';
import Course_Module from './components/Course_Module';
import CourseDetails from './components/CourseDetails';
import CourseCurriculum from './components/CourseCurriculum';
import PricingPlans from './components/PricingPlans';
import SuccessStories from './components/SuccessStories';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero1 /></section>
      <section id="about"><About /></section>
      <section id="course-module"><Course_Module /></section>
      <section id="course-details"><CourseDetails /></section>
      <section id="curriculum"><CourseCurriculum /></section>
      <section id="pricing"><PricingPlans /></section>
      <section id="success"><SuccessStories /></section>
      <section id="contact"><ContactUs /></section>
    </>
  );
}

export default App;
