export default function Accordion() {
    return (
        <>
            <div className="text-2xl text-center mb-5">Our Features</div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Expert Consultancy
                </div>
                <div className="collapse-content">
                    <p>
                        At Techmania, our expert consultancy service is your
                        compass in the ever-evolving tech landscape. Rely on
                        seasoned professionals to guide you through intricate
                        decisions, offering insights that transform your ideas
                        into well-crafted, successful tech events.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Fast Delivery:
                </div>
                <div className="collapse-content">
                    <p>
                        Techmania thrives on efficiency. Our commitment to fast
                        delivery ensures that your tech event comes to life
                        swiftly and seamlessly. From planning to execution, we
                        prioritize timelines, ensuring that your vision is
                        transformed into reality with speed and precision.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Affordable Cost:
                </div>
                <div className="collapse-content">
                    <p>
                        Unlock the potential of exceptional tech events without
                        breaking the bank. Techmania takes pride in offering
                        affordable solutions tailored to your budget. Our
                        commitment to cost-effectiveness ensures that you get
                        the most value from your investment, without
                        compromising on quality.
                    </p>
                </div>
            </div>
        </>
    );
}
