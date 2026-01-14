# Problem-Solving Challenges Style Guide

## Brand Identity

### Personality
The Problem-Solving Challenges app strikes a balance between **professional credibility** and **approachable learning**. The design should feel:
- **Trustworthy** - Users are developing critical business skills and need confidence in the content
- **Welcoming** - Learning is encouraged, not intimidating; mistakes are part of growth
- **Clear** - Complex concepts are made accessible through thoughtful design
- **Engaging** - Interactive elements draw attention without overwhelming

### Voice & Tone
- **Professional yet conversational** - Write as an experienced mentor, not a textbook
- **Direct and actionable** - Use clear language that respects users' time
- **Encouraging** - Frame feedback constructively, even for weaker responses
- **Inclusive** - Avoid jargon; explain specialized terms when necessary

---

## Color Palette

### Primary Colors
- **Primary Blue**: `#2563eb` (blue-600)
  - Use for: Primary CTAs, active states, progress indicators
  - Purpose: Draws attention to key actions and progress
  
- **Primary Blue Hover**: `#1d4ed8` (blue-700)
  - Use for: Hover states on primary buttons
  
- **Light Blue**: `#dbeafe` (blue-100)
  - Use for: Badges, subtle highlights
  
- **Pale Blue**: `#eff6ff` (blue-50)
  - Use for: Hover states, subtle backgrounds

### Feedback Colors
- **Success Green**: `#16a34a` (green-600)
  - Use for: Strong/correct responses, completion states
  - Hover: `#15803d` (green-700)
  
- **Warning Yellow**: `#ca8a04` (yellow-600)
  - Use for: Partial/acceptable responses, learning opportunities
  
- **Error Red**: `#dc2626` (red-600)
  - Use for: Weak responses (used sparingly, not for punishment)

### Feedback Backgrounds
- **Success Background**: `#f0fdf4` (green-50) with `#22c55e` (green-500) border
- **Warning Background**: `#fefce8` (yellow-50) with `#eab308` (yellow-500) border
- **Error Background**: `#fef2f2` (red-50) with `#ef4444` (red-500) border

### Neutral Colors
- **Text Primary**: `#111827` (gray-900) - Main content, headings
- **Text Secondary**: `#4b5563` (gray-600) - Supporting text, descriptions
- **Text Tertiary**: `#6b7280` (gray-700) - Additional details
- **Border**: `#e5e7eb` (gray-200) - Dividers, card outlines
- **Background Subtle**: `#f9fafb` (gray-50) - Section backgrounds, info boxes
- **White**: `#ffffff` - Primary background

### Color Usage Guidelines
- Maintain WCAG Level A contrast ratios (minimum 3:1 for large text, 4.5:1 for normal text)
- Never rely on color alone to convey meaning; always pair with icons or text
- Use feedback colors consistently: green = strong, yellow = partial, red = weak

---

## Typography

