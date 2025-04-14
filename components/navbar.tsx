"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Beers", path: "/beers" },
    { name: "Visit Us", path: "/visit-us" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-synthwave-dark bg-opacity-80 backdrop-blur-md border-b border-synthwave-purple border-opacity-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-lazer text-2xl md:text-3xl text-white">
              <span className="text-synthwave-pink">NEON</span>
              <span className="text-synthwave-blue">BREW</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-white hover:text-synthwave-pink transition-colors duration-300 py-2 px-1 inline-flex items-center ${
                  isActive(item.path) ? "text-synthwave-pink" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`neon-button text-sm ${isActive("/contact") ? "bg-synthwave-pink bg-opacity-20" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-synthwave-darker bg-opacity-95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-white hover:text-synthwave-pink transition-colors duration-300 py-2 ${
                  isActive(item.path) ? "text-synthwave-pink" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`neon-button text-sm inline-block text-center ${
                isActive("/contact") ? "bg-synthwave-pink bg-opacity-20" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
