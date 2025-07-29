import Image from "next/image";
import Header from "./smallComponent/header";
import ProjectCard from "./smallComponent/projectCard";

const ProjectSection = () => {
    return (
        <section id="projects" className="bg-white px-4 py-2 lg:px-17 lg:pb-11">
            <h3 className="lg:text-3xl text-xl font-semibold mb-6 mt-4">3. Projects</h3>
            <ul className="grid grid-cols-1 grid-flow-row lg:gap-4 gap-4">
                <ProjectCard
                    img={"/images/tehPoci.png"}
                    title={"3.1 Teh Poci Franchise Order (2022)"}
                    desc={"Simple site to promote and register Teh Poci franchise."}
                    tech={"HTML, PHP, CSS, MySQL"}
                    github={"https://github.com/awanvirgi/teh_poci.git"}
                    live={"Available upon request."}
                    capt={"Figure 3.1 Teh Poci Website"}
                />
                <ProjectCard
                    img={"/images/skilhealth.png"}
                    title={"3.2 Skilhealth (2023)"}
                    desc={"Helps patients book doctors and request ambulances online."}
                    tech={"React, Express.js, Redux, MySQL."}
                    github={"https://github.com/skilhealth/fe-skilhealth.git"}
                    live={"Available upon request."}
                    capt={"Figure 3.2 Skilhealth"}
                />
                <ProjectCard
                    img={"/images/aquamonitor.png"}
                    title={"3.3 Aquamonitor (2025)"}
                    desc={"Feeds fish and monitors water quality in real-time."}
                    tech={"ESP8266, pH & Temp Sensors, Next.js, Supabase."}
                    github={"https://github.com/awanvirgi/aquamonitor.git"}
                    live={"Available upon request."}
                    capt={"Figure 3.3 Aquamonitor"}
                />
                <ProjectCard
                    img={"/images/anonymz.png"}
                    title={"3.4 Anonymz (2025)"}
                    desc={"Anonymous Realtime Chat with Presence and Auto-Match."}
                    tech={"Next.js, Tailwind CSS, Supabase."}
                    github={"https://github.com/awanvirgi/anomyz-chat.git"}
                    live={"https://anonymz-chat.vercel.app"}
                    capt={"Figure 3.4 Anonymz"}
                />
            </ul>
        </section>
    )
}

export default ProjectSection;