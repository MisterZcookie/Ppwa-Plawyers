import '../Css/SignIn.css'
import SignUp_Image from '../Assets/SignUp_Image.svg'
import {Link} from 'react-router-dom'


const SignUp = () => {
    
    return (
        <div class="page-content">
		<div class="form-v7-content">
			<div class="form-left">
				<p class="text-1">Sign Up</p>
                <img src={SignUp_Image} alt="form"/>
				<p class="text-2">Privaci policy & Term of service</p>
			</div>
			<form class="form-detail" action="#" method="post" id="myform">
				<div class="form-row">
					<label for="username">USERNAME</label>
					<input type="text" name="username" id="username" class="input-text" required/>
				</div>
				<div class="form-row">
					<label for="your_email">E-MAIL</label>
					<input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-row">
					<label for="password">PASSWORD</label>
					<input type="password" name="password" id="password" class="input-text" required/>
				</div>
				<div class="form-row">
					<label for="comfirm_password">CONFIRM PASSWORD</label>
					<input type="password" name="comfirm_password" id="comfirm_password" class="input-text" required/>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
					<p>Or<Link to="/"><a href='/'>Log In</a></Link></p>
				</div>
			</form>
		</div>
	</div>
    )
}


export default SignUp