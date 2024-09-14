import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    )

    function HandleChange(event) {
        const { name, value } = event.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    function HandleSubmit(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success('Loged In');
    }

    return (
        <div>
            <form onSubmit={HandleSubmit} className="flex flex-col relative w-full gap-y-2 mt-4">
                
                    <label className="text-[0.875rem] leading-[1.37rem]">Email Address <sup className="text-red-500">*</sup></label>
                    <input className="border-none outline-none p-[10px] bg-slate-600 w-full rounded-[0.5rem]"
                        required
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={HandleChange}
                    />
                

                
                    <label className="text-[0.875rem] leading-[1.37rem]">Password <sup className="text-red-500">*</sup></label>
                    <input className="border-none  outline-none p-[10px] bg-slate-600 w-full rounded-[0.5rem]"
                        required
                        type={isVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter Your Password"
                        value={formData.password}
                        onChange={HandleChange}
                    />

                    <span className=" cursor-pointer absolute top-[8rem] right-3 " onClick={() => setIsVisible(!isVisible)}>{isVisible ? (<IoEyeOffSharp fontSize={23} />) : (<IoEyeSharp fontSize={23} />)}</span>

                

                <div className="flex justify-end text-slate-400 mt-[-5px] hover:text-blue-600 cursor-pointer">Forgot Password</div>

                <div>
                    <button className="w-full transition-all duration-500 mt-2 bg-yellow-300 text-slate-900 font-bold py-2 hover:bg-yellow-500">Login In</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;