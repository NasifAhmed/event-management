import toast from "react-hot-toast";

export default function Subscribe() {
    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-5">
                <h1 className="text-xl font-semibold">
                    Subscribe to our newletter for offers !
                </h1>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="input input-bordered"
                        />
                        <button
                            className="btn"
                            onClick={() => {
                                toast.success("Subscription Successful");
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
