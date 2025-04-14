"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function About() {
  const [imageError1, setImageError1] = useState(false)
  const [imageError2, setImageError2] = useState(false)

  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden neon-border">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Neon Brew Brewery"
                fill
                className="object-cover"
                onError={() => setImageError1(true)}
                unoptimized={true}
              />
              {imageError1 && (
                <div className="absolute inset-0 flex items-center justify-center bg-synthwave-darker">
                  <p className="text-synthwave-pink">Brewery Image</p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 -right-5 h-[200px] w-[200px] rounded-lg overflow-hidden neon-border-blue">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Brewing Process"
                fill
                className="object-cover"
                onError={() => setImageError2(true)}
                unoptimized={true}
              />
              {imageError2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-synthwave-darker">
                  <p className="text-synthwave-blue">Process</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">Brewing in the Digital Age</h3>
            <p className="text-gray-300">
              Founded in 2088, Neon Brew combines traditional brewing techniques with futuristic flavors. Our master
              brewers work in a state-of-the-art facility where neon lights illuminate the brewing process.
            </p>
            <p className="text-gray-300">
              We source the finest ingredients from across the galaxy to create unique flavor profiles that transport
              you to the retro-future world of synthwave and outrun aesthetics.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-synthwave-darker bg-opacity-60 p-4 rounded-lg border border-synthwave-purple border-opacity-30">
                <h4 className="text-synthwave-pink font-bold mb-2">10+ Awards</h4>
                <p className="text-sm text-gray-400">Recognized excellence in craft brewing</p>
              </div>
              <div className="bg-synthwave-darker bg-opacity-60 p-4 rounded-lg border border-synthwave-blue border-opacity-30">
                <h4 className="text-synthwave-blue font-bold mb-2">15+ Beers</h4>
                <p className="text-sm text-gray-400">Unique craft beers with futuristic flavors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
