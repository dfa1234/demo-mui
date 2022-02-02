export interface Auction {
    id: number;
    auctionType: string;
    roundTrip: boolean;
    startDate: Date;
    endDate: Date;
    bidingStarted: boolean;
    quantity: number;
    numberOfWinners: number;
    isPaymentWasDone: boolean;
    viewersCount: number;
    numberOfBidders: number;
    isFollow: boolean;
    withTimingFilter: boolean;
    isLive: boolean;
    currentMinPrice: number;
    originalPrice: number;
    discount: number;
    maxPrice: number;
    minBidInc: number;
    startingPrice: number;
    currency: string;
    currencySymbol: string;
    inboundId: string;
    outboundId: string;
    imageUrl: string;
}
