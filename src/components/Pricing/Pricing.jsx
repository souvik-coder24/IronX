import { FaCheckCircle } from 'react-icons/fa';
import { LiaDumbbellSolid } from 'react-icons/lia';
import Button from '../Button/Button';
import styles from './Pricing.module.css';

const pricingOptions = [
  {
    duration: '6 months',
    price: '$30/m',
    description: 'Single class',
    features: [
      'Free riding',
      'Unlimited equipment',
      'Personal trainer',
      'Weight losing classes',
      'Month to month'
    ]
  },
  {
    duration: '12 months',
    price: '$50/m',
    description: 'Single class',
    features: [
      'Free riding',
      'Unlimited equipment',
      'Personal trainer',
      'Weight losing classes',
      'Month to month'
    ]
  },
  {
    duration: '24 months',
    price: '$80/m',
    description: 'Single class',
    features: [
      'Free riding',
      'Unlimited equipment',
      'Personal trainer',
      'Weight losing classes',
      'Month to month'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="bg-black px-4 py-8" style={{ minHeight: '100vh' }}>
      <div className="text-center mb-14">
        <h2
        className={styles.customHeading}
        data-aos="fade-down"
        data-aos-duration="1000"
        >
        Pricing</h2>
      </div>
      <div className="flex flex-wrap -mx-4 justify-center">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full lg:w-1/5 md:w-1/3 px-4 mb-8"
            data-aos="fade-up"
            data-aos-delay={index * 300}
          >
            <div className="bg-black border-2 border-gray-500 rounded-lg shadow-lg p-6">
              <div className="inline-block relative mb-[31px] w-[80px] h-[80px] bg-yellow-500 rounded-full leading-[80px] text-center shadow-lg">
                <LiaDumbbellSolid className="text-6xl mx-auto mt-3 text-white" />
              </div>
              <div>
                <span className="block text-lg font-semibold mb-2 text-white">{option.duration}</span>
                <p className="text-xl mb-4 text-white">
                  {option.price} <span className="text-gray-400">({option.description})</span>
                </p>
                <div className="mb-4">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center mb-2 text-white">
                      <FaCheckCircle className="mr-2 text-green-500" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Button>Join Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
