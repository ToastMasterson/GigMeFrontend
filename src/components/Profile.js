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
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import {ReactComponent as BandcampIcon} from '../svg/bandcamp.svg'
import {ReactComponent as SoundcloudIcon} from '../svg/soundcloud.svg'
import {ReactComponent as SpotifyIcon} from '../svg/spotify.svg'
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
        borderBottomStyle: 'solid',
        borderWidth: 'medium',
    },
    profileImage: {
        height: 250,
        backgroundImage: `url(${'https://f4.bcbits.com/img/a3508620901_16.jpg'})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        borderBottomStyle: 'solid',
        borderRightStyle: 'solid',
        borderWidth: 'medium',
    },
    genresLocation: {
        alignItems: 'center'
    },
    bull: {
        margin: '4px',
    },
    sidebar: {
        backgroundColor: '#5497c7eb',
        height: '100vh',
        padding: '20px',
        borderRightStyle: 'solid'
    },
    tabs: {
        width: '100%',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    icon: {
        width: 20,
        height: 24,
        marginLeft: '5px'
    },
    divider: {
        margin: '10px'
    },
    subtitle2: {
        fontSize: '1.2rem'
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
                            <Grid item xs={9} container style={{ backgroundColor: '#2a2a2d' }}>
                                <Grid xs={12} className={classes.bannerArea} item container direction="column" justify="flex-end">
                                    
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
                                        <Grid item>
                                            <Typography variant="h5">
                                                Doggone
                                            </Typography>
                                        </Grid>
                                        <Grid className={classes.genresLocation} item container direction="row">
                                            <Grid item>
                                                <Typography variant="subtitle1">
                                                    Indie/Alternative
                                                </Typography>
                                            </Grid>
                                            <Grid className={classes.bull} item>
                                                <Typography>•</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    Denver, CO
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row">
                                            <FacebookIcon />
                                            <TwitterIcon />
                                            <InstagramIcon />
                                            <BandcampIcon className={classes.icon} />
                                            <SpotifyIcon className={classes.icon} />
                                            <SoundcloudIcon className={classes.icon} />
                                        </Grid>
                                        <Divider className={classes.divider} />
                                        <Grid item>
                                            <Typography className={classes.subtitle2} variant="subtitle2">
                                                About:
                                            </Typography>
                                            <Typography variant="body2">
                                                Lorem ipsum dolor amet you probably haven't heard of them unicorn tofu, 
                                                heirloom tote bag glossier jianbing poke shoreditch VHS literally selvage. 
                                                Hexagon polaroid chicharrones VHS iPhone small batch.
                                            </Typography>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                        <Grid item>
                                            <Typography className={classes.subtitle2} variant="subtitle2">
                                                Members:
                                            </Typography>
                                            <Typography variant="body2">
                                                Tyler Masterson - Vocals, Guitar, Bass
                                                EzDrummer - Drums
                                                Motu Symphonic Instrument - Orchestral Instruments
                                            </Typography>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                        <Grid item>
                                            <Typography className={classes.subtitle2} variant="subtitle2">
                                                Influences:
                                            </Typography>
                                            <Typography variant="body2">
                                                Mike Kinsella,
                                                Evan Weiss,
                                                College
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper className={classes.rendered} square elevation={1}>
                                    hellloo
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