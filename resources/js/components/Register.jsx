import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function Register(props) {
    const { user, setUser } = useContext(UserContext);
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        setErrors({});

        try {
            const response = await axios.post("/register", values);
            const response_data = response.data;
            setUser(null);
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    setErrors(error.response.data.errors);
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (

        <form className='form' action="/register" method="post" onSubmit={ handleSubmit }>
            <label htmlFor="first_name">First name:</label>
            <input
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
            />
            
            {errors.first_name ? (
                <div className="errors">
                    {errors.first_name.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}

            <br />
            <label htmlFor="last_name">Last name:</label>
            <input
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
            />
            
            {errors.last_name ? (
                <div className="errors">
                    {errors.last_name.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}

            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            
            {errors.email ? (
                <div className="errors">
                    {errors.email.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}

            <br />
            <label htmlFor="phone_number">Phone number:</label>
            <input
                type="text"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
            />
            
            {errors.phone_number ? (
                <div className="errors">
                    {errors.phone_number.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}

            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            
            {errors.password ? (
                <div className="errors">
                    {errors.password.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}

            <br />
            <label htmlFor="password_confirmation">Confirm pasword:</label>
            <input
                type="password"
                name="password_confirmation"
                value={values.password_confirmation}
                onChange={handleChange}
            />
            
            {errors.password_confirmation ? (
                <div className="errors">
                    {errors.password_confirmation.map((error, i) => (
                        <div key={i} className="error">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}
            <br />

            <button>Register</button>
        </form>
    );
}
