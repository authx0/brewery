import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-synthwave-darker py-12 border-t border-synthwave-purple border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-lazer text-2xl text-white">
              <span className="text-synthwave-pink">NEON</span>
              <span className="text-synthwave-blue">BREW</span>
            </h3>
            <p className="text-gray-400">A retro-futuristic brewery with neon vibes and exceptional craft beers.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-synthwave-pink transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-synthwave-pink transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-synthwave-pink transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Beers", path: "/beers" },
                { name: "Visit Us", path: "/visit-us" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-gray-400 hover:text-synthwave-pink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Our Beers</h4>
            <ul className="space-y-2">
              {["Neon Haze", "Digital Stout", "Synthwave Sour", "Outrun Lager"].map((item) => (
                <li key={item}>
                  <Link href="/beers" className="text-gray-400 hover:text-synthwave-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new beers and events.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-synthwave-dark border border-synthwave-purple rounded-md focus:outline-none focus:ring-2 focus:ring-synthwave-pink"
              />
              <button type="submit" className="w-full neon-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-synthwave-purple border-opacity-30 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Neon Brew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
