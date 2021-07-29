import React, { useState } from "react";
//import { useHistory } from "react-router"
import ErrorAlert  from "../atoms/ErrorAlert";
import { postUser } from "../utils/api";



export default function CreateUserForm() {

    //const history = useHistory();

    const initialFormState = {
        username: "username",
        password: "password",
        email: "",
        coins: 100
    }
    const [formData, setFormData] = useState({ ...initialFormState });
    const [userError, setUserError] = useState(null);


    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postUser(formData).catch((error) =>{
            setUserError(error);
        })
    };

    return (
        <div>
            <h1>User Registration Form</h1>
            <ErrorAlert error={userError} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Enter Your username:
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={formData.username} />
                </label>
                <label htmlFor="password">
                    Enter Your password:
                    <input
                        id="password"
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={formData.password} />
                </label>
                <label htmlFor="email">
                    Enter email:
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}