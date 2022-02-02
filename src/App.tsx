import React from 'react';
import {useDataApi} from './hooks/useDataApi';
import {Box, makeStyles, Typography} from '@material-ui/core';
import {Auction} from './models/Auction';
import {Alert} from '@material-ui/lab';

const useStyles = makeStyles({
    root: {
        padding: 16,
        maxWidth: 1024
    }
});


function App() {

    const [data, isLoading, isError]: [Auction[], boolean, boolean] = useDataApi();

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h2" component="h1">
                React Auction
            </Typography>

            {isError && <Alert severity="error">Error joining the server</Alert>}

            {data?.map(auction =>
                <Typography variant="h3" component="h2" key={auction.id}>
                    {auction.auctionType} : {auction.inboundId} - {auction.outboundId}
                </Typography>
            )}

        </Box>
    );
}

export default App;