### Font Family
- **Primary**: System font stack for optimal performance and readability
  - `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Type Scale

#### Headings
- **H1 (Page Title)**: 
  - Size: `1.875rem` (30px) / `text-3xl`
  - Weight: `700` (Bold) / `font-bold`
  - Color: `gray-900`
  - Use: Main page heading only

- **H2 (Section Title)**:
  - Size: `1.5rem` (24px) / `text-2xl`
  - Weight: `700` (Bold) / `font-bold`
  - Color: `gray-900`
  - Use: Challenge titles in detail view

- **H3 (Component Heading)**:
  - Size: `1.25rem` (20px) / `text-xl`
  - Weight: `600` (Semibold) / `font-semibold`
  - Color: `gray-900`
  - Use: Phase questions, card titles

- **H4 (Subsection)**:
  - Size: `1.125rem` (18px) / `text-lg`
  - Weight: `500` (Medium) / `font-medium`
  - Color: `blue-600`
  - Use: Phase labels, status indicators

#### Body Text
- **Base**: 
  - Size: `1rem` (16px) / `text-base`
  - Weight: `400` (Regular)
  - Line height: `1.5`
  - Color: `gray-700`

- **Small**:
  - Size: `0.875rem` (14px) / `text-sm`
  - Weight: `400` (Regular)
  - Color: `gray-600`
  - Use: Metadata, supplementary info

- **Emphasis**:
  - Weight: `500` (Medium) / `font-medium`
  - Use: Button text, emphasized phrases

- **Strong Emphasis**:
  - Weight: `600` (Semibold) / `font-semibold`
  - Use: Very important content (use sparingly)

### Typography Guidelines
- Maintain consistent hierarchy: never skip heading levels
- Keep line length between 50-75 characters for optimal readability
- Use adequate spacing between paragraphs (`mb-3` to `mb-4`)
- Avoid all-caps for long text; use for short labels only if needed

---

## Layout & Spacing

### Container
- **Max Width**: `56rem` (896px) / `max-w-4xl`
- **Padding**: `1.5rem` (24px) / `p-6`
- **Centered**: `mx-auto`

### Spacing Scale
The app uses Tailwind's spacing scale. Common values:
- **2xs**: `0.5rem` (8px) / `2` - Tight spacing within components
- **xs**: `0.75rem` (12px) / `3` - Default gap between related elements
- **sm**: `1rem` (16px) / `4` - Standard component padding
- **md**: `1.5rem` (24px) / `6` - Section padding, card spacing
- **lg**: `2rem` (32px) / `8` - Major section breaks

### Grid & Layout Patterns
- **Card Grid**: `grid gap-6` - Consistent spacing between challenge cards
- **Flex Rows**: `flex gap-2` or `flex gap-3` - For inline elements (icons + text)
- **Vertical Spacing**: Use margin-bottom (`mb-*`) for consistent vertical rhythm

### Spacing Guidelines
- Maintain consistent spacing within components (use multiples of 4px/8px)
- Increase spacing between unrelated sections
- Ensure adequate touch targets (minimum 44x44px for interactive elements)

---

## UI Components

### Buttons

#### Primary Button
```css
px-4 py-2 bg-blue-600 text-white rounded-lg 
hover:bg-blue-700 transition-colors font-medium
```
- Use for: Main actions, starting challenges, progressing forward
- Includes icon when appropriate (e.g., ChevronRight)

#### Primary Large Button
```css
px-6 py-3 bg-blue-600 text-white rounded-lg 
hover:bg-blue-700 transition-colors font-medium
```
- Use for: Major CTAs like "Next Phase" or "Complete Challenge"

#### Success Button
```css
px-6 py-3 bg-green-600 text-white rounded-lg 
hover:bg-green-700 transition-colors font-medium
```
- Use for: Final completion actions

#### Text Button
```css
text-blue-600 hover:text-blue-700 font-medium
```
- Use for: Secondary actions like "Back to Challenges"

#### Button States
- **Default**: Clear, distinct from background
- **Hover**: Slightly darker shade with smooth transition
- **Disabled**: Lower opacity, `cursor-default`, no hover effect
- **Active**: Visual feedback on click

### Cards

#### Challenge Card
```css
border border-gray-200 rounded-lg p-6 
hover:shadow-lg transition-shadow
```
- Includes: Title, level badge, description, stakeholder info, CTA button
- Hover effect: Elevated shadow for interactivity cue

#### Information Card
```css
p-4 bg-gray-50 rounded-lg
```
- Use for: Scenario descriptions, help sections
- Maintains subtle contrast from main background

#### Feedback Card (Dynamic)
```css
border-2 rounded-lg p-4
[quality-specific colors]
```
- Border and background colors change based on quality level
- Includes quality icon aligned with content

### Badges

#### Level Badge
```css
px-3 py-1 bg-blue-100 text-blue-700 
rounded-full text-sm font-medium
```
- Use for: Difficulty levels, status indicators
- Colors adapt to context (blue for levels, green for completion, etc.)

### Icons
- **Library**: Lucide React
- **Size**: Typically `w-4 h-4` or `w-5 h-5`
- **Color**: Matches adjacent text or uses semantic colors
- **Common Icons**:
  - `ChevronRight` - Forward navigation
  - `CheckCircle` - Success/strong responses
  - `XCircle` - Weak responses
  - `Lightbulb` - Partial responses, tips
  - `Users` - Stakeholder information
  - `Target` - Goals, objectives

### Progress Indicators

#### Phase Progress Bar
```css
flex gap-3
Individual bars: flex-1 h-2 rounded-full
Active: bg-blue-600
Inactive: bg-gray-200
```
- Three-segment horizontal bar
- Shows current phase visually
- Smooth transitions between phases

### Interactive Elements

#### Option Buttons
- Full-width, text-aligned left
- Default: `border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50`
- Selected: Quality-specific border and background
- Includes feedback text that appears below option after selection
- Disabled state prevents re-selection

### Lists
- Unordered lists use `space-y-2` for vertical spacing
- Icon-text combinations use `flex gap-2` with icon at `mt-0.5` for alignment
- Icons are `flex-shrink-0` to prevent compression

---

## Interactions & Animations

### Transitions
- **Standard**: `transition-colors` - 150ms ease
- **Shadow**: `transition-shadow` - 150ms ease
- **Combined**: `transition-all` - Use sparingly, only when multiple properties change

### Hover States
- Buttons: Darken by one shade
- Cards: Add shadow elevation
- Text links: Darken color slightly
- Interactive options: Border color change + subtle background tint

### Active States
- Provide immediate visual feedback
- Maintain accessibility (don't rely only on subtle color changes)

### Animation Guidelines
- Keep animations subtle and purposeful
- Maintain 60fps performance
- Avoid animations that could trigger motion sensitivity
- Provide reduced-motion alternatives when using complex animations

---

## Accessibility Standards

### WCAG Level A Compliance

#### Color & Contrast
- Minimum contrast ratio of 3:1 for large text (18pt+)
- Minimum contrast ratio of 4.5:1 for normal text
- Never use color as the only means of conveying information
- Pair feedback colors with icons and descriptive text

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Maintain logical tab order
- Provide visible focus indicators
- Support standard keyboard shortcuts where applicable

#### Screen Readers
- Use semantic HTML elements (buttons, headings, etc.)
- Provide meaningful alt text for icons when they convey information
- Ensure proper heading hierarchy
- Label form elements and interactive components

#### Touch Targets
- Minimum size of 44x44 CSS pixels for interactive elements
- Adequate spacing between adjacent touch targets
- Buttons use `px-4 py-2` minimum for comfortable tapping

#### Content Accessibility
- Write in clear, plain language
- Break complex content into digestible chunks
- Provide context for feedback and responses
- Use progressive disclosure to avoid overwhelming users

### Testing Checklist
- [ ] Test with keyboard navigation only
- [ ] Verify color contrast ratios
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators are visible
- [ ] Check touch target sizes on mobile devices
- [ ] Validate semantic HTML structure

---

## Responsive Design

### Breakpoints
The app uses a mobile-first approach with Tailwind's default breakpoints:
- **Mobile**: `< 640px` (base styles)
- **Tablet**: `≥ 640px` (sm:)
- **Desktop**: `≥ 1024px` (lg:)

### Current Implementation
- Container max-width constrains content on large screens
- Padding adjusts for comfortable viewing on all devices
- Cards stack vertically on mobile, can be grid on larger screens
- Touch targets sized appropriately for mobile interaction

### Responsive Guidelines
- Design mobile-first, enhance for larger screens
- Maintain readability at all viewport sizes
- Ensure interactive elements are appropriately sized for touch
- Test on actual devices, not just browser responsive mode

---

## Content Guidelines

### Writing Principles
1. **Clarity over cleverness** - Users are here to learn, not decode
2. **Action-oriented** - Use verbs, be direct
3. **Empowering** - Build confidence, even when correcting
4. **Contextual** - Explain the "why" behind feedback

### Feedback Writing
- **Strong responses**: Affirm and explain why the approach works
- **Partial responses**: Acknowledge what's good, explain what's missing
- **Weak responses**: Explain why it doesn't work, guide toward better approaches
- Always end with actionable insight or learning point

### UI Copy
- Button text: Start with action verbs (Start, Continue, Complete)
- Labels: Be specific and descriptive
- Error messages: Explain what happened and how to fix it
- Help text: Provide context without overwhelming

---

## Implementation Notes

### Technology Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS utility classes
- **Icons**: Lucide React
- **State Management**: React hooks (useState)

### File Organization
```
/components
  ProblemSolvingChallenges.tsx  (main component)
