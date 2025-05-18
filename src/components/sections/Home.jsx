import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <RevealOnScroll>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">
                        Hi, I am{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399FF] to-[#0077CC]">
                            Nilay
                        </span>
                    </h1>
                    <p className="text-[#999999] text-lg mb-8 max-w-lg mx-auto">
                        A passionate and results-driven Computer Engineering
                        student with an interest in software design and backend
                        development. Always eager to tackle new challenges,
                        learn, and create impactful solutions.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-[#3399FF] to-[#0077CC] text-[#EEEEEE] px-6 py-3 rounded-full font-medium transition relative overflow-hidden
                                    hover:-translate-y-0.2 hover:shadow-[0_0_15px_#0077CC] cursor-pointer">
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#0077CC]/50 text-[#0077CC] px-6 py-3 rounded-full font-medium transition-all duration-200 relative overflow-hidden 
                              hover:-translate-y-0.2 hover:shadow-[0_0_15px_#0077CC] hover:bg-[0_0_15px_#0077CC] cursor-pointer">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
