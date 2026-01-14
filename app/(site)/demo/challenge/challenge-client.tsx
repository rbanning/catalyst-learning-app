"use client";

import { useState } from "react";
import {
  faCaretSquareRight,
  faCheckCircle,
  faXmarkCircle,
  faLightbulb,
  faQuestionCircle,
  faUserAlt,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  Challenge,
  ChallengePhaseKey,
  challengePhaseKeyList,
  ChallengePhaseOption,
  ChallengePhaseQuality,
} from "./challenge.types";
import { inlineSwitch, Nullable } from "@/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { challenges } from "./challenge.repo";

export function ProblemSolvingChallenges() {
  const [selectedChallenge, setSelectedChallenge] =
    useState<Nullable<Challenge>>(null);
  const [currentPhase, setCurrentPhase] =
    useState<ChallengePhaseKey>("approach");
  const [responses, setResponses] = useState<
    Partial<Record<ChallengePhaseKey, ChallengePhaseOption>>
  >({});
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option: ChallengePhaseOption) => {
    setResponses({
      ...responses,
      [currentPhase]: option,
    });
    setShowFeedback(true);
  };

  const handleNextPhase = () => {
    const phases = challengePhaseKeyList;
    const currentIndex = phases.indexOf(currentPhase);
    if (currentIndex < phases.length - 1) {
      setCurrentPhase(phases[currentIndex + 1]);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setSelectedChallenge(null);
    setCurrentPhase("approach");
    setResponses({});
    setShowFeedback(false);
  };

  const getQualityIcon = (quality: ChallengePhaseQuality) => {
    return (
      inlineSwitch(
        quality,
        {
          match: "strong",
          result: (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-5 h-5 text-green-600"
            />
          ),
        },
        {
          match: "partial",
          result: (
            <FontAwesomeIcon
              icon={faLightbulb}
              className="w-5 h-5 text-yellow-600"
            />
          ),
        },
        {
          match: "weak",
          result: (
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className="w-5 h-5 text-red-600"
            />
          ),
        }
      ) ?? (
        // default (shouldn't happen)
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="w-5 h-5 text-pink-400"
        />
      )
    );
  };

  const getQualityColor = (quality: ChallengePhaseQuality) => {
    return (
      inlineSwitch(
        quality,
        { match: "strong", result: "border-green-500 bg-green-50" },
        { match: "partial", result: "border-yellow-500 bg-yellow-50" },
        { match: "weak", result: "border-red-500 bg-red-50" }
      ) ??
      // default (shouldn't happen)
      "border-pink-400 bg-pink-50"
    );
  };

  if (!selectedChallenge) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Advanced Problem-Solving Challenges
          </h1>
          <p className="text-gray-600">
            Practice approaching, solving, and framing complex business
            problems. Each challenge tests your ability to think strategically
            and communicate effectively with stakeholders.
          </p>
        </div>

        <div className="grid gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {challenge.title}
                </h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {challenge.level}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{challenge.scenario}</p>
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <FontAwesomeIcon icon={faUserAlt} className="w-4 h-4" />
                <span>Stakeholders: {challenge.stakeholders.join(", ")}</span>
              </div>
              <button
                onClick={() => setSelectedChallenge(challenge)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Challenge{" "}
                <FontAwesomeIcon icon={faCaretSquareRight} className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">
            How to Use These Challenges
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <FontAwesomeIcon
                icon={faStar}
                className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
              />{" "}
              Each challenge has three phases: Approach, Solution, and Framing
            </li>
            <li className="flex gap-2">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
              />{" "}
              Choose your response and receive detailed feedback on your
              problem-solving strategy
            </li>
            <li className="flex gap-2">
              <FontAwesomeIcon
                icon={faUserAlt}
                className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
              />{" "}
              Learn how to communicate effectively with different stakeholder
              groups
            </li>
          </ul>
        </div>
      </div>
    );
  }

  const challenge = selectedChallenge;
  const phaseData = challenge.phases[currentPhase];
  const phases = ["approach", "solution", "framing"];
  const phaseLabels = {
    approach: "Phase 1: Approach the Problem",
    solution: "Phase 2: Develop a Solution",
    framing: "Phase 3: Frame for Stakeholders",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={handleReset}
        className="mb-6 text-blue-600 hover:text-blue-700 font-medium"
      >
        ← Back to Challenges
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {challenge.title}
        </h1>
        <div className="flex gap-3 mb-4">
          {phases.map((phase) => (
            <div
              key={phase}
              className={`flex-1 h-2 rounded-full ${
                phases.indexOf(phase) <= phases.indexOf(currentPhase)
                  ? "bg-blue-600"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-lg font-medium text-blue-600 mb-4">
          {phaseLabels[currentPhase]}
        </p>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{challenge.scenario}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {phaseData.question}
        </h2>
        <div className="space-y-3">
          {phaseData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              disabled={showFeedback}
              className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                showFeedback && responses[currentPhase] === option
                  ? getQualityColor(option.quality)
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              } ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-start gap-3">
                {showFeedback && responses[currentPhase] === option && (
                  <div className="mt-0.5">{getQualityIcon(option.quality)}</div>
                )}
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{option.text}</p>
                  {showFeedback && responses[currentPhase] === option && (
                    <p className="mt-2 text-gray-700">{option.feedback}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div className="flex justify-end">
          {currentPhase === "framing" ? (
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Complete Challenge
            </button>
          ) : (
            <button
              onClick={handleNextPhase}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Next Phase{" "}
              <FontAwesomeIcon icon={faCaretSquareRight} className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
