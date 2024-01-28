// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function WifiQREdit({ params }) {
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch WiFi QR data by ID
                const response = await axios.get(`http://localhost:5000/wifi/edit/${params.id}`);
                const { ssid, password } = response.data;
                
                // Set state with retrieved data
                setSsid(ssid);
                setPassword(password);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update WiFi QR data by ID
            const response = await axios.post(`http://localhost:5000/wifi/edit/${params.id}`, {
                ssid,
                password,
            });

            console.log(response.data);

            // Navigate to the list page
            router.push("/qr_list");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Edit WiFi QR Code</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ssid">SSID</label>
                <input type="text" name="ssid" value={ssid} onChange={(e) => setSsid(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
