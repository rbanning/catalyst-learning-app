import { AySection } from "@/ui/base-ui/server";
import { ProblemSolvingChallenges } from "./challenge-client";

export default function DemoChallengePage() {
  return (
    <>
    <AySection color="primary" opacity="minimal" verticalPadding="lg">
      <h1 className="no-margin">Demo Challenge</h1>
      <div className="prose-xl text-center max-w-2xl mx-auto">
        This <em>challenge</em> was developed from the 
        initial code created by <a href="https://claude.ai" target="_blank" className="primary">Claude</a>,
        and has been refactored so the challenge content is separate from the display component.
      </div>
    </AySection>
    <AySection color="surface" verticalPadding="md">
      <ProblemSolvingChallenges />
    </AySection>
    </>
  )
}