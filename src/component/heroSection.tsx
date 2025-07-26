'use client'

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Header from "./smallComponent/header";

const HeroSection = () => {
    const [hiddenTooltip, setHiddenTooltip] = useState(true)
    return (
        <div className="bg-white px-4 py-2 lg:px-17 lg:py-11">
            <Header />
            <h1 className="text-4xl lg:text-[115px] font-bold mt-16">
                <TypeAnimation
                    sequence={[
                        '',
                        100,
                        'PRTO',
                        100,
                        'POTR',
                        200,
                        'PORTO',
                        500,
                        'PORTOFOLIO',
                        5000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h1>
            <h2 className="text-2xl lg:text-5xl font-medium font-animate">Virgiawan Sanria</h2>
            <hr className="font-bold h-[3px] bg-black border-0 rounded mt-20 mb-1.5" />
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 grid-flow-row lg:gap-6 ">
                <div className="col-span-2 text-sm lg:text-[22px] font-light flex flex-col justify-between my-1 lg:my-0">
                    <ul className="lg:mb-0 mb-4">
                        <li>
                            <span>Email : </span><a className="underline lg:no-underline text-blue-600 lg:text-black lg:hover:underline lg:hover:text-blue-600" target="_blank" href={"mailto:virgiawansanria@gmail.com"}>virgiawansanria@gmail.com</a>
                        </li>
                        <li>
                            <span>Github : </span> <a className="underline lg:no-underline text-blue-600 lg:text-black lg:hover:underline lg:hover:text-blue-600" target="_blank" href={"https://github.com/awanvirgi"}>github.com/awansanria</a>
                        </li>
                        <li>
                            <span>LinkedIn : </span> <a className="underline lg:no-underline text-blue-600 lg:text-black lg:hover:underline lg:hover:text-blue-600" target="_blank" href={"www.linkedin.com/in/virgiawan-sanria-8766b0250"}>Virgiawan Sanria</a>
                        </li>
                    </ul>
                    <div className="lg:self-start self-center">
                        <span>
                            <a className="transition-all lg:text-xl text-xs underline animate-pulse text-blue-700 lg:bg-transparent lg:hover:bg-red-500 lg:hover:text-white rounded hover:no-underline p-2" href="">CV (PDF)</a>
                        </span>
                    </div>
                </div>
                <div className="col-span-3">
                    <hr className="font-bold h-[3px] bg-black border-0 rounded my-1.5" />
                    <div className="lg:text-2xl text-sm text-justify mt-4 lg:mt-0">
                        <span className="font-semibold">Abstract. </span>

                        Hi I'm <span className="font-animate m-0">Virgiawan Sanria</span> An enthusiastic
                        <span
                            className="bg-amber-200 cursor-pointer relative inline-block px-1 group" onClick={() => setHiddenTooltip((prev) => !prev)}>
                            Web Developer
                            <div className={`font-light group-hover:opacity-100 duration-200 transition-opacity absolute left-0 top-full mt-1 border border-slate-600 bg-slate-100 p-2 rounded shadow-2xl min-w-[170px] lg:min-w-[220px] opacity-0`}>
                                <div className="flex items-center">
                                    <h5 className="lg:text-base text-xs">Client</h5>
                                </div>
                                <hr className="my-1.5" />
                                <p className="lg:text-base text-xs text-start">U means "Developer" right?</p>
                            </div>
                        </span>. I enjoy delivering innovative solutions through every web project I work on. Let's explore my achievements and creations in the world of web."

                    </div>
                    <p className="lg:text-2xl text-sm font-light mt-2 whitespace-nowrap">keyword: front-end, back-end, real-time, web app, portfolio</p>
                </div>
            </div>
            <hr className="font-bold h-[3px] bg-black border-0 rounded mb-1.5 lg:mt-8 mt-4" />
        </div>
    )
}

export default HeroSection