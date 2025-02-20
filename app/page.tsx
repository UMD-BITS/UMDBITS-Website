"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#4A0E0E] font-['Playfair_Display']">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md text-[#4A0E0E]" : "bg-transparent text-[#F5F5F5]"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-['Ogg']">
            UMD BITS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:opacity-75 transition-opacity">
              About
            </Link>
            <Link href="#activities" className="hover:opacity-75 transition-opacity">
              Activities
            </Link>
            <Link href="#leadership" className="hover:opacity-75 transition-opacity">
              Leadership
            </Link>
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-[#4A0E0E] text-[#F5F5F5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Ogg']">University of Maryland</h1>
          <p className="text-5xl md:text-6xl mb-8 font-['Ogg']">Business & IT Society</p>
          <Link
            href="https://terplink.umd.edu/organization/business-information-technology-society"
            className="inline-block px-8 py-3 border border-[#F5F5F5] rounded-full hover:bg-[#F5F5F5] hover:text-[#4A0E0E] transition-colors"
          >
            Discover More
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-[95vh] flex flex-col justify-center bg-[#F5F5F5] text-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X4byrBj06ImWXOIRXc3TOku96x7Lu1.png"
              alt="Decorative scroll"
              width={80}
              height={80}
              className="opacity-80"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Ogg']">About UMD BITS</h2>
            <p className="text-xl leading-relaxed mb-12">
              BITS is a student organization at the University of Maryland that bridges the gap between
              business analytics and computing technology. We provide our members with workshops, networking
              opportunities, and hosted events in the consistently volatile world of business information systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="min-h-[95vh] flex items-center bg-[#4A0E0E] text-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center font-['Ogg']"
          >
            Our Activities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Workshops",
                description: "Hands-on technical workshops focusing on industry-relevant skills and tools",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events.jpg-gLxepQOx1sWQ6UfKAbupwU6JdKFs2U.jpeg",
              },
              {
                title: "Programming Sessions",
                description: "Learn programming languages and frameworks used in modern tech",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events3-RKOIUddfqXOJnOFY50OYwgQkr403SM.webp",
              },
              {
                title: "AI/ML Discussions",
                description: "Explore the latest in artificial intelligence and machine learning",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events2.jpg-aY9dskH3ASok6oDtmxLNgg9gYlAIi1.jpeg",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#F5F5F5] rounded-3xl p-8 shadow-lg"
              >
                <div className="aspect-square mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#4A0E0E] text-2xl font-['Ogg'] font-bold mb-4">{activity.title}</h3>
                <p className="text-[#4A0E0E]/70">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="min-h-[95vh] py-20 bg-[#F5F5F5] text-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center font-['Ogg']"
          >
            Our Leadership
          </motion.h2>

          {/* President - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link href="https://www.linkedin.com/in/moiz-chaudhry-/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/moiz_headshot.JPG"
                alt="Moiz Chaudhry"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-6 object-cover aspect-square"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/moiz-chaudhry-/" target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-semibold mb-2 font-['Ogg']">Moiz Chaudhry</h3>
            </Link>
            <p className="text-lg mb-2">President</p>
            <p className="text-[#4A0E0E]/80">mchaudh7@terpmail.umd.edu</p>
          </motion.div>

          {/* VPs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              {
                name: "Olevia Tinpaw",
                role: "VP of Events",
                email: "otinpaw@terpmail.umd.edu",
                image:
                  "/olevia_headshot.png",
                linkedin: "https://www.linkedin.com/in/olevia-tinpaw-a115451aa/",
              },
              {
                name: "Krisha Mahadevia",
                role: "VP of Finance",
                email: "kmahade1@terpmail.umd.edu",
                image:
                  "/krisha_headshot.png",
                linkedin: "https://www.linkedin.com/in/krisha-mahadevia/",
              },
              {
                name: "Rudra Soni",
                role: "VP of Marketing",
                email: "rsoni@terpmail.umd.edu",
                image:
                  "/rudra_headshot.png",
                linkedin: "https://www.linkedin.com/in/rudra-soni/",
              },
              {
                name: "Abigail Richman",
                role: "VP of Membership",
                email: "arich5@terpmail.umd.edu",
                image:
                  "/abby.webp",
                linkedin: "https://www.linkedin.com/company/umd-bits/",
              },
              {
                name: "Mohnish Mahajan",
                role: "VP of Content",
                email: "mmahaja1@terpmail.umd.edu",
                image:
                  "/mohnish_headshot.jpg",
                linkedin: "https://www.linkedin.com/in/mohnish-mahajan/",
                subVP: {
                  name: "Vishesh Khare",
                  role: "Sub-VP of Content",
                  email: "vkhare@terpmail.umd.edu",
                  linkedin: "https://www.linkedin.com/in/vishesh-khare-b17875211/",
                },
              },
              {
                name: "Carter Pry",
                role: "VP of Technology",
                email: "cpry@terpmail.umd.edu",
                image:
                  "/carterpry_headshot2.png", // Using Moiz's photo as placeholder
                linkedin: "https://www.linkedin.com/in/carterpry",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-6 object-cover aspect-square"
                  />
                </Link>
                <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-semibold mb-2 font-['Ogg']">{leader.name}</h3>
                </Link>
                <p className="text-lg mb-2">{leader.role}</p>
                <p className="text-[#4A0E0E]/80 mb-4">{leader.email}</p>
                {leader.subVP && (
                  <div className="mt-4 pt-4 border-t border-[#4A0E0E]/20">
                    <Link href={leader.subVP.linkedin} target="_blank" rel="noopener noreferrer">
                      <h4 className="text-lg font-semibold mb-1">{leader.subVP.name}</h4>
                    </Link>
                    <p className="text-sm mb-1">{leader.subVP.role}</p>
                    <p className="text-sm text-[#4A0E0E]/80">{leader.subVP.email}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Faculty Advisor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link href="https://www.linkedin.com/in/hassan-ibrahim-98a4637/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/hassan_headshot.jpg"
                alt="Hassan Ibrahim"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 object-cover aspect-square"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/hassan-ibrahim-98a4637/" target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-semibold mb-2 font-['Ogg']">Hassan Ibrahim</h3>
            </Link>
            <p className="text-lg mb-2">Faculty Advisor</p>
            <p className="text-[#4A0E0E]/80">hibrahim@umd.edu</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A0E0E] text-[#F5F5F5] py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} UMD BITS. All rights are reserved.</p>
          <p className="mb-"><Link href="https://github.com/CarterPry">Development of this site can be found here.</Link></p>
          <p className="text-[#F5F5F5]/60 mb-4">University of Maryland, College Park</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://www.instagram.com/umdbits" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="43"
                height="43"
                viewBox="0 0 48 48"
                className="fill-current"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </Link>
            <Link href="https://github.com/UMD-BITS" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 64 64"
                className="fill-current"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/umd-bits/" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </Link>
            <Link href="https://X.com/umdbits" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 50 50"
                className="fill-current"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
              </svg>
            </Link>
            <Link href="https://groupme.com/join_group/44966964/6laymmdX" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 50 50"
                className="fill-current"
              >
                <path d="M 14 5 C 9.0414839 5 5 9.0414839 5 14 L 5 36 C 5 40.958516 9.0414839 45 14 45 L 20.519531 45 L 24.21875 49.625 A 1.0001 1.0001 0 0 0 25.78125 49.625 L 29.480469 45 L 36 45 C 40.958516 45 45 40.958516 45 36 L 45 14 C 45 9.0414839 40.958516 5 36 5 L 14 5 z M 14 7 L 36 7 C 39.877484 7 43 10.122516 43 14 L 43 36 C 43 39.877484 39.877484 43 36 43 L 29 43 A 1.0001 1.0001 0 0 0 28.21875 43.375 L 25 47.398438 L 21.78125 43.375 A 1.0001 1.0001 0 0 0 21 43 L 14 43 C 10.122516 43 7 39.877484 7 36 L 7 14 C 7 10.122516 10.122516 7 14 7 z M 20.984375 10.986328 A 1.0001 1.0001 0 0 0 20 12 L 20 15 L 17 15 A 1.0001 1.0001 0 1 0 17 17 L 20 17 L 20 23 L 17 23 A 1.0001 1.0001 0 1 0 17 25 L 20 25 L 20 28 A 1.0001 1.0001 0 1 0 22 28 L 22 25 L 28 25 L 28 28 A 1.0001 1.0001 0 1 0 30 28 L 30 25 L 33 25 A 1.0001 1.0001 0 1 0 33 23 L 30 23 L 30 17 L 33 17 A 1.0001 1.0001 0 1 0 33 15 L 30 15 L 30 12 A 1.0001 1.0001 0 1 0 28 12 L 28 15 L 22 15 L 22 12 A 1.0001 1.0001 0 0 0 20.984375 10.986328 z M 22 17 L 28 17 L 28 23 L 22 23 L 22 17 z M 37.046875 28.972656 A 1.0001 1.0001 0 0 0 36.136719 29.496094 C 33.875482 33.3729 29.798559 36 25 36 C 20.191456 36 16.123595 33.384961 13.865234 29.498047 A 1.0001 1.0001 0 0 0 12.951172 28.988281 A 1.0001 1.0001 0 0 0 12.134766 30.501953 C 14.724405 34.959039 19.462544 38 25 38 C 30.531441 38 35.270518 34.9491 37.863281 30.503906 A 1.0001 1.0001 0 0 0 37.046875 28.972656 z" />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center space-x-8">
            <Link href="mailto:arich5@terpmail.umd.edu" className="hover:opacity-75 transition-opacity">
              Contact Us
            </Link>
            <Link href="https://terplink.umd.edu/organization/business-information-technology-society" className="hover:opacity-75 transition-opacity">
              Join BITS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

