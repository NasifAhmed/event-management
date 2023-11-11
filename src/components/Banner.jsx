import { useEffect, useState } from "react";
import Test from "../pages/Test";

export default function Banner() {
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

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    {/* <img
                        src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    /> */}
                    <Test data={data} />
                    <div>
                        <h1 className="text-5xl font-bold">Techmania</h1>
                        <p className="py-6 md:max-w-[500px]">
                            Organizing tech events at gigabit speed since 2020.
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
