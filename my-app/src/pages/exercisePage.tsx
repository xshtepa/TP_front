import { Header } from "../components/layout/header"
import { StatsCard } from "../components/exercise/statsCard"
import { ExerciseControls } from "../components/exercise/exerciseControls"
import { ProgressBar } from "../components/exercise/ProgressBar"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      <div className="max-w-sm mx-auto px-4 py-6 pt-20">
        {Header()}
        <div className="flex-1 flex flex-col justify-center items-center">
            {StatsCard()}
            {ExerciseControls()}
            {ProgressBar()}
        </div>
      </div>
    </div>
  )
}
