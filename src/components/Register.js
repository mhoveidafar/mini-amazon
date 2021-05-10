import React from 'react';
import TextField from '@material-ui/core/TextField';

const Register = () => {

    const handleSubmit = (Username, Password) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <input type="submit"/>
        </form>

    );
}


// const Register = () => {
//     return (
//         <>
//             <TextField id="outlined-basic" label="First Name" variant="outlined" />
//             <TextField id="outlined-basic" label="Last Name" variant="outlined" />
//             <TextField id="outlined-basic" label="Username" variant="outlined" />
//             <TextField id="outlined-basic" label="Password" variant="outlined" />
//             <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
//             <button>Please register</button>
//         </>
//     );
// }

export default Register;