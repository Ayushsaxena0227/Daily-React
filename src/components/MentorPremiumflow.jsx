import React, { useState } from "react";
import PremiumUnlock from "./PremiumUnlock";
import PremiumCongrats from "./PremiumCongrats";
import StudentMentor from "./StudentMentor";
import MentorSuccess from "./MentorSuccess";
import MentorBooking from "./MentorBooking";

const MentorPremiumFlow = () => {
  const [currentStep, setCurrentStep] = useState("unlock");
  const [selectedMentorId, setSelectedMentorId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleUnlockPremium = () => {
    setCurrentStep("congrats");
  };

  const handleContinueToMentors = () => {
    setCurrentStep("mentors");
  };

  const handleMentorSelection = (mentorId) => {
    setSelectedMentorId(mentorId);
    setCurrentStep("success");
  };

  const handleBackToMentors = () => {
    setCurrentStep("mentors");
  };

  const handleProceedToBooking = () => {
    setCurrentStep("booking");
  };

  const handleBookingConfirm = (details) => {
    setBookingDetails(details);
    // TODO: add api logic
    console.log("Booking confirmed:", details);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "unlock":
        return <PremiumUnlock onUnlock={handleUnlockPremium} />;
      case "congrats":
        return <PremiumCongrats onContinue={handleContinueToMentors} />;
      case "mentors":
        return <StudentMentor onNext={handleMentorSelection} />;
      case "success":
        return (
          <MentorSuccess
            selectedMentorId={selectedMentorId}
            onBack={handleBackToMentors}
            onNext={handleProceedToBooking}
          />
        );
      case "booking":
        return (
          <MentorBooking
            selectedMentorId={selectedMentorId}
            onConfirm={handleBookingConfirm}
          />
        );
      default:
        return <PremiumUnlock onUnlock={handleUnlockPremium} />;
    }
  };

  return <div className="min-h-screen">{renderCurrentStep()}</div>;
};

export default MentorPremiumFlow;
