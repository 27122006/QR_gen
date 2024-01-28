"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.css';



export default function UserProfile({params}) {
    const router = useRouter();
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');



    
    useEffect(() => {
      const fetchData = async () => {
        
        try {
          const response = await axios.get(`http://localhost:5000/personalQR/profile/${params.id}`);
          setLoading(false);
          setName(response.data.name);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setAddress(response.data.address);
          setWebsite(response.data.website);
          setCompany(response.data.company);
          setPosition(response.data.position);




        } catch (error) {
          console.error('Error fetching data: ', error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:5000/personalQR/edit/${params.id}`, {
          name,
          email,
          phone,
          website,
            address,
          company,
          position,
        });
        console.log(response);
        router.push('/qr_list');
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <>


    <div className={styles.header}>
        {/* Back button */}
        <button className={styles.backButton} onClick={router.back}>
            <img src="/returnBack.png" alt="return Icon" className={styles.icon}/>

            Back                </button>
        <div className={styles.headerContent}>
            <h1>Change Information</h1>
        </div>
    </div>
    
        <div className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-white border-b-2 mt-4	">

            <div className={styles.input_group}>
                <input
                    type="text"
                    className={styles.input}
                    id="Name"
                    value={name}
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
                    value={email}
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
                    value={phone}
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
                    value={address}
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
                    value={website}
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
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
                <label htmlFor="Position" className={styles.user_label}>
                    Position
                </label>
            </div>

            <div className={styles.input_group}>
                <input
                    type="text"
                    className={styles.input}
                    id="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
                <label htmlFor="Company" className={styles.user_label}>
                    Company
                </label>
            </div>
            <div className={styles.button}>
                <button className={styles.button1} onClick={handleSubmit}>Save</button>
            </div>
        </div>

    </>
  );
};


