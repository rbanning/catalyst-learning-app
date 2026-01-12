import { AppTheme } from "./app-theme";

export default function AboutAppTheme() {
  return (
    <div className="">
      <h1>Application Theme</h1>
      <div className="text-2xl text-center font-thin">Demonstrates various aspects of the site theme (color, font, standard ui elements)</div>
      <div className="my-12">
        <AppTheme />
      </div>
    </div>
  )
}