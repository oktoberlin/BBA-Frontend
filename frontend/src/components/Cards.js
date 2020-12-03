import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import SelectAllRoundedIcon from '@material-ui/icons/SelectAllRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center: {
      textAlign: 'center',
      fontSize: '15px',
    },
    cardMargin: {
      margin: '0',
    }
  }));
  
const Cards = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container m={0} justify='center'>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <DeveloperModeRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Mobile Developer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <LaunchRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Product Designer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <SelectAllRoundedIcon fontSize='large' color='action' />
                    <div className={classes.cardMargin}>
                    Software Engineer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <AccountTreeIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Project Manager
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <StorageRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Back-End Developer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <DevicesRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Front-End Developer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <BorderColorRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Designer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.center}>
                    <CodeRoundedIcon fontSize="large" color='action' />
                    <div className={classes.cardMargin}>
                    Fullstack Developer
                    </div>
                    </Typography>
                    
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }

 
export default Cards;