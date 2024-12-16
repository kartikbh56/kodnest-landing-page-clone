'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { isActivePath } from '@/utils/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    {
      href: '/full-stack',
      label: 'Full Stack Development',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      isExternal: false
    },
    {
      href: '/testing',
      label: 'Premium Testing Module',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isExternal: false
    },
    {
      href: '/hire',
      label: 'Hire from us',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      isExternal: false
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.kodnest.com/wp-content/uploads/2023/10/cropped-black-transparent-1-768x239.png"
            alt="KodNest"
            width={120}
            height={37}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-300"
              >
                {link.icon}
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  isActivePath(pathname, link.href)
                    ? 'text-black font-medium'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            )
          ))}
          <a
            href="https://app.kodnest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black px-4 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Student Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
} 