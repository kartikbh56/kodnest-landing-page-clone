import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { href: "https://www.instagram.com/kodnest", icon: "/images/social/instagram.svg", label: "Instagram" },
    { href: "https://www.facebook.com/kodnest", icon: "/images/social/facebook.svg", label: "Facebook" },
    { href: "https://www.linkedin.com/company/33436964/", icon: "/images/social/linkedin.svg", label: "LinkedIn" },
    { href: "https://youtube.com/@kodnest", icon: "/images/social/youtube.svg", label: "YouTube" },
    { href: "https://github.com/kodnest", icon: "/images/social/github.svg", label: "GitHub" },
  ]

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            KodNest - Code, Transform<br />and Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering Tomorrow's Leaders with Cutting-Edge<br />
            Education and Robust Placement Support
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-16">
          {socialLinks.map((social) => (
            <Link 
              key={social.label}
              href={social.href}
              className="text-gray-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <Image 
              src="https://www.kodnest.com/wp-content/uploads/2023/10/cropped-black-transparent-1-768x239.png"
              alt="KodNest"
              width={150}
              height={47}
              priority
              className="mb-4 h-12 w-auto object-contain"
            />
            <p className="text-sm text-gray-600">All rights reserved</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/full-stack" className="text-gray-600 hover:text-black">Full Stack Development</Link></li>
              <li><Link href="/testing" className="text-gray-600 hover:text-black">Premium Testing Module</Link></li>
              <li><Link href="/hire" className="text-gray-600 hover:text-black">Hire from us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-600 hover:text-black">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="text-gray-600 hover:text-black">Cookie Policy</Link></li>
              <li><Link href="/copyright" className="text-gray-600 hover:text-black">Copyright Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="tel:+918095000123" className="text-gray-600 hover:text-black flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact us - +91-8095 000 123
            </Link>
            <Link href="mailto:info@kodnest.com" className="text-gray-600 hover:text-black flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email - info@kodnest.com
            </Link>
          </div>
          <Link 
            href="/demo"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md inline-flex items-center gap-2 transition-colors duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Register for Demo
          </Link>
        </div>
      </div>
    </footer>
  )
} 