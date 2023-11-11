import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceCard({ data }) {
    const { id, name, image, short_description, price } = data;
    console.log(`Recieving ${name}`);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div
                className="card max-w-[384px] bg-base-100 shadow-xl "
                data-aos="fade-up"
            >
                <figure>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <p className="font-bold text-lg">{price}&#36;</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate(`/service/${id}`)}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
