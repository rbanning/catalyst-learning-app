import { AppTheme } from "./app-theme";

export default function AboutAppTheme() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Application Theme</h1>
      <blockquote>Demonstrates various aspects of the site theme (color, font, standard ui elements)</blockquote>
      <div className="my-12">
        <AppTheme />
      </div>
    </div>
  )
}