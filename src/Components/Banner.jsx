import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const Banner = () => {
    const images = [
        { url: "https://i.ibb.co.com/WzB68bY/g4.jpg" },
        { url: "https://i.ibb.co.com/47f79bf/g5.jpg" },
        { url: "https://i.ibb.co.com/0s8MJfq/g3.jpg" },
        { url: "https://i.ibb.co.com/rGCkHfR/g2.jpg" },
        { url: "https://i.ibb.co.com/QrDfxj4/g1.jpg" },
    ];

    return (
        <section className="container mx-auto overflow-x-hidden dark:bg-gray-900">
            <div className="w-[95%] md:w-11/12 mx-auto">
                <Slider
                    imageList={images}
                    width="100%"
                    height={window.innerWidth < 768 ? "40vh" : "60vh"}
                />
            </div>
        </section>
    );
};

export default Banner;
