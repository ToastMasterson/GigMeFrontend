import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Hidden from '@material-ui/core/Hidden'
import {ReactComponent as BandcampIcon} from '../svg/bandcamp.svg'
import {ReactComponent as SoundcloudIcon} from '../svg/soundcloud.svg'
import {ReactComponent as SpotifyIcon} from '../svg/spotify.svg'
import { makeStyles } from '@material-ui/core'

import Activity from './profile/Activity';
import Shows from './profile/Shows'
import Music from './profile/Music'
import Network from './profile/Network'
import About from './profile/About'

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
    mobileHeader: {
        color: 'white',
        marginTop: '10px'
    },
    mobileSocial: {
        backgroundColor: '#4d8bb7',
        color: 'black',
        width: '60%',
        borderRadius: '30px'
    },
    bannerArea: {
        width: '100%',
        height: '80%',
        backgroundImage: `url(${'https://i.imgur.com/DIgvyTp.png'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderBottomStyle: 'solid',
        borderWidth: 'medium',
    },
    mobileBannerArea: {
        width: '100%',
        backgroundImage: `url(${'https://i.imgur.com/DIgvyTp.png'})`,
        backgroundPosition: 'center',
        backgroundSize: 'inherit',
        backgroundRepeat: 'no-repeat',
        borderBottomStyle: 'solid',
        borderWidth: 'medium',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderTopStyle: 'none',
        borderLeftStyle: 'none'
    },
    mobileProfileImage: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderRadius: '50%',
        borderColor: 'white'
    },
    genresLocation: {
        alignItems: 'center'
    },
    bull: {
        margin: '4px',
    },
    sidebar: {
        backgroundColor: '#5497c7eb',
        padding: '10px',
        borderRightStyle: 'solid',
        height: '100%'
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
    },
    tab: {
        color: '#5497c7'
    }
}))


const Profile = () => {

    const classes = useStyles()

    const [value, setValue] = React.useState(0)
    const [view, setView] = React.useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue)
        setView(event.target.innerText)
    }

    const checkTabValue = () => {
        switch(view) {
            case 'ABOUT':
                return <About />
            case 'ACTIVITY':
                return <Activity />
            case 'SHOWS':
                return <Shows />
            case 'MUSIC':
                return <Music />
            case 'NETWORK':
                return <Network />
            default:
                return <Activity />
        }
    }

    return (
        <div className="Profile">
            <CssBaseLine />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'black' }}>
                    <Grid container direction="column">
                        <Hidden xsDown>
                            <Grid item container className={classes.grid} spacing={0} direction="row">
                                <Grid item xs={4} sm={3}>
                                    <img className={classes.profileImage} src="https://f4.bcbits.com/img/a3508620901_16.jpg" alt="profile" />
                                </Grid>
                                <Grid item xs={8} sm={9} container direction="column" style={{ backgroundColor: '#2a2a2d' }}>
                                    <Grid item className={classes.bannerArea} />
                                    <Grid item container>
                                        <Tabs
                                            className={classes.tabs}
                                            value={value}
                                            onChange={handleChange}
                                            centered
                                        >
                                            <Tab className={classes.tab} label="Activity" />
                                            <Tab className={classes.tab} label="Shows" />
                                            <Tab className={classes.tab} label="Music" />
                                            <Tab className={classes.tab} label="Network" />
                                        </Tabs>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Hidden smUp>
                            <Grid item container direction="column">
                                <Grid className={classes.mobileHeader} item container direction="column" alignItems="center">
                                    <Grid item xs={6}>
                                        <img className={classes.mobileProfileImage} src="https://f4.bcbits.com/img/a3508620901_16.jpg" alt="profile" />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5">
                                            Doggone
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Indie/Alternative • Denver, CO
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.mobileSocial} item container direction="row" justify="center">
                                        <FacebookIcon />
                                        <TwitterIcon />
                                        <InstagramIcon />
                                        <BandcampIcon className={classes.icon} />
                                        <SpotifyIcon className={classes.icon} />
                                        <SoundcloudIcon className={classes.icon} />
                                    </Grid>
                                    <Divider className={classes.divider} />
                                </Grid>
                                <Grid item container>
                                    <Tabs
                                        className={classes.tabs}
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                    >
                                        <Tab className={classes.tab} label="Activity" />
                                        <Tab className={classes.tab} label="About" />
                                        <Tab className={classes.tab} label="Shows" />
                                        <Tab className={classes.tab} label="Music" />
                                        <Tab className={classes.tab} label="Network" />
                                    </Tabs>
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Grid item container direction="row">
                            <Hidden xsDown>
                                <Grid item sm={3} xs={4}>
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
                            </Hidden>
                            <Grid item xs={12} sm={9}>
                                { checkTabValue() }
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </div>
    )
}

export default Profile