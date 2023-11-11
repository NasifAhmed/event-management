import { useNavigate } from "react-router-dom";

export default function ServiceCard({ data }) {
    const { id, name, image, short_description, price } = data;
    console.log(`Recieving ${name}`);
    const navigate = useNavigate();

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
