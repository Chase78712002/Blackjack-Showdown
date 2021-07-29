import React from "react";

export default function Login(props) {
    return (
        <div className='login-form'>
            <form>
                <label for='username'>Username: </label>
                <input type="text" id='username' name="username" placeholder="Email" />
                <br/>
                <label for='password'>Password: </label>
                <input type="password" id='password' name="password" placeholder="Password" />
            </form>
            <div className="subtext">
                <a href="#">Sign up</a>
            </div>

        </div>
    )
}