import React from 'react'
import { signup, signin, signout } from '../redux/actions/auth'
import PropTypes from 'prop-types'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import {ReactComponent as GoogleIcon} from '../svg/google.svg'
import { makeStyles, Box, Tab, Tabs, TextField } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


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

const Landing = ({ signup, signin, signout, auth, authMsg }) => {

    const classes = useStyles()
    const [state, setState] = React.useState({
        user: auth.user,
        value: 0,
        email: "",
        password: ""
    })

    const handleFormChange = (event) => {
        setState({ [event.target.name]: [event.target.value] })
    }

    const handleTabChange = ( event, newValue ) => {
        setState({ value: newValue })
    }
    const gLogIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user
            setState({ user })
        })
    }

    const emailAndPasswordLogIn = () => {
        auth.signInWithEmailAndPassword()
        .then((result) => {
            const user = result.user
            setState({ user })
        })
    }

    const emailAndPasswordRegister = () => {
        auth.createUserWithEmailAndPassword()
        .then((result) => {
            const user = result.user
            setState({ user })
        })
    }

    const gRegister = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user
            setState({ user })
        })
    }
    return (
        <div className="landing">
            {state.user !== undefined ? <Redirect to="/dashboard" /> : null }
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
                                <Paper style={{width: '30rem'}}>
                                    <Tabs
                                        variant="fullWidth"
                                        value={state.value}
                                        onChange={handleTabChange}
                                    >
                                        <LinkTab label="Log In" href="/login" { ...a11yProps(0)} />
                                        <LinkTab label="Sign Up" href="/signup" { ...a11yProps(1)} />
                                    </Tabs>
                                    <TabPanel value={state.value} index={0}>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField onChange={handleFormChange} name="email" variant="outlined" size="small" label="Email" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField onChange={handleFormChange} name="password" variant="outlined" size="small" label="Password" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button onClick={emailAndPasswordLogIn} variant="outlined">Log In</Button>
                                            </Grid>
                                            <Divider variant="fullWidth" />
                                            <Grid item xs={12}>
                                                <Button onClick={gLogIn} variant="outlined">
                                                    <GoogleIcon style={{width: 30, marginRight: 5}} />
                                                    Sign in with Google
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={state.value} index={1}>
                                    <Grid container alignItems="center" spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField onChange={handleFormChange} name="email" variant="outlined" size="small" label="Email" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField onChange={handleFormChange} name="password" variant="outlined" size="small" label="Password" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button onClick={emailAndPasswordRegister} variant="outlined">Register</Button>
                                            </Grid>
                                            <Divider variant="fullWidth" />
                                            <Grid item xs={12}>
                                                <Button onClick={gRegister} variant="outlined">
                                                    <GoogleIcon style={{width: 30, marginRight: 5}} />
                                                    Sign up with Google
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authMsg: state.authReducer.authMsg,
        auth: state.firebaseReducer.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (email, password) => dispatch(signup(email, password)),
        signin: (email, password, callback) =>
        dispatch(signin(email, password, callback)),
        signout: () => dispatch(signout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)