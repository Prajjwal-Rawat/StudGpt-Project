import Template from '../components/Template'
import SignUpImg from '../assets/signup.jpg'


function SignUp({setIsLoggedIn}){
    return(
        <div>
            <Template
            setIsLoggedIn = {setIsLoggedIn}
            title={'Join The AI Powered Platform StudGpt to Upgrade Your Skills'}
            desc1={'StudyGpt is an AI language model designed to assist with a variety of tasks'}
            desc2={'This will help you in your study and in your logic thinking'}
            formtype={'signUpform'}
            image={SignUpImg}/>
        </div>
    )
}

export default SignUp;