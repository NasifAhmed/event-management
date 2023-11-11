import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                setData(await response.json());
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // console.log(data);

    return (
        <>
            <h1 className="text-xl font-semibold text-center mb-5">
                Our Services
            </h1>
            <div className="grid grid-cold-1 md:grid-cols-2 mx-auto justify-items-center content-center gap-10">
                {data &&
                    data.map((data) => {
                        console.log(`Trying to show ${data.name}`);
                        return <ServiceCard key={data.id} data={data} />;
                    })}
            </div>
        </>
    );
}
