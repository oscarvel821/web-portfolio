import SocialMediaIcons from "@/components/navbar/links/socialMediaIcons/SocialMediaIcons";
import Schools from "@/components/education/Schools";
import Skills from "@/components/skills/Skills";
import { FaLongArrowAltRight } from "react-icons/fa"

const AboutPage = () => {
    return (
      <main className="p-4 grow flex flex-col md:flex-row md:relative">
        <div className="flex flex-col font-Nunito md:w-1/2">
          <h1 className="text-5xl font-bold">Oscar Velazquez</h1>
          <h2 className="text-2xl my-2">Software Engineer</h2>
          <h2 className="w-3/4 text-2xl my-2 font-RobotoFlex text-opacity-70">I build pixel-perfect, accessible products for the web and beyond.</h2>
          {/* <ul>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
          </ul> */}
          <SocialMediaIcons/>
        </div>
        <div className="p-4 glass outline outline-1 outline-slate-600/30 rounded-lg flex flex-col md:w-1/2 md:absolute md:top-0 md:bottom-5 md:right-0 md:overflow-y-scroll">
          <section className="flex flex-col font-RobotoFlex text-lg">
            <h2 className="text-4xl font-bold mb-2">About</h2>
            <p className="mb-2 text-opacity-80">Hello, Visitor! Firstly, I appreciate your time in visiting my site amidst your busy day. Constructing this web portfolio using Next.js and TypeScript has been both enjoyable and enlightening. I plan to continually enhance the site, so it may undergo changes upon your next visit..</p>
            <p className="mb-2 text-opacity-80">Now, shifting the focus from the site to myself, I am presently pursuing a Bachelor of Science in Computer Science at NJIT. This esteemed institution offers a comprehensive education covering diverse aspects of computer science, including machine learning, web development, and software engineering. While studying computer science poses challenges, the satisfaction derived from successfully executing a program is truly gratifying.</p>
            <p className="mb-2 text-opacity-80">In a recent semester, my classmates and I were tasked with creating a fitness app. This endeavor exposed us to software engineering methodologies such as Agile and Scrum. Implementing these methods, along with mastering new frameworks and programming languages, demanded considerable dedication. Despite the challenges, our hard work paid off, culminating in the recognition of our app as the best web application of the semester by four tech industry professionals. The late nights and struggles were all justified when we presented our achievement at the end of the semester. Feel free to explore the repository linked on my projects page for more details.</p>
            <p className="text-opacity-80">Beyond my academic pursuits, I've rekindled my interest in fitness, striving for both physical and mental improvement. Additionally, my companions in daily life are two adorable dogs—a corgi named Bolt and a yorkie named Chester. Whenever time allows, I relish spending moments with them. As a PlayStation gamer (though I aspire for a PC in the near future), I currently enjoy Fortnite with friends, yet my heart belongs to the Call of Duty franchise, and I hope to delve back into it. Once again, thank you for your visit, and I look forward to welcoming you again!</p>
          </section>
          <section className="mt-5">
            <h2 className="text-4xl font-bold mb-2 font-RobotoFlex">Education</h2>
            <Schools/>
          </section>
          <section className="mt-5">
            <h2 className="text-4xl font-bold mb-2 font-RobotoFlex">Skills</h2>
            <Skills/>
            <div className="mt-5 inline-flex items-center cursor-pointer hover:scale-105 transform transition-transform">
              <span className="text-xl me-1">View Full Resume </span> 
              <FaLongArrowAltRight size={40} />
            </div>
          </section>
        </div>
      </main>
    )
}

export default AboutPage;
