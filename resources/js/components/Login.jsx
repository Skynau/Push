import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Login(props) {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const { user, setUser } = useContext(UserContext);


    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await axios.post('/login', values);
            const response_data = response.data;
            setUser(null)
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    setErrors(error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;

            }
        }
    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }
  const navigate = useNavigate();

    useEffect(()=>{
      if (user) {
        navigate('/');
      }
    },[user])

    return (
        <form action="/login" method="post" onSubmit={ handleSubmit }>

            Email:<br />
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
            <br />
            {
                errors.email
                    ? <div className="errors">{ errors.email.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }

            Password:<br />
            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
            <br />
            {
                errors.password
                    ? <div className="errors">{ errors.password.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }

            <button>Login</button>

        </form>
    );
}