import data from '../../Data/course.json';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <div className="flex flex-wrap justify-evenly p-4 bg-black">
      {data.map((course, index) => (
        <div
          key={course.id}
          className="relative w-full sm:w-1/2 lg:w-3/3 p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={`${index * 200}`}
        >
          <div className="relative w-full overflow-hidden rounded">
            <img
              src={course.image}
              alt={course.description}
              className="w-full h-full object-cover"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200 + 100}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
              <h3
                className="text-white text-[50px] uppercase font-[Oswald] font-semibold mb-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 200 + 200}`}
              >
                {course.title}
              </h3>
              <p
                className="text-white text-lg w-[70%] mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 200 + 300}`}
              >
                {course.description}
              </p>
              <Link to={'/pricing'}>
              <Button className="button">
                View Courses
              </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Training;
