import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";


function Template({ title, desc1, desc2, formtype, image, setIsLoggedIn }) {
    return (
        <div className='flex max-w-[1160px] h-[100px] justify-between py-12 mx-auto'>
            <div className='flex flex-col w-[100vw] max-w-[500px]'>

                <div>
                    <h1 className='font-bold text-[1.69rem] leading-[2.37rem]'>{title}</h1>
                    <p className='text-[1.125rem] leading-[1.625rem] mt-3'>{desc1}</p>
                    <p className='text-blue-400 italic'>{desc2}</p>
                </div>

                {formtype === 'LoginForm' ? (<LoginForm setIsLoggedIn={setIsLoggedIn} />) : (<SignUpForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] bg-slate-500 w-full'></div>
                    <p className='text-slate-500 '>Or</p>
                    <div className='h-[1px] bg-slate-500 w-full'></div>
                </div>


                <button className='flex items-center gap-2 transition-all duration-1000 bg-slate-600 font-bold hover:bg-yellow-300 hover:text-slate-700 w-full justify-center py-2'>
                   <FcGoogle /> Sign in with Google
                </button>

            </div>

            <div className='relative'>
                <img className='w-[30rem] h-[25rem] relative z-[20] hover:scale-105 hover:transition-all duration-900' src={image} />
                <div className='bg-slate-400 w-[31rem] h-[25rem] absolute top-2 z-[10]'></div>
            </div>

        </div>
    )
}

export default Template;