import { Challenge } from "./challenge.types";

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Declining Team Productivity",
    level: "Intermediate",
    scenario:
      "Your team's output has dropped 30% over the past quarter. Morale seems low, and two key members have mentioned feeling overwhelmed. Leadership wants a solution by next week.",
    stakeholders: ["Team members", "Direct manager", "Senior leadership", "HR"],
    phases: {
      approach: {
        question: "How would you approach understanding this problem?",
        options: [
          {
            text: "Immediately survey the team to gather data",
            quality: "partial",
            feedback:
              "Good instinct to gather data, but this approach might miss deeper systemic issues and doesn't prioritize which data matters most.",
          },
          {
            text: "Schedule 1-on-1s with team members, analyze workflow metrics, and identify bottlenecks",
            quality: "strong",
            feedback:
              "Excellent! You're combining qualitative and quantitative data while taking time to understand root causes.",
          },
          {
            text: "Research best practices from other companies and implement them",
            quality: "weak",
            feedback:
              "This skips the crucial diagnosis phase. Every team's challenges are unique—solutions must fit your specific context.",
          },
          {
            text: "Review recent project timelines and identify where delays occurred",
            quality: "partial",
            feedback:
              "You're looking at symptoms, which is useful, but this doesn't help you understand the 'why' behind the delays.",
          },
        ],
      },
      solution: {
        question:
          "Based on your investigation, you find: unclear priorities, overlapping responsibilities, and inadequate tools. What's your solution?",
        options: [
          {
            text: "Propose a complete team restructure with new roles",
            quality: "weak",
            feedback:
              "This is too drastic and disruptive. It doesn't address the specific issues identified and could worsen morale.",
          },
          {
            text: "Create a priority framework, define clear ownership using a RACI matrix, and pilot new collaboration tools",
            quality: "strong",
            feedback:
              "Excellent! You're addressing each root cause with proportional, testable solutions. The pilot approach reduces risk.",
          },
          {
            text: "Hire additional team members to reduce workload",
            quality: "partial",
            feedback:
              "This might help with capacity but doesn't fix the systemic issues around priorities and ownership. Plus, new hires take time to onboard.",
          },
          {
            text: "Implement daily stand-ups and weekly reviews",
            quality: "partial",
            feedback:
              "More meetings might help coordination but could worsen overwhelm if the root issues aren't addressed first.",
          },
        ],
      },
      framing: {
        question:
          "How would you present this to senior leadership to get buy-in?",
        options: [
          {
            text: "Focus on the team's feelings and stress levels",
            quality: "weak",
            feedback:
              "While empathy matters, leadership needs to see business impact. Lead with outcomes, support with human elements.",
          },
          {
            text: "Start with the 30% productivity drop, show root causes with data, present phased solution with ROI projections, and request specific resources",
            quality: "strong",
            feedback:
              "Perfect! You're speaking their language: business impact, evidence-based diagnosis, clear solution, and measurable outcomes.",
          },
          {
            text: "Present the detailed findings from all your 1-on-1 conversations",
            quality: "partial",
            feedback:
              "Too much detail can lose your audience. Synthesize insights into key themes and lead with the most compelling evidence.",
          },
          {
            text: "Propose the solution immediately and ask for approval",
            quality: "weak",
            feedback:
              "Without context on the problem's business impact and your diagnostic process, leadership can't evaluate if this is the right solution.",
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Market Entry Decision",
    level: "Advanced",
    scenario:
      "Your company is considering entering a new geographic market. Initial research looks promising, but it would require significant investment. The executive team is divided on whether to proceed.",
    stakeholders: [
      "CEO",
      "CFO",
      "Sales VP",
      "Product team",
      "Board of directors",
    ],
    phases: {
      approach: {
        question: "How would you structure your analysis of this opportunity?",
        options: [
          {
            text: "Build a financial model with revenue projections and break-even analysis",
            quality: "partial",
            feedback:
              "Financial modeling is important, but starting here assumes market viability. You need strategic context first.",
          },
          {
            text: "Conduct competitor analysis, assess regulatory requirements, validate customer demand, then model financials and risks",
            quality: "strong",
            feedback:
              "Excellent framework! You're addressing strategic feasibility before diving into financial modeling, ensuring you're solving the right problem.",
          },
          {
            text: "Survey potential customers in the new market",
            quality: "partial",
            feedback:
              "Customer input is valuable, but without understanding competitive dynamics and barriers to entry, you can't properly evaluate the opportunity.",
          },
          {
            text: "Visit the market and meet with potential partners",
            quality: "weak",
            feedback:
              "This is jumping to tactics before establishing an analytical framework. You might waste time and money exploring the wrong aspects.",
          },
        ],
      },
      solution: {
        question:
          "Your analysis shows strong demand but high regulatory hurdles and entrenched competitors. What do you recommend?",
        options: [
          {
            text: "Recommend not entering the market due to the risks",
            quality: "weak",
            feedback:
              "You're avoiding risk rather than managing it. Strong demand deserves a creative solution, not a binary yes/no.",
          },
          {
            text: "Propose a phased entry: partner with a local firm for Year 1 to navigate regulations, assess performance, then decide on full investment",
            quality: "strong",
            feedback:
              "Brilliant! You're creating optionality, reducing risk, and gaining market intelligence before full commitment. This addresses concerns from all stakeholders.",
          },
          {
            text: "Recommend full investment but with a large budget for regulatory compliance",
            quality: "partial",
            feedback:
              "This is bold but doesn't address competitive risks or provide an off-ramp if early indicators are negative. Too much risk for the learning gained.",
          },
          {
            text: "Suggest acquiring a local competitor to bypass entry barriers",
            quality: "partial",
            feedback:
              "Creative, but acquisition comes with integration risks and likely much higher costs. Consider this as a Phase 2 option after validation.",
          },
        ],
      },
      framing: {
        question:
          "The CFO is risk-averse while the Sales VP is eager to expand. How do you present your phased approach?",
        options: [
          {
            text: "Present to each stakeholder separately with messaging tailored to their concerns",
            quality: "partial",
            feedback:
              "Individual alignment is useful, but presenting separately can create inconsistency and the appearance of manipulation. Bring stakeholders together around shared data.",
          },
          {
            text: "Lead with the market opportunity size, acknowledge risks explicitly, show how the phased approach caps downside while preserving upside, and include clear success metrics for each phase",
            quality: "strong",
            feedback:
              "Exceptional! You're addressing both perspectives within one coherent narrative, using data to bridge different priorities and creating objective decision points.",
          },
          {
            text: "Focus on the financial upside to win over the CFO",
            quality: "weak",
            feedback:
              "The CFO's role is to balance opportunity with risk. Ignoring their risk concerns or trying to 'sell' them will backfire. Address concerns directly.",
          },
          {
            text: "Create two options: full entry or no entry, and let leadership decide",
            quality: "weak",
            feedback:
              "You're abdicating your responsibility to synthesize analysis into a recommendation. Leadership hired you for judgment, not just data presentation.",
          },
        ],
      },
    },
  },
  {
    id: 3,
    title: "Technology Platform Migration",
    level: "Advanced",
    scenario:
      "Your company's core platform is outdated, causing frequent outages and limiting new features. Migration would take 18 months and cost $5M, during which new feature development would slow significantly.",
    stakeholders: [
      "CTO",
      "Engineering team",
      "Product team",
      "Customer success",
      "Customers",
    ],
    phases: {
      approach: {
        question:
          "How do you frame this problem to understand whether migration is the right path?",
        options: [
          {
            text: "Calculate the cost of current outages vs. migration cost",
            quality: "partial",
            feedback:
              "Good quantitative thinking, but this frames it purely as a cost problem. What about strategic opportunities unlocked by a modern platform?",
          },
          {
            text: "Assess current platform constraints, quantify business impact (outage costs, lost opportunities, competitive risk), evaluate alternatives (incremental upgrades, partial migration, full migration), and map to strategic priorities",
            quality: "strong",
            feedback:
              "Outstanding! You're treating this as a strategic decision, not just a technical one. You're also considering multiple solutions, not assuming migration is the answer.",
          },
          {
            text: "Survey the engineering team about pain points with current platform",
            quality: "weak",
            feedback:
              "Engineering input is important, but technical pain doesn't always correlate with business priorities. You need to connect technical constraints to business impact.",
          },
          {
            text: "Benchmark against industry standards for platform age",
            quality: "weak",
            feedback:
              "What others do isn't necessarily right for your business. Focus on your specific constraints and strategy rather than following trends.",
          },
        ],
      },
      solution: {
        question:
          "Your analysis shows the platform limits competitive positioning and costs $2M/year in outages. What approach do you recommend?",
        options: [
          {
            text: "Full migration with a hard stop on new features for 18 months",
            quality: "weak",
            feedback:
              "This creates a dangerous gap where you can't respond to market changes. You need to maintain some feature development capacity.",
          },
          {
            text: "Strangler fig pattern: incrementally migrate while maintaining feature development, starting with most problematic components",
            quality: "strong",
            feedback:
              "Excellent strategy! You're reducing risk, maintaining business continuity, and creating flexibility to adjust based on learnings. This balances multiple stakeholder needs.",
          },
          {
            text: "Outsource the migration to a consulting firm",
            quality: "partial",
            feedback:
              "This doesn't address the strategic question of 'how to migrate' and may result in a platform your team can't maintain. Outsourcing can help with execution, not strategy.",
          },
          {
            text: "Allocate budget for patching the current platform instead",
            quality: "weak",
            feedback:
              "This is 'kicking the can down the road.' If the platform fundamentally limits competitiveness, patches are just expensive band-aids.",
          },
        ],
      },
      framing: {
        question:
          "Product teams are worried about losing feature velocity. How do you present this to get their buy-in?",
        options: [
          {
            text: "Emphasize that short-term pain leads to long-term gain",
            quality: "weak",
            feedback:
              "This platitude doesn't address their specific concerns. Show them how you've designed the approach to minimize their pain.",
          },
          {
            text: "Show how current platform limits their vision, demonstrate that incremental migration maintains 60% feature capacity, create a roadmap that prioritizes features they care about during migration, and show the velocity increase post-migration",
            quality: "strong",
            feedback:
              "Perfect! You're acknowledging their concerns, showing you've designed around them, and connecting the migration to their goals. You're making them partners, not victims.",
          },
          {
            text: "Explain that this is a technical necessity and their concerns are secondary",
            quality: "weak",
            feedback:
              "This creates adversaries instead of allies. Product teams are critical stakeholders—their engagement will make or break the migration.",
          },
          {
            text: "Promise to hire more engineers so feature development won't slow",
            quality: "partial",
            feedback:
              "New engineers take time to onboard and won't solve the underlying platform constraints. This sounds like an empty promise that will erode trust.",
          },
        ],
      },
    },
  },
];
