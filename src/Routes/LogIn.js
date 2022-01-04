import '../Css/SignIn.css'
import LogIn_Image from '../Assets/LogIn_Image.svg'
import {Link} from 'react-router-dom'


const LogIn = () => {
    
    return (
        <div class="page-content">
		<div class="form-v7-content">
			<div class="form-left">
				<p class="text-1">Log In</p>
                <img src={LogIn_Image} alt="form"/>
				<p class="text-2">Privaci policy & Term of service</p>
			</div>
			<form class="form-detail" action="#" method="post" id="myform">
				<div class="form-row">
					<label for="username">USERNAME</label>
					<input type="text" name="username" id="username" class="input-text" required/>
				</div>
				
				<div class="form-row">
					<label for="password">PASSWORD</label>
					<input type="password" name="password" id="password" class="input-text" required/>
				</div>
				
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="LogIn"/>
					<p>Or<Link to="/signUp"><a href='/signUp'>Register</a></Link></p>
				</div>
			</form>
		</div>
	</div>
    )
}


export default LogIn