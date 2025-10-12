import { useState } from "react";
import StudentLayout from "../../common/StudentLayout";
import microsoft_icon from "../../../../../asset/Mentor Insturctor/microsoft_logo.png";
import phone_pe from "../../../../../asset/Mentor Insturctor/phonepe.png";
import linkedin from "../../../../../asset/Mentor Insturctor/linkedin.png";
import dummyMentors from "../../../../../data/mentor-instructor-data";
import { Link } from "react-router-dom";

const MentorCard = ({ mentor, isSelected, onSelect }) => {
  return (
    <div
      className={`max-w-sm h-52 rounded overflow-hidden shadow-lg flex items-center font-lexend bg-white border cursor-pointer ${
        isSelected ? "border-blue-500 border-2" : "border-gray-300"
      }`}
      onClick={() => onSelect(mentor.id)}
    >
      <img
        className="w-40 h-40 ml-4 object-cover rounded-xl"
        src={mentor.image}
        alt={mentor.name}
      />

      <div className="px-6 py-4 flex-1 flex flex-col justify-between h-full">
        <div className="">
          <div className="font-bold text-xl mb-1 whitespace-nowrap">
            {mentor.name}
          </div>
          <div className="text-gray-700 text-sm whitespace-nowrap mt-4">
            Software Engineering
          </div>
          <div className="text-gray-700 text-sm whitespace-nowrap mt-4">
            {mentor.years}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            {mentor.company === "PhonePe" && (
              <img className="h-6 w-auto" src={phone_pe} alt="PhonePe" />
            )}
            {mentor.company === "Microsoft" && (
              <img
                className="h-10 w-auto"
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

const StudentMentor = ({ onNext }) => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorSelect = (mentorId) => {
    setSelectedMentor(mentorId);
  };

  const handleNext = () => {
    if (selectedMentor && onNext) {
      onNext(selectedMentor);
    }
  };

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

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {dummyMentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              isSelected={selectedMentor === mentor.id}
              onSelect={handleMentorSelect}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!selectedMentor}
            className={`px-3 py-1 rounded-3xl font-medium transition-colors ${
              selectedMentor
                ? " text-black border border-blue-600  cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentMentor;
