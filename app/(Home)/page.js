import Link from 'next/link';
import ImgTilt from './ImgTilt';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';

const page = () => {
    return (
        <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-3 py-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h4 className="text-base font-semibold tracking-wide text-blue-400 md:text-xl">
                        Professional ATS-Optimized Resume Builder
                    </h4>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl 2xl:text-6xl">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Create Your Perfect Resume
                        </span>
                    </h1>
                </div>

                <div className="space-y-4">
                    <p className="text-lg text-gray-300">
                        Create ATS-friendly resumes that get you noticed. Our intelligent builder ensures your resume passes through applicant tracking systems with a 92%+ success rate.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <FaCheckCircle className="text-green-500" />
                            <span>ATS-Optimized Templates</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <FaCheckCircle className="text-green-500" />
                            <span>Real-time Formatting</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <FaCheckCircle className="text-green-500" />
                            <span>Professional Design</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <FaCheckCircle className="text-green-500" />
                            <span>Instant PDF Export</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                    <Link 
                        href={'/editor'} 
                        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all hover:scale-105 md:w-auto"
                    >
                        <span className="font-medium">Create My Resume</span>
                        <IoIosRocket className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    {/* <a 
                        href="https://github.com/yourusername/resumave" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 text-gray-200 transition-all hover:bg-gray-700 md:w-auto"
                    >
                        <FaGithub />
                        <span>View on GitHub</span>
                    </a> */}
                </div>
            </div>
            
            <div className="flex w-full max-w-lg items-center justify-center">
                <ImgTilt>
                    <img 
                        src="/sample.png" 
                        alt="Resume Preview" 
                        className="rounded-lg shadow-2xl transition-all hover:shadow-blue-500/20"
                    />
                </ImgTilt>
            </div>
        </div>
    );
};

export default page;
