import mainImage from "../assets/IMG_6405.jpg";
import {motion, useScroll, useTransform} from "framer-motion"
const Hero = () => {
    const SECTION_HEIGHT = 1500;

    const CenterImage = () => {
        const {scrollY} = useScroll();
        return (
            <motion.div

                className="sticky top-0 h-screen w-full"
                style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
        );
    };

    return (
        <div
            className="relative w-full"
            style={{
                height: `calc(${SECTION_HEIGHT}px + 100vh)`,
            }}
        >
            <CenterImage />
        </div>
    );
};

export default Hero;
