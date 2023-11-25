import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, mein Name ist</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nermin Vejzovic
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Ich bin ein Full-Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Ich bin ein Full-Stack Developer der mit aktuellen Technologien wie React.js, TypeScript und Tailwind CSS ein Responsive Frontend bauen kann. Oder auch mit ein backend mit Java, Node.js oder Ruby on Rails.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Projekte sehen
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
