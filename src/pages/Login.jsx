import Template from '../components/Template'
import LoginImg from '../assets/Login.jpg'


function Login({setIsLoggedIn}){
    return(
        <div>
            <Template
            setIsLoggedIn = {setIsLoggedIn}
            title={'Welcome Back to StudGpt'}
            desc1={'StudyGpt is an AI language model designed to assist with a variety of tasks'}
            desc2={'This will help you in your study and in your logic thinking'}
            formtype={'LoginForm'}
            image={LoginImg}/>
        </div>
    )
}

export default Login;