import React from 'react';
import { Button } from '@material-ui/core';
import Cards from '../components/Cards'
import Typography from '@material-ui/core/Typography';

const style = {
    background: '#a163db',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  };

const Home =() => {
    return (
        <div className="container mt-5 mb-2">
            <div>
                <h2>Choose your skills</h2>
                <Typography variant="body1" component="h3" color='textSecondary' fontSize='12px'>
                    We will show you relevant gigs associated with your skills set
                </Typography>
            </div>
            <Cards  />
            <Button style={style} variant='contained' fullWidth={true} type="button" color='white'>Next</Button>
        </div>
    )
};

export default Home;