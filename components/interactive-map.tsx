"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

// This would normally come from environment variables
const MAPBOX_ACCESS_TOKEN = "YOUR_MAPBOX_TOKEN"
const BREWERY_LOCATION = {
  lng: -122.4194,
  lat: 37.7749,
  name: "Neon Brew",
  address: "123 Neon Street, Synthwave City",
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [map, setMap] = useState<any>(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Check if we're in the browser and if the mapbox script is already loaded
    if (typeof window !== "undefined" && !window.mapboxgl && !showFallback) {
      // Create script element to load Mapbox
      const script = document.createElement("script")
      script.src = "https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"
      script.async = true
      script.onload = initializeMap
      script.onerror = () => setShowFallback(true)

      // Create link element for Mapbox CSS
      const link = document.createElement("link")
      link.href = "https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
      link.rel = "stylesheet"

      document.head.appendChild(script)
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(script)
        document.head.removeChild(link)
      }
    } else if (window.mapboxgl && !mapLoaded) {
      initializeMap()
    }
  }, [mapLoaded])

  const initializeMap = () => {
    if (!mapRef.current || showFallback) return

    try {
      window.mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

      const newMap = new window.mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/dark-v11", // Dark style for synthwave aesthetic
        center: [BREWERY_LOCATION.lng, BREWERY_LOCATION.lat],
        zoom: 14,
        attributionControl: false,
      })

      newMap.on("load", () => {
        // Add custom layer for neon glow effect around the map
        newMap.addLayer({
          id: "neon-glow",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: [
                  [BREWERY_LOCATION.lng - 0.01, BREWERY_LOCATION.lat - 0.01],
                  [BREWERY_LOCATION.lng + 0.01, BREWERY_LOCATION.lat - 0.01],
                  [BREWERY_LOCATION.lng + 0.01, BREWERY_LOCATION.lat + 0.01],
                  [BREWERY_LOCATION.lng - 0.01, BREWERY_LOCATION.lat + 0.01],
                  [BREWERY_LOCATION.lng - 0.01, BREWERY_LOCATION.lat - 0.01],
                ],
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#ff00ff", // Neon pink
            "line-width": 3,
            "line-opacity": 0.8,
            "line-blur": 3,
          },
        })

        // Create a custom marker element
        const markerEl = document.createElement("div")
        markerEl.className = "custom-marker"
        markerEl.innerHTML = `
          <div class="marker-pin">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        `

        // Add marker to map
        const marker = new window.mapboxgl.Marker(markerEl)
          .setLngLat([BREWERY_LOCATION.lng, BREWERY_LOCATION.lat])
          .addTo(newMap)

        // Add popup
        const popup = new window.mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          className: "custom-popup",
        })
          .setLngLat([BREWERY_LOCATION.lng, BREWERY_LOCATION.lat])
          .setHTML(`
            <div>
              <h3 class="popup-title">${BREWERY_LOCATION.name}</h3>
              <p class="popup-address">${BREWERY_LOCATION.address}</p>
            </div>
          `)
          .addTo(newMap)

        // Add controls
        newMap.addControl(new window.mapboxgl.NavigationControl(), "top-right")

        setMap(newMap)
        setMapLoaded(true)
      })

      newMap.on("error", () => {
        setShowFallback(true)
      })
    } catch (error) {
      console.error("Error initializing map:", error)
      setShowFallback(true)
    }
  }

  // Fallback component when map can't be loaded
  if (showFallback) {
    return (
      <div className="h-full rounded-lg overflow-hidden neon-border relative bg-synthwave-darker flex flex-col items-center justify-center p-8 text-center">
        <MapPin className="text-synthwave-pink mb-4" size={48} />
        <h3 className="text-xl font-bold text-white mb-2">Find Us Here</h3>
        <p className="text-gray-300 mb-4">{BREWERY_LOCATION.address}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${BREWERY_LOCATION.lat},${BREWERY_LOCATION.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="neon-button"
        >
          Open in Google Maps
        </a>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full rounded-lg overflow-hidden neon-border relative"
    >
      <div ref={mapRef} className="h-full w-full">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-synthwave-darker">
            <div className="text-synthwave-pink text-center">
              <div className="animate-pulse mb-4">Loading Map...</div>
              <div className="w-16 h-16 border-4 border-synthwave-pink rounded-full border-t-transparent animate-spin mx-auto"></div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for map styling */}
      <style jsx global>{`
        .custom-marker {
          width: 36px;
          height: 36px;
        }
        
        .marker-pin {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .custom-popup {
          background-color: rgba(18, 11, 46, 0.9) !important;
          border: 1px solid #ff00ff !important;
          border-radius: 4px !important;
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5) !important;
        }
        
        .custom-popup .mapboxgl-popup-content {
          background-color: transparent !important;
          padding: 12px !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        
        .custom-popup .mapboxgl-popup-tip {
          border-top-color: #ff00ff !important;
          border-bottom-color: #ff00ff !important;
        }
        
        .popup-title {
          color: #ff00ff;
          font-weight: bold;
          margin-bottom: 4px;
        }
        
        .popup-address {
          color: white;
          font-size: 12px;
        }
        
        .mapboxgl-ctrl-group {
          background-color: rgba(18, 11, 46, 0.8) !important;
          border: 1px solid #9900ff !important;
        }
        
        .mapboxgl-ctrl button {
          color: white !important;
        }
        
        .mapboxgl-ctrl button:hover {
          background-color: rgba(153, 0, 255, 0.3) !important;
        }
      `}</style>
    </motion.div>
  )
}
