"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const beers = [
  {
    id: 1,
    name: "Neon Haze",
    type: "Hazy IPA",
    abv: "6.5%",
    description: "A juicy, hazy IPA with notes of tropical fruit and a smooth finish.",
    color: "pink",
  },
  {
    id: 2,
    name: "Digital Stout",
    type: "Imperial Stout",
    abv: "9.2%",
    description: "Rich and complex with coffee, chocolate, and a hint of vanilla.",
    color: "blue",
  },
  {
    id: 3,
    name: "Synthwave Sour",
    type: "Fruited Sour",
    abv: "5.8%",
    description: "Tart and refreshing with raspberry, blackberry, and a touch of lime.",
    color: "purple",
  },
  {
    id: 4,
    name: "Outrun Lager",
    type: "Japanese Rice Lager",
    abv: "4.7%",
    description: "Crisp, clean, and refreshing with a subtle sweetness from rice.",
    color: "teal",
  },
]

export default function Beers() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  return (
    <section className="section-padding relative bg-synthwave-darker bg-opacity-70">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beers.map((beer, index) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`bg-synthwave-darker bg-opacity-80 border-synthwave-${beer.color} hover:shadow-[0_0_15px_rgba(var(--synthwave-${beer.color}),0.5)] transition-all duration-300 h-full`}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={beer.name}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(beer.id)}
                      unoptimized={true}
                    />
                    {imageErrors[beer.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-synthwave-darker">
                        <p className={`text-synthwave-${beer.color}`}>{beer.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-lazer text-xl text-synthwave-${beer.color}`}>{beer.name}</h3>
                      <span className="bg-synthwave-darker px-2 py-1 rounded text-xs font-bold text-white">
                        {beer.abv}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{beer.type}</p>
                    <p className="text-gray-300">{beer.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="neon-button-blue">View All Beers</button>
        </motion.div>
      </div>
    </section>
  )
}
