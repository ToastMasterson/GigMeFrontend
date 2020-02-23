import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    rendered: {
        padding: '10px'
    },
    post: {
        maxWidth: 500
    },
    postHeader: {
        backgroundColor: '#4a4a4c69'
    },
    header: {
        textAlign: 'center',
        margin: '20px'
    },
    divider: {
        margin: '10px'
    },
}))

const Activity = () => {

    const classes = useStyles()

    return (
        <div className="Activity">
            <Paper className={classes.rendered} square elevation={1}>
                <Typography className={classes.header} variant="h4">
                    Artist Feed
                </Typography>
                <Divider className={classes.divider} />
                <Grid container spacing={3} direction="column" alignItems="center" >
                {[0, 1, 2].map(value => (
                    <Grid item>
                        <Card className={classes.post}>
                            <CardHeader
                                className={classes.postHeader}
                                avatar={
                                    <Avatar aria-label="author" className={classes.avatar}>
                                        D
                                    </Avatar>
                                }
                                title="Doggone"
                                subheader="2/20/2020"
                            />
                            <CardContent className={classes.content}>
                                <Typography variant="body2">
                                    Bicycle rights flexitarian occupy woke hoodie jean shorts. Sustainable dreamcatcher quinoa skateboard crucifix narwhal gastropub. Godard ramps lyft air plant four loko, voluptate hot chicken snackwave flannel cupidatat four dollar toast. Pok pok pariatur aute eiusmod chillwave voluptate neutra tempor kinfolk nostrud dreamcatcher. Art party flexitarian gastropub mustache, fanny pack excepteur in. Cliche aute quis, bespoke dreamcatcher excepteur ut et shaman sed freegan. Umami meh bushwick vice squid sed cold-pressed migas aesthetic chartreuse.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Paper>
        </div>
    )
}

export default Activity