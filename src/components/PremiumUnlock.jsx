import StudentLayout from "../../common/StudentLayout";
import microsoft_icon from "../../../../../asset/Mentor Insturctor/microsoft_logo.png";
import phone_pe from "../../../../../asset/Mentor Insturctor/phonepe.png";
import linkedin from "../../../../../asset/Mentor Insturctor/linkedin.png";
import dummyMentors from "../../../../../data/mentor-instructor-data";
import { Link } from "react-router-dom";

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
              <img className="h-6 w-6 mb-1 " src={linkedin} alt="LinkedIn" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumUnlock = ({ onUnlock }) => {
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
            {dummyMentors && dummyMentors.length > 0 ? (
              <div className="flex flex-wrap justify-start mb-4">
                {dummyMentors.map((mentor) => (
                  <div key={mentor.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                    <MentorCard mentor={mentor} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-5 font-bold">
                <p>You haven't mentor assigned yet!</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Overlay */}
        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-white rounded-lg p-8 text-center font-lexend shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Start Your Premium Journey Today
            </h2>

            <p className="text-gray-600 mb-8">Pay Fees and Unlock Success</p>

            <button
              onClick={onUnlock}
              className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-orange-500 transition-all duration-300"
            >
              Unlock Premium
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default PremiumUnlock;
