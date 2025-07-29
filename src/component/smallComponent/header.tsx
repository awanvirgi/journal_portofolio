import moment from "moment";
import "moment/locale/id";
const Header = ({ page }: { page: number }) => {
    moment.locale('en')
    return (
        <header className="text-sm lg:text-2xl bg-white px-4 pt-6 lg:px-17 lg:pt-11 text-slate-500">
            <div className="flex justify-between">
                <p>{moment().format('dddd , DD MMMM YYYY')}</p>
                <p><span className="block lg:hidden">1</span><span className="hidden lg:block">Pages {page}</span></p>
            </div>
            <hr className="font-bold h-[3px] bg-black border-0 rounded my-1.5" />
            <ul className="text-sm lg:text-2xl cursor-pointer flex lg:gap-x-8 text-blue-600 justify-between lg:justify-end">
                <li ><a className="underline hover:border-r-4 px-2 hover:shadow hover:border-b-4 border-slate-400 hover:-translate-1 hover:no-underline rounded transition-all duration-100" href="#skills">Skills</a></li>
                <li ><a className="underline hover:border-r-4 px-2 hover:shadow hover:border-b-4 border-slate-400 hover:-translate-1 hover:no-underline rounded transition-all duration-100" href="#experiences">Experiences</a></li>
                <li ><a className="underline hover:border-r-4 px-2 hover:shadow hover:border-b-4 border-slate-400 hover:-translate-1 hover:no-underline rounded transition-all duration-100" href="#projects">Projects</a></li>
                <li ><a className="underline hover:border-r-4 px-2 hover:shadow hover:border-b-4 border-slate-400 hover:-translate-1 hover:no-underline rounded transition-all duration-100" href="#ContactMe">Contact Me</a></li>
            </ul>
        </header>
    )
}

export default Header