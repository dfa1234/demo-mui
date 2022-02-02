import * as React from 'react';
import {FunctionComponent} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Auction} from '../models/Auction';
import {CardMedia} from '@mui/material';

export const AuctionCard: FunctionComponent<{ auction: Auction }> = ({auction}) => {
    return (
        <Card sx={{minWidth: 275}} variant="outlined">
            <CardMedia
                component="img"
                height="140"
                image={auction.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {auction.inboundId} - {auction.outboundId}
                </Typography>
                <Typography gutterBottom variant="body2">
                    {auction.viewersCount} viewing this
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <Button variant="outlined">Now from {auction.currencySymbol} {auction.currentMinPrice}</Button>
            </CardActions>
        </Card>
    );
}
