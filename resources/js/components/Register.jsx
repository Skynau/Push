import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';


export default function Register(props) {

    const [values, setValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        phone_number: ''
    })

    const [errors, setErrors] = useState({});

    const { user, setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {

        event.preventDefault();

       
        setErrors({});

        try {
            const response = await axios.post('/register', values);
            const response_data = response.data;
            setUser(null)
            // dispatch({
            //         type: "user",
            //         payload: null,
            //          });
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
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
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            First name:<br />
            <input type="text" name="first_name" value={ values.first_name } onChange={ handleChange } />
            <br />
            {
                errors.name
                    ? <div className="errors">{ errors.name.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }

            Last name:<br />
            <input type="text" name="last_name" value={ values.last_name } onChange={ handleChange } />
            <br />
            {
                errors.name
                    ? <div className="errors">{ errors.name.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }


            Email:<br />
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
            <br />
            {
                errors.email
                    ? <div className="errors">{ errors.email.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }

            Phone number:<br />
            <input type="text" name="phone_number" value={ values.phone_number } onChange={ handleChange } />
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

            Confirm pasword:<br />
            <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />
            <br />
            {
                errors.password_confirmation
                    ? <div className="errors">{ errors.password_confirmation.map((error, i) => <div key={ i } className="error">{ error }</div> ) }</div>
                    : ''
            }

            <button>Register</button>

        </form>
    );
}