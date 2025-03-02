import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import ProfessionalExperience from "@/components/ProfessionalExperience";

// Lazy load components
const TechStack = dynamic(() => import("@/components/tech-stack"), {
  ssr: false,
});
const ProjectCard = dynamic(() => import("@/components/project-card"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-center p-4 md:p-6">
        <Link href="#home" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link href="#projects" className="text-white hover:text-gray-400 ml-4">
          Projects
        </Link>
        <Link
          href="#professional-experience"
          className="text-white hover:text-gray-400 ml-4"
        >
          Experience
        </Link>
        <Link href="#contact" className="text-white hover:text-gray-400 ml-4">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 py-12 text-center md:py-20"
      >
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1 md:h-40 md:w-40">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Profile Avatar"
            width={150}
            height={150}
            className="h-full w-full rounded-full bg-gray-800 object-cover"
            loading="lazy"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          I do code and <br />
          make content{" "}
          <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            about it!
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-gray-400 md:text-lg">
          Creative and detail-oriented UX/UI designer with 1 year of experience
          in designing user-centered digital experiences. Proficient in
          conducting user research, creating wireframes, prototypes, and
          high-fidelity mockups. Passionate about solving complex problems and
          enhancing user satisfaction through innovative design solutions.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button className="min-w-[250px] py-6 text-xl rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="min-w-[250px] py-6 text-xl rounded-full border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download CV
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-12 text-center">
        <TechStack />
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-12">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase text-orange-500 md:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProjectCard
            title="HTML TUTORIAL"
            image="/placeholder.svg?height=300&width=500"
            tagline="POWER OF HTML"
            link="#"
          />
          <ProjectCard
            title="CSS TUTORIAL"
            image="/placeholder.svg?height=300&width=500"
            tagline="UNLOCK CSS MAGIC"
            link="#"
          />
        </div>
      </section>

      {/* Professional Experience */}
      <ProfessionalExperience />

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold">Contact</h2>
        <div className="max-w-2xl">
          <p className="mb-6 text-gray-400">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies.
          </p>
          <p className="mb-8 flex items-center text-gray-300">
            <span className="mr-2">📧</span>
            <span>dbmcodehub@gmail.com</span>
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
