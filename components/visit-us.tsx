"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"
import InteractiveMap from "./interactive-map"

export default function VisitUs() {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] rounded-lg overflow-hidden relative"
          >
            <InteractiveMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Taproom & Brewery</h3>
              <p className="text-gray-300">
                Our taproom features 15 rotating taps, neon-lit seating areas, and weekend DJ sets playing the best
                synthwave tracks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-synthwave-darker bg-opacity-60 p-6 rounded-lg border border-synthwave-purple border-opacity-30">
                <div className="flex items-center mb-4">
                  <Clock className="text-synthwave-pink mr-3" size={24} />
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
                  <MapPin className="text-synthwave-blue mr-3" size={24} />
                  <h4 className="text-xl font-bold text-white">Location</h4>
                </div>
                <address className="not-italic text-gray-300 space-y-2">
                  <p>123 Neon Street</p>
                  <p>Synthwave City, SC 80845</p>
                  <div className="pt-4 flex items-center">
                    <Phone className="text-synthwave-blue mr-2" size={16} />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
