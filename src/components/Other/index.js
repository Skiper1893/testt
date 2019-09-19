import React from "react";
import auth from '../../utils/authtest';

function Other(props) {
    return (
        <div>
            <h1>Logout Page</h1>
            <button
                onClick={() => {
                    auth.logout(() => {
                        console.log(auth.isAuthenticated())
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Other