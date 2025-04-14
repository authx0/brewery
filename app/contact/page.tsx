import { Suspense } from "react"
import GridFloor from "@/components/grid-floor"
import MusicPlayer from "@/components/music-player"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synthwave-dark to-synthwave-darker relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/grid-bg.svg')] bg-repeat opacity-20 z-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-lazer text-4xl md:text-5xl mb-8 neon-text text-center">CONTACT US</h1>

          <div className="max-w-2xl mx-auto bg-synthwave-darker bg-opacity-70 p-8 rounded-lg neon-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-synthwave-dark border border-synthwave-purple rounded-md focus:outline-none focus:ring-2 focus:ring-synthwave-pink"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-synthwave-dark border border-synthwave-purple rounded-md focus:outline-none focus:ring-2 focus:ring-synthwave-pink"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-synthwave-dark border border-synthwave-purple rounded-md focus:outline-none focus:ring-2 focus:ring-synthwave-pink"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-synthwave-dark border border-synthwave-purple rounded-md focus:outline-none focus:ring-2 focus:ring-synthwave-pink"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button type="submit" className="neon-button w-full">
                Send Message
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-synthwave-dark p-6 rounded-lg border border-synthwave-purple border-opacity-30">
                <h3 className="text-xl font-bold text-synthwave-pink mb-4">Contact Info</h3>
                <div className="space-y-3 text-gray-300">
                  <p>Email: info@neonbrew.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>123 Neon Street, Synthwave City, SC 80845</p>
                </div>
              </div>

              <div className="bg-synthwave-dark p-6 rounded-lg border border-synthwave-blue border-opacity-30">
                <h3 className="text-xl font-bold text-synthwave-blue mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <p>Monday - Thursday: 4pm - 10pm</p>
                  <p>Friday: 2pm - 12am</p>
                  <p>Saturday: 12pm - 12am</p>
                  <p>Sunday: 12pm - 8pm</p>
                </div>
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
