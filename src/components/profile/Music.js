import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Daydream from '../../music/Daydream.mp3'
import { Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    page: {
        height: '100vh'
    },
    albumCover: {
        maxWidth: '200px'
    },
    releases: {
        padding: '10px'
    },
    img: {
        width: '100%'
    },
    trackList: {
        width: '100%',
        color: 'white'
    },
    player: {
        width: '70%',
        backgroundColor: '#171d29e8'
    },
    controls: {
        width: '100%'
    }

}))

const Music = () => {

    const classes = useStyles()

    return (
        <div className="Music">
            <Grid className={classes.page} container direction="row" justify="center">
                <Grid item container direction="column" alignItems="center" xs={6}>
                    <Grid item>
                        <Typography variant='h2'>
                            Releases
                        </Typography>
                    </Grid>
                    <Grid item container className={classes.releases} direction="row" spacing={3}>
                        <Grid item>
                            <Paper className={classes.albumCover}>
                                <img className={classes.img} src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/p960x960/22181434_1465231406847812_5649201187861429351_o.jpg?_nc_cat=107&_nc_sid=a61e81&_nc_ohc=H78pFTIW6ZAAX8wNuYZ&_nc_ht=scontent.fapa1-2.fna&_nc_tp=6&oh=65c2fbe44da35442864e08b62259765c&oe=5EC801E6" />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.albumCover}>
                                <img className={classes.img} src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/p960x960/22181434_1465231406847812_5649201187861429351_o.jpg?_nc_cat=107&_nc_sid=a61e81&_nc_ohc=H78pFTIW6ZAAX8wNuYZ&_nc_ht=scontent.fapa1-2.fna&_nc_tp=6&oh=65c2fbe44da35442864e08b62259765c&oe=5EC801E6" />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.albumCover}>
                                <img className={classes.img} src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/p960x960/22181434_1465231406847812_5649201187861429351_o.jpg?_nc_cat=107&_nc_sid=a61e81&_nc_ohc=H78pFTIW6ZAAX8wNuYZ&_nc_ht=scontent.fapa1-2.fna&_nc_tp=6&oh=65c2fbe44da35442864e08b62259765c&oe=5EC801E6" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" justify="center" alignItems="center" xs={6}>
                    <Paper className={classes.player}>
                        <ReactAudioPlayer className={classes.controls} src={Daydream} controls controlsList="nodownload" />
                        <List className={classes.trackList}>
                            <ListItem button>
                                <ListItemText primary="DayDream" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="No Money" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Far Too Long" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Music