import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID a55e92dae447881f986c3884a5f2c5832779c2b78fff8d0ae056be46b7ace5f9'
    }
});