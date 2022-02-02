import * as React from 'react';
import {FunctionComponent} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Auction} from '../models/Auction';

export const AuctionCard: FunctionComponent<{ auction: Auction }> = ({auction}) => {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {auction.inboundId} - {auction.outboundId}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Purchase</Button>
            </CardActions>
        </Card>
    );
}
