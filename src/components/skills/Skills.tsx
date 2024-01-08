const Skills = () => {
    const skills: string[] = [
        "React",
        "Typescript",
        "Next JS",
        "Python",
        "C",
        "C ++",
        "Node",
        "Git",
        "Pygame",
        "MySql",
        "MongoDB",
    ]

    return (
        <div className="text-[#A34D4E] mt-5 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {skills.map((s, index) => (
                    <div key={`skill-${index}`} className="flex justify-center p-3 rounded-full bg-[#280A2E] outline outline-2 outline-[#A34D4E]">
                        {s}
                    </div>
            ))}
        </div>
    )
}

export default Skills;
