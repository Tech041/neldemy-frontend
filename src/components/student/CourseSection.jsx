import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CoureCard from "./CoureCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className=" flex flex-col items-center py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="flex text-center text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories.From coding and
        design to business and wellness, our courses are crafted to deliver
        results
      </p>

      <div className="grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-2 px-4 md:px-0 md:my-16 my-10 ">
        {allCourses.slice(0, 4).map((course, index) => (
          <CoureCard key={index} course={course} />
        ))}
      </div>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
