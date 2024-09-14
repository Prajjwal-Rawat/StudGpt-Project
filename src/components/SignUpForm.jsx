import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function SignUpForm({setIsLoggedIn}) {


    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const [formData, setFormData] = useState(

        {
            firstName: '',
            lastName: '',
            email: '',
            createPassword: '',
            confirmPassword: '',
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
        if(formData.createPassword != formData.confirmPassword){
            toast.error("Password Doesn't match");
            return;
        }
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success('Account is created');
    }

    const [student, setStudent] = useState(true);
    

    function HandleSelect(){
        setStudent(true);
    }



    return (
        <div>
            <form onSubmit={HandleSubmit} className="flex h-auto flex-col gap-y-2 mt-4">
            
                <div className="flex transition-all duration-1000 border-2 w-[13rem] px-3 py-0 rounded-[120px] justify-center bg-slate-700">

                    <span onClick={HandleSelect} className= {`px-5 transition-all duration-700 cursor-pointer rounded-[30px] flex items-center justify-center ${student ? 'bg-slate-900' : ''}`}>Student</span>
                    <span onClick={() => {setStudent(false)}} className= {`px-5 py-3 transition-all duration-700 cursor-pointer rounded-[30px] flex items-center justify-center ${student ? '' : 'bg-slate-900'}`}>Instructor</span>

                </div>

                <div className="flex mt-1">
                    <div>

                        <label className="text-[0.875rem] leading-[1.37rem]">First Name <sup className="text-red-500">*</sup></label>
                        <input className="border-none outline-none p-[10px] bg-slate-600 rounded-[0.5rem]"
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            onChange={HandleChange}
                            value={formData.firstName} />

                    </div>

                    <div>

                        <label className="text-[0.875rem] leading-[1.37rem]">Last Name <sup className="text-red-500">*</sup></label>
                        <input className="border-none outline-none p-[10px] bg-slate-600 w-full rounded-[0.5rem]"
                            required 
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            onChange={HandleChange}
                            value={formData.lastName} />

                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-[0.875rem] leading-[1.37rem]">Email Address<sup className="text-red-500">*</sup></label>
                    <input className="border-none outline-none p-[10px] bg-slate-600 w-full rounded-[0.5rem]"
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={HandleChange}
                        value={formData.email} />
                </div>

                <div className="flex justify-between relative">
                    <div>

                        <label>Create Password<sup className="text-red-500">*</sup></label>
                        <input className="border-none outline-none p-[10px] bg-slate-600 rounded-[0.5rem]"
                            required
                            type={isVisible ? 'text' : 'password'}
                            name="createPassword"
                            placeholder="Create Password"
                            onChange={HandleChange}
                            value={formData.createPassword} />

                        <span className="absolute top-[2.3rem] left-[11rem] cursor-pointer"
                        onClick={() => setIsVisible(!isVisible)}>{isVisible ? (<IoEyeOffSharp fontSize={22} />) : (<IoEyeSharp fontSize={22} />)}
                        </span>

                    </div>

                    <div>
                        <label>Confirm Password<sup className="text-red-500">*</sup></label>
                        <input className="border-none outline-none p-[10px] bg-slate-600 w-full rounded-[0.5rem]"
                            required
                            type={confirmVisible ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={HandleChange}
                            value={formData.confirmPassword} />

                        <span className="absolute top-[2.3rem] right-[0.4rem] cursor-pointer"
                        onClick={() => setConfirmVisible(!confirmVisible)}>{confirmVisible ? (<IoEyeOffSharp fontSize={22} />) : (<IoEyeSharp fontSize={22} />)}
                        </span>
                    </div>

                </div>

                <div>
                    <button className="bg-yellow-400 w-full py-2 mt-2 font-bold transition-all duration-500 text-slate-800 hover:bg-yellow-500">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;