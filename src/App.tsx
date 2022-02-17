import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { AuctionCard } from './components/AuctionCard';
import { useDataApi } from './hooks/useDataApi';
import { Auction } from './models/Auction';

const styles = {
    defaultMargin: {mx: 2, my: 4},
    centerLoading: {display: "flex", justifyContent: "center"}
};

function App() {

    const [auctions, isLoading, isError] = useDataApi<Auction[]>();

    return (
        <Box>
            <Typography variant="h3" component="h1" sx={styles.defaultMargin} align="center">
                demo-mui
            </Typography>

            {isError && <Alert sx={styles.defaultMargin} severity="error">Error joining the server</Alert>}

            {isLoading && <Box sx={styles.centerLoading}><CircularProgress/></Box>}

            {auctions?.map(auction =>
                <Box sx={styles.defaultMargin} key={auction.id}>
                    <AuctionCard auction={auction}/>
                </Box>
            )}

        </Box>
    );
}

export default App;
