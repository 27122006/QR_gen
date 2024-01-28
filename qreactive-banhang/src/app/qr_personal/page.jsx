// Importing necessary modules

"use client";

import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getEmailUser } from '@/components/emailuser';

// Importing styles
import styles from './styles.module.css';

const QRPersonalGenerator = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
    const [Website, setWebsite] = useState('');
    const [Position, setPosition] = useState('');
    const [Company, setCompany] = useState('');

    const [qrImageUrl, setQrImageUrl] = useState('');
    // Router instance
    const router = useRouter();


    // State to track the selected QR code type
    const [selectedType, setSelectedType] = useState(null);

    // Function to handle type selection
    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };

    // Function to navigate to a specific QR code type page
    const navigateToQRType = (type) => {
        router.push(`${type}`);
        handleTypeSelection(type);
    };
    const generateQr = async () => {
        try {
            const emailUser = getEmailUser();
            // Send the link to the backend for QR code generation
            const response = await axios.post('http://localhost:5000/personalQR/generate', {
                name: Name,
                email: Email,
                phone: Phone,
                address: Address,
                website: Website,
                position: Position,
                company: Company,
                emailUser,
            });

            // Assuming the backend responds with the generated QR code URL
            setQrImageUrl(response.data.qrImageUrl);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <>


            <div className={styles.header}>
                {/* Back button */}
                <button className={styles.backButton} onClick={() =>  router.push(`/qr_scanner`)}>
                    <img src="/returnBack.png" alt="return Icon" className={styles.icon}/>

                    Back                </button>
                <div className={styles.headerContent}>
                    <h1>Select type of QR code</h1>
                </div>
            </div>
            <div className={styles.container}>
                <div className="flex-row ">
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_link")}>

                        <img src="/link.png" alt="Link Icon" className={styles.icon}/>
                        Link
                    </button>

                    {/* Button to navigate to QR Text page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_text")}>
                        <img src="/text.png" alt="Text Icon" className={styles.icon}/>

                        Text
                    </button>

                    {/* Button to navigate to QR Personal page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_personal")}>
                        <img src="/vcard.png" alt="Vcard Icon" className={styles.icon}/>

                        Vcard
                    </button>

                    {/* Button to navigate to QR Personal Data */}
                    <button className={styles.button2} onClick={() => navigateToQRType("personalData")}>
                        <img src="/person.png" alt="Person Icon" className={styles.icon}/>

                        Custom
                    </button>

                    {/* Button to navigate to QR List page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_wifi")}>
                        <img src="/wifi.png" alt="Wifi Icon" className={styles.icon}/>

                        Wifi
                    </button>
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_email")}>
                        <img src="/mail.png" alt="Mail Icon" className={styles.icon}/>

                        Email
                    </button>
                </div>
                <div className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-white border-b-2 mt-4	">

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="Name" className={styles.user_label}>
                            Name
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="Email" className={styles.user_label}>
                            Email
                        </label>
                    </div>


                    <div className={styles.input_group}>
                        <input
                            type="tel"
                            className={styles.input}
                            id="Phone"
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <label htmlFor="Phone" className={styles.user_label}>
                            Phone
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Address"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <label htmlFor="Address" className={styles.user_label}>
                            Address
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Website"
                            value={Website}
                            onChange={(e) => setWebsite(e.target.value)}
                            required
                        />
                        <label htmlFor="Website" className={styles.user_label}>
                            Website
                        </label>
                    </div>

                    <div className={styles.input_date}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Position"
                            value={Position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                        />
                        <label htmlFor="Position" className={styles.user_date}>
                            Position
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Company"
                            value={Company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                        <label htmlFor="Company" className={styles.user_label}>
                            Company
                        </label>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.button1} onClick={generateQr}>Generate QR</button>
                    </div>
                    {qrImageUrl && <img src={qrImageUrl} alt="Generated QR Code"/>}
                </div>

            </div>
        </>
    );
};

export default QRPersonalGenerator;