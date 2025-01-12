import SocialMediaIcons from "@/components/navbar/links/socialMediaIcons/SocialMediaIcons";
import Schools from "@/components/education/Schools";
import Skills from "@/components/skills/Skills";
import { FaLongArrowAltRight } from "react-icons/fa"
import Link from "next/link"
import Experience from "@/components/experience/Experience";

const AboutPage = () => {
    return (
      <main className="p-4 grow flex flex-col md:flex-row md:relative ">
        <div className="flex flex-col md:w-1/2 ">
          <h1 className="text-5xl font-medium">Oscar Velazquez</h1>
          <h2 className="text-2xl my-2">Software Engineer</h2>
          <h2 className="w-3/4 text-2xl my-2 text-opacity-70">Currently, my main focus is on Next.js and TypeScript development.</h2>
          {/* <ul>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
          </ul> */}
          <SocialMediaIcons/>
        </div>
        <div className="p-4 glass outline outline-1 outline-gray-100/30 rounded-lg flex flex-col md:w-1/2 md:absolute md:top-0 md:bottom-5 md:right-0 md:overflow-y-scroll">
          <section className="flex flex-col text-lg">
            <h2 className="text-4xl font-medium mb-2">About</h2>
            <p className="mb-2 text-opacity-80">Hello, Visitor! Firstly, I appreciate your time in visiting my site amidst your busy day. Constructing this web portfolio using Next.js and TypeScript has been both enjoyable and enlightening. I plan to continually enhance the site, so it may undergo changes upon your next visit..</p>
            <p className="mb-2 text-opacity-80">A bit about me: I recently graduated with a Bachelor of Science in Computer Science from NJIT, where I gained hands-on experience in areas like machine learning, web development, and software engineering. While studying computer science had its challenges, I found great satisfaction in solving problems and bringing my projects to life. In the summer, I interned at Ricoh&apos;s IT department, where I worked on upgrading and maintaining technology for Newark&apos;s schools. My role involved troubleshooting hardware and software issues, updating systems, and implementing improvements that directly benefited students and teachers as they returned to school with upgraded tech. This experience gave me valuable exposure to IT support and large-scale systems management.</p>
            <p className="text-opacity-80">Beyond my academic pursuits, I&apos;ve reignited my passion for fitness, focusing on both physical and mental growth. While I no longer have Chester, my beloved Yorkie, I do have a new puppy named Bear—another corgi who brings a lot of joy into my life. In my free time, I enjoy playing PC games, having recently made the shift from PlayStation. Though I currently spend a lot of time on Fortnite with friends, my true gaming love lies with the Call of Duty franchise, and I&apos;m excited to dive back in soon. Thanks again for stopping by, and I look forward to welcoming you again soon!</p>
          </section>
          <section className="mt-5">
            <h2 className="text-4xl font-medium mb-2 ">Experience</h2>
            <Experience/>
          </section>
          <section className="mt-5">
            <h2 className="text-4xl font-medium mb-2 ">Education</h2>
            <Schools/>
          </section>
          <section className="mt-5">
            <h2 className="text-4xl font-medium mb-2">Skills</h2>
            <Skills/>
            <div className="mt-5 inline-flex cursor-pointer hover:scale-105 transform transition-transform">
              <Link className='inline-flex items-center' href={"/resume_pdf"}>
                <span className="text-xl me-1">View Full Resume </span> 
                <FaLongArrowAltRight size={40} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    )
}

export default AboutPage;
