import Image from "next/image"
type projectProps = {
    img: string,
    title: string,
    desc: string,
    tech: string,
    github: string,
    live: string,
    capt: string
}

const ProjectCard = ({ img, title, desc, tech, github, live, capt }: projectProps) => {
    return (
        <li className="grid lg:grid-cols-8 grid-cols-1 lg:p-0 p-2 lg:gap-6 grid-flow-row items-start min-h-[160px] hover:shadow-lg hover:border-r-6 transform transition-all border-slate-300 rounded box-content hover:border-b-6 hover:-translate-x-2 hover:-translate-y-2">
            <div className="lg:h-full h-56 flex flex-col lg:col-span-2">
                <div className="grow object-cover aspect-video mx-auto w-full max-w-[280px] overflow-hidden relative border border-slate-300">
                    <Image alt="project" className=" aspect-video w-full" src={img} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h5 className="text-center lg:text-lg text-xs italic lg:mt-4 mt-2 lgHmb-0 mb-2">{capt}</h5>
            </div>
            <div className="lg:col-span-6">
                <h4 className="lg:text-2xl font-semibold mb-2">{title}</h4>
                <p className="lg:text-lg font-light lg:mb-2 text-justify">{desc}</p>
                <p className="lg:text-lg font-light"><strong className="italic">Tech : </strong>{tech}</p>
                <div className="leading-[1.2]">
                    <div className="lg:text-lg font-light">
                        <strong className="italic">Github : </strong>
                        <a className="underline hover:text-blue-500" href={github} target="_blank" rel="noopener noreferrer"><span className="lg:inline-block hidden">{github}</span><span className="lg:hidden inline-block underline text-blue-400">Click Here</span></a>
                    </div>
                    <div className="lg:text-lg font-light">
                        <strong className="italic">Live Demo : </strong>
                        <a className={`${live === "Available upon request." ? "cursor-not-allowed pointer-events-none" : "underline hover:text-blue-500"}`} href={live} target="_blank" rel="noopener noreferrer"><span className={`${live == "Available upon request" ? "inline-block" : "hidden lg:inline-block"}`}>{live}</span><span className={`${live == "Available upon request" ? "hidden" : "lg:hidden"} underline text-blue-400`}>Click Here</span></a>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default ProjectCard