import React, { useState, useEffect } from 'react';
import '../../Styles/Hasham.css'
import { FaRegEdit, FaSearch } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { GoSettings } from 'react-icons/go'
import Chat from './Chat';



const Messaging = () => {
    const [messaging, setMessaging] = useState(false);
    const [Profiles, setProfiles] = useState([]);
    // console.log(Profiles);
    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            method: 'GET',
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
            },
        })
            .then((response) => response.json())
            .then((data) => setProfiles(data.slice(85, 95)));
    }, []);
    return (
        <div
            className='Messaging'
            style={
                messaging
                    ? { transform: 'translateY(0)' }
                    : { transform: 'translateY(93%)' }
            }
        >
            <div className='header_messaging'>
                <div className='messaging_head'>
                    <img
                        src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'
                        alt='profile picture'
                    /></div>
                <div className="pr-auto titleSize"> <p>Messaging</p></div>
                <div className='icon1'>
                    <BsThreeDots className=' ml-auto' /></div>
                <div> <FaRegEdit className='icon2' /></div>
                <div className='icon' onClick={() => setMessaging(!messaging)}>
                    <MdKeyboardArrowUp />
                </div>
            </div>


            <div className='messagin-body'>

                <input type='text' className='search-message' />
                <span className=' search-bar'><FaSearch className='search-icon' />Search messages <GoSettings className='setting-icon' /></span>
                {Profiles.slice(0, 10).map((person) => (
                    <a href={'/userprofile/' + person.name + '/' + person._id} key={person._id}>
                        <Chat person={person} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Messaging;
