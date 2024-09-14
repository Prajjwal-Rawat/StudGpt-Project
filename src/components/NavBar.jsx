import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";



function NavBar({ isLoggedIn, setIsLoggedIn }) {


    return (
        <div >
            <nav className="w-full flex flex-wrap justify-around items-center bg-slate-800 text-white h-[60px]">

                <Link to='/'>
                <div className="flex mt-2 justify-center items-center space-x-1">
                    <img src="/brandIcon.png" className="w-[30px] h-[30px]" />
                    <h2 className="font-bold cursor-pointer">StudGpt</h2>
                </div>
                </Link>

                <ul className="flex mt-2 gap-10">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>Support</NavLink>
                    </li>
                </ul>

                <div className="space-x-3 flex mt-1">
                    <NavLink to='/login'>
                        <button className={`border-2 px-3 py-1 hover:bg-slate-950 ${isLoggedIn ? 'hidden' : 'flex'}`}>LogIn</button>
                    </NavLink>

                    <NavLink to='/signUp'>
                        <button className={`border-2 px-3 py-1 hover:bg-slate-950 ${isLoggedIn ? 'hidden' : 'flex'}`}>SignUp</button>
                    </NavLink>

                    <NavLink to='/'>
                        <button className={`border-2 px-3 py-1 hover:bg-slate-950 ${isLoggedIn ? 'block' : 'hidden'}`}
                            onClick={() => { setIsLoggedIn(false), toast.success('Logged Out') }}>
                            Log Out
                        </button>
                    </NavLink>

                    <NavLink to='/dashboard'>
                        <button className={`border-2 px-2 py-1  hover:bg-slate-950 ${isLoggedIn ? 'block' : 'hidden'}`}>Dashboard</button>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;