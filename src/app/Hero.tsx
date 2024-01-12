import SocialMediaIcons from "@/components/navbar/links/socialMediaIcons/SocialMediaIcons";
import Link from "next/link"

const Hero = () => {
    return (
        <div className="w-full md:w-3/4 md:pb-5 md:mb-20">
            <h1 className="text-5xl font-Nunito my-5">Welcome, My Name is Oscar Velazquez</h1>
            <h3 className="text-lg my-5">I am a dedicated software engineer with a specialized interest in the realms of web development, machine learning, and video game programming.</h3>
            <h3 className="text-lg my-5">My professional journey is fueled by a commitment to pushing the boundaries of technology, whether it&apos;s building responsive web applications, exploring the frontiers of machine learning algorithms, or crafting immersive experiences in the world of video game development. Feel free to <Link className="font-bold" href="contact">Contact Me</Link>.</h3>
            <div className="text-lg my-8">
                <Link className="bg-[#F0A273] rounded-xl p-3 outline outline-1 outline-[#262A4D] shadow hover:shadow-lg hover:bg-[#D18B4D] active:bg-[#B47634]" href="/about">Read More About Me</Link>
            </div>
            <SocialMediaIcons/>
        </div>
    )
}

export default Hero;
