import { useState } from "react";
import StudentLayout from "../../common/StudentLayout";
import { Link } from "react-router-dom";
import akshatguptamini from "../../../../../asset/Mentor Insturctor/akshatguptamini.png";

const MentorBooking = ({ selectedMentorId, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("2:00pm");

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const mentorDetails = {
    name: "Akshat Gupta",
    field: "Software Engineering",
    image: akshatguptamini,
  };

  const timeSlots = [
    { time: "10:00am", available: true },
    { time: "2:00pm", available: false, selected: true },
    { time: "3:00pm", available: true },
    { time: "6:00pm", available: true },
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    if (onConfirm && selectedDate) {
      onConfirm({
        date: selectedDate,
        time: selectedTime,
      });
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <StudentLayout>
      <div className="p-4 sm:p-6 w-full max-w-5xl mx-auto font-lexend bg-white">
        <div className="text-2xl font-semibold mb-2">Mentor</div>

        <div className="flex items-center text-sm mb-6">
          <Link to="/student/dashboard" className="text-blue-600">
            Dashboard
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="text-blue-600">Mentor</span>
        </div>

        <div className="border border-gray-300 rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-md bg-white">
          <div className="w-full lg:w-[60%] border-r border-gray-500 shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden">
                <img
                  src={mentorDetails.image}
                  alt={mentorDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {mentorDetails.name}
                </h3>
                <p className="text-gray-600 text-sm">{mentorDetails.field}</p>
              </div>
            </div>

            <h4 className="text-lg font-medium text-gray-800 mb-3">
              Select a Date & Time
            </h4>

            <div className=" shadow-lg rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear(currentYear - 1);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                  }}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-md font-semibold text-gray-800">
                  {new Date(currentYear, currentMonth).toLocaleString(
                    "default",
                    {
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </span>
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear(currentYear + 1);
                    } else {
                      setCurrentMonth(currentMonth + 1);
                    }
                  }}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 text-[11px] text-gray-400 text-center mb-1">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div key={day}>{day}</div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-x-[6px] gap-y-[8px]">
                {calendarDays.map((day, index) =>
                  day === null ? (
                    <div key={index} />
                  ) : (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(day)}
                      className={`text-sm w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedDate === day
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {day}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] p-6">
            <div className="text-center mb-5">
              {selectedDate ? (
                <h4 className="text-md font-semibold text-gray-800">
                  {new Date(
                    currentYear,
                    currentMonth,
                    selectedDate
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h4>
              ) : (
                <p className="text-gray-500">Select a date</p>
              )}
            </div>

            <div className="space-y-3 mb-6">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`w-full p-3 rounded-lg border text-sm font-medium transition-colors ${
                    slot.selected && !slot.available
                      ? "bg-gray-600 text-white border-gray-600"
                      : slot.available
                      ? selectedTime === slot.time
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                      : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>

            <div className="text-xs text-gray-500 text-center mb-4">
              You can cancel a session up to <br />
              24 hours before the scheduled time.
            </div>

            <button
              disabled={!selectedDate}
              onClick={handleConfirm}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                selectedDate
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default MentorBooking;
