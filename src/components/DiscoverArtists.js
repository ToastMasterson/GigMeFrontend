import React from 'react'

import { 
    makeStyles, 
    CssBaseline, 
    Container, 
    Paper, 
    Typography, 
    Grid, 
    List, 
    ListItem, 
    ListItemText, 
    Divider,
    Card, CardMedia, CardContent 
} from '@material-ui/core'

import FilterBar from './DiscoverArtists/FilterBar'

const genresList = [
    "Alternative", 
    "Electronic", 
    "Rock", 
    "Indie", 
    "Jazz", 
    "Blues", 
    "R&B", 
    "Hip-Hop", 
    "Metal", 
    "Country", 
    "Bluegrass", 
    "Pop"
]

const artistList = [
    {
        image: "https://4.bp.blogspot.com/-GcVBKmNeuTw/Wt-OeNSt6CI/AAAAAAAArUE/yUOBeWI4Icg3ATVgjxFM3Y2egExjMGISQCLcBGAs/s1600/josie1.jpg", 
        name: "Band 1"
    },
    {
        image: "https://4.bp.blogspot.com/-GcVBKmNeuTw/Wt-OeNSt6CI/AAAAAAAArUE/yUOBeWI4Icg3ATVgjxFM3Y2egExjMGISQCLcBGAs/s1600/josie1.jpg", 
        name: "Band 2"
    },
    {
        image: "https://4.bp.blogspot.com/-GcVBKmNeuTw/Wt-OeNSt6CI/AAAAAAAArUE/yUOBeWI4Icg3ATVgjxFM3Y2egExjMGISQCLcBGAs/s1600/josie1.jpg", 
        name: "Band 3"
    },
    {
        image: "https://4.bp.blogspot.com/-GcVBKmNeuTw/Wt-OeNSt6CI/AAAAAAAArUE/yUOBeWI4Icg3ATVgjxFM3Y2egExjMGISQCLcBGAs/s1600/josie1.jpg", 
        name: "Band 4"
    },
    {
        image: "https://4.bp.blogspot.com/-GcVBKmNeuTw/Wt-OeNSt6CI/AAAAAAAArUE/yUOBeWI4Icg3ATVgjxFM3Y2egExjMGISQCLcBGAs/s1600/josie1.jpg", 
        name: "Band 5"
    }
]

const useStyles = makeStyles(theme => ({
    banner: {
        height: 150,
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/05/14/17/27/denver-767050_960_720.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end"
    },
    bannerText: {
        marginLeft: "50px",
        fontFamily: 'Montserrat',
        color: '#c2c2dc',
        textShadow: '0px 0px 7px black'
    },
    subheader: {
        fontFamily: 'Montserrat',
        color: "white",
    },
    genreList: {
        color: "white",
        fontFamily: 'Neuton'
    },
    display: {
        backgroundColor: 'white'
    },
    card: {
        maxWidth: 200,
    },
    image: {
        height: 140,
    }

}))

const DiscoverArtists = () => {

    const classes = useStyles()

    const [sortBy, setSortBy] = React.useState('')
    const [filterQuery, setFilterQuery] = React.useState('')
    const [inputState, setInputState] = React.useState('')
    const [inputCity, setInputCity] = React.useState('')

    const setSort = input => {
        setSortBy(input);
    }
    const setStates = input => {
        setInputState(input);
    }
    const setCities = input => {
        setInputCity(input);
    }
    const setFilter = input => {
        setFilterQuery(input)
    }
    
    return(
        <div className="DiscoverArtists">
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'black', height: '100vh' }}>
                    <Paper style={{ backgroundColor: 'black' }}>
                        <Grid container direction="column" justify="center" spacing={2}>
                            <Grid item>
                                <Paper square elevation={5} className={classes.banner}>
                                    <Typography className={classes.bannerText} variant="h3">
                                        Denver Artists
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item container direction="row">
                                <Grid item xs={3}>
                                    <Typography className={classes.subheader} variant="h5">
                                        Genres
                                    </Typography>
                                    <Divider gutterBottom />
                                    <List>
                                        {genresList.map(genre => (
                                            <ListItem>
                                                <ListItemText disableTypography className={classes.genreList} primary={genre} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item container direction="column" xs={9} spacing={3}>
                                    <FilterBar 
                                        setSort={setSort} 
                                        setStates={setStates} 
                                        setCities={setCities}
                                        setFilter={setFilter}
                                        state={inputState} 
                                        city={inputCity} 
                                        sort={sortBy} 
                                        filter={filterQuery} 
                                    />
                                    <Grid item container direction="row" justify="space-evenly" spacing={2}>
                                        {artistList.map(artist => (
                                            <Grid item xs={3}>
                                                <Card className={classes.card}>
                                                    <CardMedia className={classes.image} image={artist.image}/>
                                                    <CardContent>
                                                        <Typography>
                                                            {artist.name}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>    
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Typography>
            </Container>
        </div>
    )
}

export default DiscoverArtists