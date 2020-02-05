import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1,
        flexFlow: 'row'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerArea: {
        backgroundImage: `url(${'https://i.imgur.com/DIgvyTp.png'})`,
        backgroundSize: '100%', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    profileImage: {
        height: 250,
        backgroundImage: `url(${'https://f4.bcbits.com/img/a3508620901_16.jpg'})`, 
        backgroundSize: '100%', 
        backgroundPosition: 'cover' 
    },
    genresLocation: {
        alignItems: 'center'
    },
    bull: {
        margin: '4px',
    },
    sidebar: {
        backgroundColor: 'white',
        height: '100vh'
    }
}))


const Profile = () => {

    const classes = useStyles()

    return (
        <div className="Profile">
            <CssBaseLine />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'black', height: '100vh' }}>
                    <Paper elevation={2} square={true} variant="outlined">
                        <Grid container className={classes.grid} spacing={0} direction="row">
                            <Grid item xs={3}>
                                <Paper className={classes.profileImage} elevation={5} />
                            </Grid>
                            <Grid className={classes.bannerArea} item xs={9} container direction="column" justify="flex-end">
                                <Grid item>
                                    <Typography variant="h5">
                                        Artist Name
                                    </Typography>
                                </Grid>
                                <Grid className={classes.genresLocation} item container direction="row">
                                    <Grid item>
                                        <Typography variant="h5">
                                            Genres
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.bull} item>
                                        <Typography>•</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5">
                                            Location
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper>
                        <Grid container direction="row">
                            <Grid item xs={3}>
                                <Paper className={classes.sidebar}>
                                    <Grid container direction="column">
                                        asoidf
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper className={classes.rendered}>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Typography>
            </Container>
        </div>
    )
}

export default Profile