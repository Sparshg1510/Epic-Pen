import Sidebar from "../components/Sidebar"
import Canvas from "../components/Canvas"

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <Sidebar />
      <div className="flex-1">
        <Canvas />
      </div>
    </div>
  )
}