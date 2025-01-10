interface school {
    name: string;
    start_year: string;
    end_year : string;
    city: string;
    state : string;
    degree : string;
    gpa : string;
}

const Schools = () => {

    const schools : school[] = [
        {
            name : "New Jersey Institute of Technology",
            start_year : "2021",
            end_year : "2024",
            city : "Newark",
            state : "NJ",
            degree : "Bachelor of Science in Computer Science",
            gpa : "3.5"
        },
        {
            name : "Ocean County College",
            start_year : "2019",
            end_year : "2021",
            city : "Toms River",
            state : "NJ",
            degree : "Associate of Science in Computer Science",
            gpa : "3.4"
        }
    ]


    return (
        <div>
            {schools.map((s, index) => (
                <div key={`school-${index}`}  className="flex my-5">
                    <div className="text-lg text-opacity-80 w-1/5">
                        <p className="p-1">{`${s.start_year} - ${s.end_year}`}</p>
                    </div>
                    <div className="ms-5">
                        <h3 className="text-2xl font-medium">{s.name}</h3>
                        <h4 className="text-lg my-3 text-opacity-80">{`${s.city}, ${s.state}`}</h4>
                        <h4 className="text-lg my-3 text-opacity-80">{s.degree}</h4>
                        <h4 className="text-lg my-3 text-opacity-80">{`GPA ${s.gpa}`}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Schools;
