import React from 'react'
import { makeStyles, Paper, Grid, TextField, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    input: {
        width: 150
    },
    bar: {
        padding: 5
    }
}))

const FilterBar = (props) => {

    const classes = useStyles()

    const handleSort = event => {
        props.setSort(event.target.value)
    }
    const handleStates = event => {
        props.setStates(event.target.value)
    }
    const handleCities = event => {
        props.setCities(event.target.value)
    }
    const handleFilter = event => {
        props.setFilter(event.target.value)
    }

    return(
        <Paper className={classes.bar}>
            <Grid item container direction="row" justify="space-evenly">
                <Grid item>
                    <TextField
                        id="sort-select"
                        className={classes.input}
                        select
                        label="Select State"
                        value={props.inputState}
                        onChange={handleStates}
                        variant="outlined"
                        size="small"
                        >
                        <MenuItem value="" disabled>
                            Sort By
                        </MenuItem>
                        <MenuItem value={1}>Colorado</MenuItem>
                        <MenuItem value={2}>California</MenuItem>
                        <MenuItem value={3}>New Jersey</MenuItem>
                        <MenuItem value={4}>Vermont</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                    id="sort-select"
                    className={classes.input}
                    select
                    label="Select City"
                    value={props.inputCity}
                    onChange={handleCities}
                    variant="outlined"
                    size="small"
                    >
                        <MenuItem value="" disabled>
                            Select City
                        </MenuItem>
                        <MenuItem value={1}>Denver</MenuItem>
                        <MenuItem value={2}>Colorado Springs</MenuItem>
                        <MenuItem value={3}>Boulder</MenuItem>
                    </TextField>
                </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Filter by Name" size="small" variant="outlined" value={props.filter} onChange={handleFilter} />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="sort-select"
                            className={classes.input}
                            select
                            label="Sort By"
                            value={props.sortBy}
                            onChange={handleSort}
                            variant="outlined"
                            size="small"
                            >
                            <MenuItem value="" disabled>
                                Sort By
                            </MenuItem>
                            <MenuItem value={1}>Alphabetical</MenuItem>
                            <MenuItem value={2}>Plays</MenuItem>
                            <MenuItem value={3}>Distance</MenuItem>
                        </TextField>
                    </Grid>
            </Grid>
        </Paper>
    )
}

export default FilterBar