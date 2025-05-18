import { RevealOnScroll } from '../RevealOnScroll';
import { aboutData } from '../../data/aboutData.js';

export const About = () => {
    return (
        <RevealOnScroll>
            <section
                id="about"
                className="min-h-screen flex justify-center items-center py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0077CC] to-[#3399FF] text-center">
                        About Me
                    </h2>

                    {/* About Me Description */}
                    <div className="rounded-xl p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        <p className="text-[#999999] mb-6">
                            {aboutData.description}
                        </p>

                        {/* Skills (Fully Dynamic) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {aboutData.skills.map((skillCategory, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">
                                        {skillCategory.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategory.technologies.map(
                                            (tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-blue-500/10 text-[#3399FF] rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education */}
                        <div className="p-6 rounded-xl border border-[#999999]/50 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>

                            {aboutData.education.map((education, index) => (
                                <ul key={index} className="text-[#999999] mb-5">
                                    <li className="mb-1">
                                        <strong>{education.degree}</strong>
                                    </li>
                                    <li>
                                        {education.university} (
                                        {education.years})
                                    </li>
                                </ul>
                            ))}
                        </div>

                        {/* Work Experience */}
                        <div className="p-6 rounded-xl border border-[#999999]/50 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-[#999999]">
                                {aboutData.workExperience.map((job, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold">
                                            {job.position} @ {job.company}
                                        </h4>
                                        <p>{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
