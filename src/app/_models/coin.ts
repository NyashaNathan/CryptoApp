export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    max_supply: number;
    last_updated: Date;
    genesis_date: Date;
}
