import React from 'react';
import {useDataApi} from './hooks/useDataApi';
import {Auction} from './models/Auction';
import {Alert, Box, CircularProgress, Typography} from '@mui/material';
import {AuctionCard} from './components/AuctionCard';


function App() {

    const [data, isLoading, isError]: [Auction[], boolean, boolean] = useDataApi();

    return (
        <Box sx={{height:'100vh'}}>
            <Typography variant="h5" component="h1">
                React Auction
            </Typography>

            {isError && <Alert severity="error">Error joining the server</Alert>}

            {isLoading && <CircularProgress/>}

            {data?.map(auction =>
                <AuctionCard key={auction.id} auction={auction}/>
            )}

        </Box>
    );
}

export default App;
