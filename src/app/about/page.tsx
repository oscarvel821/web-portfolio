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
        <div className="p-4 glass outline outline-1 outline-slate-600/30 rounded-lg flex flex-col md:w-1/2 md:absolute md:top-0 md:bottom-5 md:right-0 md:overflow-scroll">
          <section className="flex flex-col font-RobotoFlex text-lg">
            <h2 className="text-4xl font-bold mb-2">About</h2>
            <p className="mb-2 text-opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc o laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="mb-2 text-opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc o laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text-opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc o laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
