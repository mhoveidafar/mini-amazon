import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Signin = () => {
    return (
        <>
            <div>Welcome to Shopping Store</div>
            <Box component="span" display="block"><TextField id="outlined-basic" label="Username" variant="outlined" /></Box>
            <Box component="span" display="block"><TextField id="outlined-basic" label="Password" variant="outlined" /></Box>
            <Box component="span" display="block"><button onClick={event => window.location.href = '/products'}>sign in</button></Box>
            <Box component="span" display="block"><button onClick={event => window.location.href = '/register'}>Register</button></Box>
        </>
    );
}

export default Signin;