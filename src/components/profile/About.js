import React from 'react'
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

const About = () => {
    const classes = useStyles()
    
    return(
        <div className="About">
            <Grid container direction="row">
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
        </div>
    )
}

export default About