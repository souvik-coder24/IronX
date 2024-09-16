import logo from '../../assets/images/IronX.png';
import { FaTwitter, FaFacebookF, FaDribbble, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4" data-aos="fade-up">
            <Link to={'/'}><img src={logo} alt="logo" /></Link>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-4">
              <FaTwitter className='w-8 h-8 hover:text-yellow-500 transition-colors duration-300'/>
              <FaFacebookF className='w-8 h-8 hover:text-yellow-500 transition-colors duration-300'/>
              <FaDribbble className='w-8 h-8 hover:text-yellow-500 transition-colors duration-300'/>
              <FaGithub className='w-8 h-8 hover:text-yellow-500 transition-colors duration-300'/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4" data-aos="fade-up">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Github</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="https://github.com">MIT License</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-gray-300 font-semibold block pb-2 text-sm" href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center" data-aos="fade-up">
            <div className="text-sm text-gray-400 font-semibold py-1 flex items-center justify-center">
              Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
              <p className="text-gray-400 hover:text-gray-300">IronX By</p>
              <p className="text-gray-400 hover:text-gray-300">Souvik Das.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
