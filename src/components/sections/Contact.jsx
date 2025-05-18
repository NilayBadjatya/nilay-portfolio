import { RevealOnScroll } from '../RevealOnScroll';
import { email, socialLinks, quickMessages } from '../../data/contactData';

export const Contact = () => {
    return (
        <RevealOnScroll>
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 md:px-8 ">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#3399FF] to-[#0077CC] bg-clip-text text-transparent">
                        Get In Touch
                    </h2>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl mb-4 sm:mb-6 rounded-xl p-6 sm:p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        {socialLinks.map(({ icon: Icon, url }, index) => (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-white hover:text-[#0077CC] transition">
                                <Icon />
                            </a>
                        ))}
                    </div>

                    {/* Quick Messages */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 rounded-xl p-6 sm:p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        {quickMessages.map((msg, index) => (
                            <a
                                key={index}
                                href={`mailto:${email}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`}
                                className="w-full sm:w-auto text-[#EEEEEE] bg-gradient-to-r from-[#3399FF] to-[#0077CC] 
                                            text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                                            font-medium transition relative overflow-hidden border-0
                                            hover:-translate-y-0.5 hover:shadow-[0_0_10px_#0077CC]">
                                {msg.text}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
