import React from 'react'
import { 
    makeStyles, 
    Grid, 
    Typography, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Paper,
    Divider
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    network: {
        padding: '10px',
        height: '100vh'
    },
    card: {
        maxWidth: 345
    },
    img: {
        height: '140px',
        width: '200px',
        backgroundSize: 'cover'
    },
    divider: {
        margin: '10px',
    },
    header: {
        textAlign: 'center',
        margin: '20px'
    },
}))

const Network = () => {

    const classes = useStyles()

    return (
        <div className="Network">
            <Paper className={classes.network}>
                <Typography className={classes.header} gutterBottom variant='h4'>
                    Doggone's Network
                </Typography>
                <Divider className={classes.divider} />
                <Grid item container direction='row' justify='space-evenly' spacing={3}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    className={classes.img} 
                                    image="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/p960x960/65392537_553488098389542_7340394890376773632_o.jpg?_nc_cat=104&_nc_sid=a61e81&_nc_ohc=VP77PmlypdwAX9cszwY&_nc_ht=scontent.fapa1-2.fna&_nc_tp=6&oh=01fba635b648238e7046990331e3e7f7&oe=5F028CC7"
                                    title="Poor Martha"
                                />
                                <CardContent>
                                    <Typography>
                                        Poor Martha
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia 
                                    className={classes.img} 
                                    image="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/p960x960/65392537_553488098389542_7340394890376773632_o.jpg?_nc_cat=104&_nc_sid=a61e81&_nc_ohc=VP77PmlypdwAX9cszwY&_nc_ht=scontent.fapa1-2.fna&_nc_tp=6&oh=01fba635b648238e7046990331e3e7f7&oe=5F028CC7"
                                    title="Poor Martha"
                                />
                                <CardContent>
                                    <Typography>
                                        Poor Martha
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Network