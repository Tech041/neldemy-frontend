import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="Logo" className="" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            LMS platforms are widely used in schools and universities
          
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li className="">
              <a href="#" className="">
                Home
              </a>
            </li>
            <li className="">
              <a href="#" className="">
                About us
              </a>
            </li>{" "}
            <li className="">
              <a href="#" className="">
                Contact us
              </a>
            </li>{" "}
            <li className="">
              <a href="#" className="">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our news letter
          </h2>
          <p className="text-sm text-white/80">
            The latest news,articles and resources sent to your inbox weekly.
          </p>
          <form className="flex  items-center gap-2 pt-4">
            <input
              type="email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
              placeholder="Enter your email "
            />
            <button className="bg-blue-600 w-24 h-9 text-white rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright {new Date().getFullYear()} &copy; Neldemy. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
