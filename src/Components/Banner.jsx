import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const Banner = () => {
    const images = [
        { url: "https://i.ibb.co.com/WzB68bY/g4.jpg" },
        { url: "https://i.ibb.co.com/Zh80GVj/g5.jpg" },
        { url: "https://i.ibb.co.com/0s8MJfq/g3.jpg" },
        { url: "https://i.ibb.co.com/rGCkHfR/g2.jpg" },
        { url: "https://i.ibb.co.com/QrDfxj4/g1.jpg" },
    ];

    return (
        <section className="overflow-x-hidden">
            <div className="w-[95%] md:w-5/6 mx-auto">
                <Slider
                    imageList={images}
                    width="100%"
                    height={window.innerWidth < 768 ? "40vh" : "70vh"}
                />
            </div>
        </section>
    );
};

export default Banner;
