import Hero from "@/components/hero"
import { Suspense } from "react"
import GridFloor from "@/components/grid-floor"
import MusicPlayer from "@/components/music-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synthwave-dark to-synthwave-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-repeat opacity-20 z-0"></div>
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Wrap potentially problematic components in Suspense */}
      <Suspense fallback={null}>
        <GridFloor />
      </Suspense>

      <Suspense fallback={null}>
        <MusicPlayer />
      </Suspense>
    </main>
  )
}
