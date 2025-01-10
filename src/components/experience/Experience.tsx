interface experience {
    company: string;
    start_year: string;
    end_year : string;
    city: string;
    state : string;
    title : string;
}

const Experience = () => {

    const schools : experience[] = [
        {
            company : "Ricoh",
            start_year : "2024",
            end_year : "2024",
            city : "Newark",
            state : "NJ",
            title : "Customer Engineer Intern",
        },
    ]


    return (
        <div>
            {schools.map((e, index) => (
                <div key={`school-${index}`}  className="flex my-5">
                    <div className="text-lg text-opacity-80 w-1/5">
                        <p className="p-1">{`${e.start_year} - ${e.end_year}`}</p>
                    </div>
                    <div className="ms-5">
                        <h3 className="text-2xl font-medium">{e.company}</h3>
                        <h4 className="text-lg my-3 text-opacity-80">{`${e.city}, ${e.state}`}</h4>
                        <h4 className="text-lg my-3 text-opacity-80">{e.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;