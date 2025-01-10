import SocialMediaIcons from "@/components/navbar/links/socialMediaIcons/SocialMediaIcons";
import Link from "next/link"

const Hero = () => {
    return (
        <div className="w-full flex flex-col flex-wrap items-center justify-center md:w-4/5">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">Hello World!</h1>
            <h1 className="text-xl sm:text-4xl md:whitespace-nowrap md:text-5xl lg:text-6xl">My Name is Oscar Velazquez</h1>
            <h3 className="text-sm sm:text-xl mt-5 text-center">I am a dedicated software engineer with a specialized interest in the realms of web development, machine learning, and video game programming.</h3>
            <h3 className="text-sm sm:text-xl my-5 text-center">My professional journey is fueled by a commitment to pushing the boundaries of technology, whether it&apos;s building responsive web applications, exploring the frontiers of machine learning algorithms, or crafting immersive experiences in the world of video game development. Feel free to <Link className="font-semibold" href="contact">Contact Me</Link>.</h3>
            <div className="text-lg my-8">
                <Link className="bg-[#575757] rounded-xl p-3 outline outline-1 outline-[#262A4D] shadow hover:shadow-lg hover:bg-[#343434] active:bg-[#111111]" href="/about">Read More About Me</Link>
            </div>
            <SocialMediaIcons/>
        </div>
    )
}

export default Hero;
