import Beers from "@/components/beers"
import { Suspense } from "react"
import GridFloor from "@/components/grid-floor"
import MusicPlayer from "@/components/music-player"

export default function BeersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synthwave-dark to-synthwave-darker relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-repeat opacity-20 z-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-lazer text-4xl md:text-5xl mb-8 neon-text-blue text-center">OUR BEERS</h1>
        </div>
        <Beers />
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
