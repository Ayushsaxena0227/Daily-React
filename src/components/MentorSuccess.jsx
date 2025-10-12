import StudentLayout from "../../common/StudentLayout";
import { Link } from "react-router-dom";
import akshatguptamini from "../../../../../asset/Mentor Insturctor/akshatguptamini.png";
import success from "../../../../../asset/Mentor Insturctor/success.png";
const MentorSuccess = ({ selectedMentorId, onBack, onNext }) => {
  // TODO: will fetch it later from api
  const mentorList = [
    {
      id: 1,
      name: "Akshat Gupta",
      field: "Software Engineering",
      image: akshatguptamini,
      services: [
        "Personalized Learning Paths",
        "Weekly 1:1 Sessions",
        "Interview Prep & Career Guidance",
        "Continuous Performance Tracking",
      ],
    },

    {
      id: 2,
      name: "Kunika Malhotra",
      field: "Software Engineering",
      image: "",
      services: [
        "Frontend Project Help",
        "Doubt Solving Sessions",
        "Mock Interviews",
      ],
    },
    {
      id: 3,
      name: "Vikas Sharma",
      field: "Software Engineering",
      image: "",
      services: ["System Design Guidance", "Resume Reviews", "Leadership Prep"],
    },
  ];

  const mentorDetails = mentorList.find(
    (mentor) => mentor.id === selectedMentorId
  );

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

        {/* Success Message */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <img src={success} alt="" />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              Mentor Selected Successfully!
            </span>
          </div>

          {/* Mentor Info */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-4">
              <img src={akshatguptamini} alt="akshatgupta" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {mentorDetails.name}
              </h3>
              <p className="text-gray-600">{mentorDetails.field}</p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Great choice! Here's what a mentor can help you with:
            </h4>
            <div className="space-y-2">
              {mentorDetails.services.map((service, index) => (
                <div key={index} className="text-gray-700 pl-4">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={onBack}
              className="px-2  text-black border border-blue-600 rounded-3xl hover:bg-blue-50 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={onNext}
              className="px-2 py-1 text-black rounded-3xl border border-blue-600  hover:bg-blue-50 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default MentorSuccess;
