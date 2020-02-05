import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feed: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    box: {
        margin: 20
    },
    divider: {
        width: '100%',
        marginBottom: 20
    },
    subHeader: {
        margin: 10
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    },
    control: {
        padding: theme.spacing(2),
    },
    profileImage: {
        width: 200,
        height: 200
    },
    postImage: {
        width: 128,
        height: 128
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    media: {
        height: 150,
    },
    details: {
        display: 'flex',
        flexDirection: 'row'
    },
    cover: {
        width: 150
    },
    content: {
        flex: '1 0 auto'
    }
}));

const Dashboard = () => {
    
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div className="Dashboard">
            <CssBaseLine />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'black', height: '100vh' }}>
                    <Paper 
                        elevation={2} 
                        square={true}
                        style={{ 
                            backgroundImage: `url(${'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&w=1000&q=80'})`, 
                            backgroundSize: '100%', 
                            backgroundPosition: 'cover',
                            height: '130px'
                        }}
                    >
                        <Grid container className={classes.root} spacing={2} direction="row" justify="center">
                            <Grid item>
                                <Paper 
                                    className={classes.profileImage} 
                                    elevation={3} 
                                    square={true} 
                                    style={{ 
                                        backgroundImage: `url(${'https://f4.bcbits.com/img/a3508620901_16.jpg'})`, 
                                        backgroundSize: '100%', 
                                        backgroundPosition: 'cover' 
                                    }} 
                                />
                            </Grid>
                            <Grid item xs={12} sm container >
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography className={classes.subHeader} gutterBottom variant="h2">
                                        Welcome, Doggone!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Container className={classes.feed} maxWidth="md">
                        <Box className={classes.box} component="span" m={1}>
                            <Typography gutterBottom variant="h4">Community Feed</Typography>
                        </Box>
                        <Divider className={classes.divider} variant="middle" />
                        <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
                            {[0, 1, 2].map(value => (
                                <Grid item xs={12} className={classes.root}>
                                    <Paper className={classes.paper}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase className={classes.postImage}>
                                                    <img className={classes.img} alt="complex" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/wood-event-poster-template-c27dd2f0b2d00fc0bf5fbafe0feef1be.jpg?ts=1561505702" />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        Author
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        Subtitle
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Description Lorem Ispom yada yada
                                                    </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Date</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                              </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Typography>
            </Container>
        </div>
    )    
}

export default Dashboard