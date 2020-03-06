import React from 'react'
import { makeStyles, Grid, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    about: {
        height: '100vh'
    },
    grid: {
        width: '70%',
        margin: 'auto'
    },
    section: {
        padding: '10px'
    }
}))

const About = () => {
    const classes = useStyles()

    return(
        <div className="About">
            <Paper className={classes.about}>
                <Grid className={classes.grid} container direction="column" alignItems="center">
                    <Grid className={classes.section} item container direction="column">
                        <Grid item xs={3}>
                            <Typography className={classes.subtitle2} variant="subtitle1">
                                About:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Lorem ipsum dolor amet you probably haven't heard of them unicorn tofu, 
                                heirloom tote bag glossier jianbing poke shoreditch VHS literally selvage. 
                                Hexagon polaroid chicharrones VHS iPhone small batch.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.section} item container direction="column">
                        <Grid item xs={3}>
                            <Typography className={classes.subtitle2} variant="subtitle1">
                                Members:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Tyler Masterson - Vocals, Guitar, Bass
                                EzDrummer - Drums
                                Motu Symphonic Instrument - Orchestral Instruments
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.section} item container direction="column">
                        <Grid item xs={3}>
                            <Typography className={classes.subtitle2} variant="subtitle1">
                                Influences:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Mike Kinsella,
                                Evan Weiss,
                                College
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default About