import { Suspense } from "react"
import GridFloor from "@/components/grid-floor"
import MusicPlayer from "@/components/music-player"
import InteractiveMap from "@/components/interactive-map"

export default function VisitUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synthwave-dark to-synthwave-darker relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-repeat opacity-20 z-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-lazer text-4xl md:text-5xl mb-8 neon-text text-center">VISIT US</h1>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              <Suspense
                fallback={
                  <div className="h-full rounded-lg overflow-hidden neon-border relative bg-synthwave-darker flex items-center justify-center">
                    <div className="text-synthwave-pink animate-pulse">Loading Map...</div>
                  </div>
                }
              >
                <InteractiveMap />
              </Suspense>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Taproom & Brewery</h3>
                <p className="text-gray-300">
                  Our taproom features 15 rotating taps, neon-lit seating areas, and weekend DJ sets playing the best
                  synthwave tracks. Step into our neon-lit taproom and experience the future of craft beer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-synthwave-darker bg-opacity-60 p-6 rounded-lg border border-synthwave-purple border-opacity-30">
                  <div className="flex items-center mb-4">
                    <h4 className="text-xl font-bold text-white">Hours</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>4pm - 10pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday</span>
                      <span>2pm - 12am</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>12pm - 12am</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>12pm - 8pm</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-synthwave-darker bg-opacity-60 p-6 rounded-lg border border-synthwave-blue border-opacity-30">
                  <div className="flex items-center mb-4">
                    <h4 className="text-xl font-bold text-white">Location</h4>
                  </div>
                  <address className="not-italic text-gray-300 space-y-2">
                    <p>123 Neon Street</p>
                    <p>Synthwave City, SC 80845</p>
                    <div className="pt-4">
                      <span>(555) 123-4567</span>
                    </div>
                  </address>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=37.7749,-122.4194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="bg-synthwave-darker bg-opacity-70 p-8 rounded-lg border border-synthwave-purple border-opacity-30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-synthwave-dark p-6 rounded-lg border border-synthwave-pink border-opacity-30">
                <div className="text-synthwave-pink font-bold mb-2">May 15, 2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Synthwave Night</h3>
                <p className="text-gray-300 mb-4">Live DJ sets featuring the best retrowave and synthwave tracks.</p>
                <div className="text-sm text-gray-400">8:00 PM - 12:00 AM</div>
              </div>

              <div className="bg-synthwave-dark p-6 rounded-lg border border-synthwave-blue border-opacity-30">
                <div className="text-synthwave-blue font-bold mb-2">May 22, 2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Beer Release Party</h3>
                <p className="text-gray-300 mb-4">Join us for the release of our new "Cyber Haze" IPA.</p>
                <div className="text-sm text-gray-400">6:00 PM - 10:00 PM</div>
              </div>

              <div className="bg-synthwave-dark p-6 rounded-lg border border-synthwave-purple border-opacity-30">
                <div className="text-synthwave-purple font-bold mb-2">June 5, 2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Retro Gaming Night</h3>
                <p className="text-gray-300 mb-4">Classic arcade games and special beer pairings.</p>
                <div className="text-sm text-gray-400">7:00 PM - 11:00 PM</div>
              </div>
            </div>
          </div>
        </div>
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
