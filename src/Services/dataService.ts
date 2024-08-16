import { Customer, ImageResponse } from "../types/customer";
import data from '../mockData.json'
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_apiKey;
export async function fetchCustomers(): Promise<Customer[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
}

export async function fetchImages(): Promise<ImageResponse[]> {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 9, client_id: apiKey },
    });
  
    return response.data.map((photo: any) => { return { srcUrl: photo.urls.small, id: photo.id } });
}

