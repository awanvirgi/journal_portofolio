const SkillSection = () => {
    return (
        <div className="bg-white px-4 py-2 lg:px-17 lg:pb-11">
            <div className="gap-6 grid lg:grid-cols-2 grid-cols-1">
                <div className="">
                    <h3 className="lg:text-3xl text-xl font-semibold mb-4">1. Skills</h3>
                    <p className="lg:text-2xl text-base text-justify lg:indent-5 indent-8">Here are the technologies I use to build full-stack and real-time web applications</p>
                    <div className="flex flex-col items-center mt-4">
                        <p className="lg:text-lg text-xs italic">Table 1.1 My Skills</p>
                        <table className="w-full lg:text-xl text-base table-auto border-collapse border border-gray-400">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 px-2 lg:p-[6px]">Category</th>
                                    <th className="border border-gray-400 px-2 lg:p-[6px]">Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} className="border border-gray-400 px-2 lg:p-[6px] text-center">Front-End</td>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">React</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Next.js</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Tailwind CSS</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="border border-gray-400 px-2 lg:p-[6px] text-center">Back-End</td>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Express.js</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Supabase</td>
                                </tr>
                                <tr>
                                    <td rowSpan={1} className="border border-gray-400 px-2 lg:p-[6px] text-center">Database</td>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">MySQL</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="border border-gray-400 px-2 lg:p-[6px] text-center">Design</td>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Figma</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Canva</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="border border-gray-400 px-2 lg:p-[6px] text-center">Others</td>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Solidity</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-2 lg:p-[6px]">Microsoft Office</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 className="lg:text-3xl text-xl font-semibold mb-4">2. Experiences</h3>
                    <div className="mb-4">
                        <h4 className="lg:text-2xl text-base text-justify font-semibold mb-2">2.1 Studi Independent Full-Stack Web Developer at Skilvul</h4>
                        <p className="lg:text-2xl text-base text-justify lg:indent-5 indent-8">From August 2023 to January 2024, I participated in an independent study program at SkilVul, focusing on Full Stack Web Development. During this period, I learned and worked on projects using React.js for the front-end and Express.js for the back-end.</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="lg:text-2xl text-base text-justify font-semibold mb-2">2.2 Laboratory Assistant at Fasilkom Singaperbangsa University Karawang</h4>
                        <p className="lg:text-2xl text-base text-justify lg:indent-5 indent-8">From January 2023 to June 2025 ,I am Assisted lecturers and guided students in practical sessions for courses such as Web-Based Programming, Databases, Algorithms and Data Structures, and Blockchain, while maintaining and updating lab applications and preparing all computers for use.</p>
                    </div>
                </div>
            </div>
            <hr className="font-bold h-[3px] bg-black border-0 rounded mb-1.5 mt-12" />
        </div>
    )
}
export default SkillSection