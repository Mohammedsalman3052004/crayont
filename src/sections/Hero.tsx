import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} alt="Design Example 1"  />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="Design Example 2"  />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Salman" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Riyaz" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-bold rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 pt-8">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
                </p>
                <form className="flex border mx-auto border-white/15 rounded-full p-3 mt-8 max-w-lg">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-1 md:flex-1 w-full" />
                    <button className="border rounded-full px-4 h-10 font-semibold bg-lime-400 text-black whitespace-nowrap">
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
