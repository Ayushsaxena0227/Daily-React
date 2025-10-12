import StudentLayout from "../../common/StudentLayout";
import { Link } from "react-router-dom";
import microsoft_icon from "../../../../../asset/Mentor Insturctor/microsoft_logo.png";
import phone_pe from "../../../../../asset/Mentor Insturctor/phonepe.png";
import linkedin from "../../../../../asset/Mentor Insturctor/linkedin.png";
import dummyMentors from "../../../../../data/mentor-instructor-data";

const MentorCard = ({ mentor }) => {
  return (
    <div className="max-w-sm h-52 rounded overflow-hidden shadow-lg flex items-center font-lexend bg-white border border-gray-300">
      <img
        className="w-48 h-50 mb-11 object-cover"
        src={mentor.image}
        alt={mentor.name}
      />
      <div className="px-6 py-4 flex-1 flex flex-col justify-between h-full">
        <div className="mt-16">
          <div className="font-bold text-xl mb-1 whitespace-nowrap">
            {mentor.name}
          </div>
          <div className="text-gray-700 text-sm whitespace-nowrap">
            Software Engineering
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            {mentor.company === "PhonePe" && (
              <img className="h-6 w-auto" src={phone_pe} alt="PhonePe" />
            )}
            {mentor.company === "Microsoft" && (
              <img
                className="h-9 w-auto"
                src={microsoft_icon}
                alt="Microsoft"
              />
            )}
          </div>
          <div>
            {mentor.linkedin && (
              <img className="h-6 w-6 mb-1" src={linkedin} alt="LinkedIn" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumCongrats = ({ onContinue }) => {
  return (
    <StudentLayout>
      <div className="p-3 sm:p-6 w-full font-lexend bg-white sm:bg-white">
        <div className="text-2xl font-semibold mb-2">Mentor</div>

        <div className="flex items-center text-sm mb-6">
          <Link to="/student/dashboard" className="text-blue-600">
            Dashboard
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="text-blue-600">Mentor</span>
        </div>
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Blurred Content */}
        <div className="absolute inset-0 z-0 blur-sm pointer-events-none">
          <div className="p-3 sm:p-6 w-full font-lexend bg-white">
            <div className="flex flex-wrap justify-start mb-4">
              {dummyMentors.map((mentor) => (
                <div key={mentor.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                  <MentorCard mentor={mentor} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-white rounded-lg p-8 text-center font-lexend shadow-xl">
            <h2 className=" font-lexend text-1xl font-normal mb-4 text-gray-800">
              Congratulations!
            </h2>
            <h3 className="text-xl font-medium mb-6 text-gray-800 leading-6">
              Your Premium Mentorship Access
              <br />
              is now unlocked.
            </h3>
            <p className="text-gray-600 mb-4">
              You're one step closer to transforming your career with the right
              guidance from top industry experts.
            </p>
            <p className="text-gray-600 mb-8">
              Let's get you started by selecting a mentor who will guide you
              through every phase of your journey.
            </p>
            <button
              onClick={onContinue}
              className="w-full bg-blue-700 text-white font-normal py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300"
            >
              Continue to Mentor Selection
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default PremiumCongrats;
