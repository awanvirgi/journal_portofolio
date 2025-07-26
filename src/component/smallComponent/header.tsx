import moment from "moment";
import "moment/locale/id";
const Header = () => {
    moment.locale('en')
    return (
        <header className="text-sm lg:text-2xl">
            <div className="flex justify-between">
                <p>{moment().format('dddd , DD MMMM YYYY')}</p>
                <p><span className="block lg:hidden">1</span><span className="hidden lg:block">Pages 1</span></p>
            </div>
            <hr className="font-bold h-[3px] bg-black border-0 rounded my-1.5" />
            <ul className="text-sm lg:text-2xl cursor-pointer flex gap-x-4 text-blue-600 justify-between lg:justify-end">
                <li className="underline hover:bg-blue-400 hover:text-white p-2 hover:no-underline rounded transition-all duration-100">Projects</li>
                <li className="underline hover:bg-blue-400 hover:text-white p-2 hover:no-underline rounded transition-all duration-100">Skills</li>
                <li className="underline hover:bg-blue-400 hover:text-white p-2 hover:no-underline rounded transition-all duration-100">Experiences</li>
                <li className="underline hover:bg-blue-400 hover:text-white p-2 hover:no-underline rounded transition-all duration-100">Contact Me</li>
            </ul>
        </header>
    )
}

export default Header