/types
  types.ts  (TypeScript interfaces)
/styles
  (Tailwind configuration)
```

### Code Conventions
- Use TypeScript for type safety
- Follow React best practices (hooks, functional components)
- Keep components focused and reusable
- Use semantic HTML elements
- Maintain consistent naming (camelCase for variables, PascalCase for components)

---

## Design Principles Summary

1. **Professional yet Approachable** - Serious content delivered in a welcoming way
2. **Clear Visual Hierarchy** - Users should immediately understand what to focus on
3. **Consistent Feedback** - Color-coded responses paired with icons and detailed text
4. **Progressive Disclosure** - Show information when needed, don't overwhelm
5. **Accessible by Default** - Design for all users from the start
6. **Performance Matters** - Smooth interactions, no jank
7. **Mobile-Friendly** - Touch targets, readable text, efficient layouts

---

## Future Considerations

### Potential Enhancements
- Dark mode support (maintain contrast ratios)
- Animation for phase transitions
- Celebration animations for challenge completion
- Progress tracking across sessions
- Customizable difficulty levels
- Expanded color palette for additional challenge types

### Extensibility
- Component library structure for reusability
- Theme variables for easy customization
- Accessibility testing suite integration
- Multi-language support considerations

---

*Last Updated: January 2026*  
*Version: 1.0*