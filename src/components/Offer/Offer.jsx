import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import data from '../../Data/offer.json';
import Button from '../Button/Button';
import styles from './Offer.module.css';

const Offer = () => {
  return (
    <div className="p-4 bg-black">
      <h1
        className={styles.customHeading}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        What We Offer
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((offer, index) => (
          <div
            key={offer.id}
            className="flex flex-col items-center p-4 rounded-lg w-full sm:w-[420px] cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-[362px] h-[300px] object-cover mr-4 rounded-lg"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200 + 100}`}
            />
            <div className="text-white text-center">
              <h2
                className="text-4xl mt-2 mb-3 font-[Oswald] uppercase font-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 200 + 200}`}
              >
                {offer.title}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 200 + 300}`}
              >
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-12">
        <Link to={'/search'}>
        <Button>
          Explore Exercise
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Offer;
