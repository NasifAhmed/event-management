import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function ServiceDetails() {
    const { id } = useParams();
    console.log(`ID is : ${id}`);
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                const foundData = data.find(
                    (element) => element.id === parseInt(id, 10)
                );
                setServiceData(foundData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    console.log(`Service data : ${JSON.stringify(serviceData)}`);

    return (
        <>
            {serviceData && (
                <div className=" flex flex-col gap-10 max-w-[500px] mx-auto justify-center items-start px-5 md:px-0">
                    <h1 className="text-2xl font-black">{serviceData.name}</h1>
                    <h3 className="font-bold">
                        Price : {serviceData.price}&#36;
                    </h3>
                    <h1 className="text-lg">{serviceData.short_description}</h1>
                    <h1 className="textlg">{serviceData.long_description}</h1>
                    <button
                        className="btn"
                        onClick={() => toast.success("Succeccfully Bought!")}
                    >
                        Buy
                    </button>
                </div>
            )}
        </>
    );
}
