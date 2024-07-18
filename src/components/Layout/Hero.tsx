import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section
            data-testid="hero"
            className="flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row"
        >
            <div className="mb-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
                <div>
                    <h1 className="mb-10 font-mono text-3xl text-black dark:text-white lg:text-5xl">
                        Hi! My name is <span className="text-orange">Sawan Mukati</span>{" "}
                        and I am a web developer based in Indore.
                    </h1>
                </div>
                <div className="mb-10">
                    <Button name="learn more">Learn more</Button>
                </div>
            </div>
            <div
                data-testid="hero-img"
                className="mb-10 flex w-1/2 items-center justify-center"
            >
                <Image
                    alt="Coding girl"
                    width={600}
                    height={600}
                    src="/boy.webp"
                    loading="eager"
                    decoding="async"
                />
            </div>
        </section>
    );
};

export default Hero;