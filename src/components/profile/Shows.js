import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const columns = [
    { id: 'flyer', label: '', minWidth: 170, align: 'center' },
    { id: 'title', label: 'Title', minWidth: 170, align: 'center' },
    { id: 'date', label: 'Date', minWidth: 100, align: 'center' },
    { id: 'venue', label: 'Venue', minWidth: 170, align: 'center' },
    { id: 'time', label: 'Time', minWidth: 170, align: 'center' },
  ]

const useStyles = makeStyles({
    paper: { width: '100%' },
    container: { height: '100vh' },
    row: { height: '150px' },
    img: { width: '100%', maxWidth: '100px' }
})

const createData = (flyer, title, date, venue, time) => {
    return { flyer, title, date, venue, time }
}

const rows = [
    createData('https://free-psd-templates.com/wp-content/uploads/2018/09/Rock-Live-Concert-Event-Flyer-Template-Free-PSD.jpg', 'Show 1', '2/20/2020', 'Hi-Dive', '7:00PM'),
    createData('https://images.template.net/2688/Free-Rock-Concert-Flyer-Template-440x570-1.jpg', 'Show 2', '3/15/2020', 'Hi-Dive', '7:00PM'),
    createData('https://images.template.net/2695/Free-Rock-Concert-Fest-Flyer-Template-440x570-1.jpg', 'Show 3', '5/25/2020', 'Hi-Dive', '7:00PM'),
    createData('flyer', 'Show 4', '5/25/2020', 'Hi-Dive', '7:00PM'),
    createData('flyer', 'Show 5', '5/25/2020', 'Hi-Dive', '7:00PM'),
    createData('flyer', 'Show 6', '5/25/2020', 'Hi-Dive', '7:00PM'),
    createData('flyer', 'Show 7', '5/25/2020', 'Hi-Dive', '7:00PM')
]

const Shows = () => {

    const classes = useStyles()

    return (
        <div className="Shows">
            <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow className={classes.row} hover role="checkbox" tabIndex={-1} key={row.title}>
                                        {columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                column.id === 'flyer'
                                                    ? <TableCell key={column.id} align={column.align}>
                                                            <img className={classes.img} src={value} alt="flyer" />
                                                    </TableCell>
                                                    : <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Shows