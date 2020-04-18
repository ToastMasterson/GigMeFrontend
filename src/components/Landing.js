import React from 'react'
import firebase, { auth, provider } from '../firebase.js'
import PropTypes from 'prop-types'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { makeStyles, Box, Tab, Tabs } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1,
        height: '70%',
        width: '80%',
        margin: 'auto'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: 'black',
        backgroundImage: `url(${'https://i.imgur.com/Nw7SyVV.jpg'})`,
        backgroundSize: '100%',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    },
    gridItem: {
        alignItems: 'center'
    },
    header: {
        color: '#c2c2dc',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        // backgroundColor: '#30e2e46b',
        // boxShadow: '0px 0px 30px #30e2e4e8',
        // borderRadius: '60px',
        textShadow: '4px 5px 8px',
        marginBottom: '100px'
    },
    getStarted: {
        color: '#2a2a2d',
        fontFamily: 'Montserrat',
        textShadow: '4px 5px 8px'
    },
    button: {
        backgroundColor: '#5497c7',
        color: '#2a2a2d',
        width: '50%',
        height: '50px'
    },
    divider: {
        width: '3px'
    },
    logo: {
        width: '45%'
    }
}))

const TabPanel = (props) => {
    const { children, value, index, ...other } = props
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            { ...other }
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

const a11yProps = (index) => {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    }
}

const LinkTab = (props) => {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault()
            }}
            { ...props }
        />
    )
}

const Landing = () => {

    const classes = useStyles()
    const [state, setState] = React.useState({
        user: null,
        value: 0
    })

    const handleChange = ( event, newValue ) => {
        setState({ value: newValue })
    }
    const gLogIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user
            setState({ user })
        })
    }

    const signUp = () => {

    }

    return (
        <div className="landing">
            <CssBaseLine />
            <Container className={classes.container} maxWidth='lg'>
                    <Paper className={classes.paper} elevation={3} square={true}>
                        <Grid container className={classes.grid} spacing={1} justify="center">
                            <Grid item xs={12}>
                                <img className={classes.logo} src="https://i.imgur.com/mQWWPgC.png" alt="logo" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.header} gutterBottom variant="h3">
                                    Professional Solutions for the Common Artist
                                </Typography>
                            </Grid>
                            <Divider className={classes.divider} variant="fullWidth"/>
                            <Grid className={classes.gridItem} item xs container justify="center" spacing={2}>
                                <Paper>
                                    <Tabs
                                        variant="fullWidth"
                                        value={state.value}
                                        onChange={handleChange}
                                    >
                                        <LinkTab label="Log In" href="/login" { ...a11yProps(0)} />
                                        <LinkTab label="Sign Up" href="/signup" { ...a11yProps(1)} />
                                    </Tabs>
                                    <TabPanel value={state.value} index={0}>
                                        Log In
                                    </TabPanel>
                                    <TabPanel value={state.value} index={1}>
                                        Sign Up
                                    </TabPanel>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
            </Container>
        </div>
    )
}

export default Landing