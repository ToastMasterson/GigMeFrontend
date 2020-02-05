import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
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
        height: '80%',
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
    },
    tabs: {
        width: '100%'
    }
}))


const Profile = () => {

    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className="Profile">
            <CssBaseLine />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'black', height: '100vh' }}>
                    <Paper elevation={5} square={true}>
                        <Grid container className={classes.grid} spacing={0} direction="row">
                            <Grid item xs={3}>
                                <Paper className={classes.profileImage} elevation={3} square/>
                            </Grid>
                            <Grid item xs={9} container >
                                <Grid xs={12} className={classes.bannerArea} item container direction="column" justify="flex-end">
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
                                <Grid item xs={12} container direction="row">
                                <Tabs
                                    className={classes.tabs}
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Overview" />
                                    <Tab label="Shows" />
                                    <Tab label="Music" />
                                    <Tab label="Network" />
                                </Tabs>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper>
                        <Grid container direction="row">
                            <Grid item xs={3}>
                                <Paper className={classes.sidebar} square elevation={3}>
                                    <Grid container direction="column">
                                        asoidf
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper className={classes.rendered} square elevation={1}>
                                    
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