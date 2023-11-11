import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

export default function Home() {
    return (
        <>
            <Banner />
            <div>
                <Services />
            </div>
            <div>
                <Accordion />
            </div>
            <div>
                <Subscribe />
            </div>
        </>
    );
}
