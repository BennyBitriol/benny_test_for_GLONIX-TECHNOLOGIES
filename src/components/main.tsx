import CourseCarousel from "./CourseCarousel";
import CourseCarouselTwo from "./CourseCarouselTwo";
import CourseLandingPage from "./CourseLandingPage";
import Dashboard from "./Dashboard";
import QuestionForm from "./QuestionForm";
import StudyAreaCards from "./StudyCards";

const main: React.FC = () => {
  return (
    <>
      <CourseLandingPage />
      <StudyAreaCards />
      <CourseCarousel />
      <CourseCarouselTwo />
      <Dashboard />
      <QuestionForm />
    </>
  );
};

export default main;
