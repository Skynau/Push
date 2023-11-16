
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

const Navigation = () => {

    const { dispatch, state } = useContext(Context);
    
    // const [user, setUser] = useState(null); // null - user status unknown
    //                                         // false - user not logged in (but we know that)
    // const dispatch({
    //   type: "user",
    //   payload: null
    // })
    
    const loadUserStatus = async () => {
      const response = await fetch('/api/user', {
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.status === 200) {
            const data = await response.json();
            dispatch({
              type: "user",
              payload: data,
            });
          } else if (response.status === 401) {
            dispatch({
              type: "user",
              payload: false,
            }); // false - user not logged in
          }
        }
        
        useEffect(() => {
              if (state.user === null) {    // load user status anytime user is null, i.e. we don't know his status
                  loadUserStatus();
              }
          }, [state.user])
          


      const handleLogout = async ev => {
      ev.preventDefault();

      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      });

     dispatch({
              type: "user",
              payload: null,
            });
    }


return (
  <div className="nav">
          {console.log(state.user)}

            <div className="nav-brand"></div>
            <div className="nav-action__btn">
                <button>Rent my property</button>
            </div>

            { state.user === undefined 
                ?
              
              <h3>Logged in as {state.user?.first_name}</h3>
              :
              ""
            }

            <div className="nav-profile">
                <div className="profile-message__icon"></div>
                <div className="profile-image">Image here</div>
                <Link to="/">Go Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                  <button className="btn" onClick={ handleLogout }>Logout</button>
            </div>
        </div>
    );
};

export default Navigation;
