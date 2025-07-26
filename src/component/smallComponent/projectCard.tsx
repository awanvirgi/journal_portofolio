import Image from "next/image"
type projectProps = {
    img: string,
    title: string,
    desc: string,
    tech: string,
    github: string,
    live: string,
    capt:string
}

const ProjectCard = ({ img, title, desc, tech, github, live,capt }: projectProps) => {
    return (
        <li className="grid grid-cols-8 gap-6 grid-flow-row items-start min-h-[160px] hover:border-r-6 transform transition-all border-slate-300 rounded box-content hover:border-b-6 hover:-translate-x-2 hover:-translate-y-2">
            <div className="h-full flex flex-col col-span-2">
                <div className="grow object-cover overflow-hidden relative border border-slate-300">
                    <Image alt="project" className=" aspect-ratio: 16/9 w-full" src={img} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h5 className="text-center mt-4">{capt}</h5>
            </div>
            <div className="col-span-6">
                <h4 className="lg:text-2xl font-semibold mb-2">{title}</h4>
                <p className="lg:text-lg font-light lg:mb-2">{desc}</p>
                <p className="lg:text-lg font-light"><strong className="italic">🛠️ Tech : </strong>{tech}</p>
                <p className="lg:text-lg font-light"><strong className="italic">🔗 Github : </strong><a className="underline hover:text-blue-500" href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
                <p className="lg:text-lg font-light"><strong className="italic">🚀 Live Demo : </strong><a className={`${live === "Available upon request" ? "cursor-not-allowed pointer-events-none" : "underline hover:text-blue-500"}`} href={live} target="_blank" rel="noopener noreferrer">{live}</a></p>
            </div>
        </li>
    )
}

export default ProjectCard