import React, { useState, useEffect } from 'react';
import '../../Styles/Hasham.css'
//icons
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Chat from './Chat';



const Messaging = () => {
    const [messaging, setMessaging] = useState(false);
    const [Profiles, setProfiles] = useState([]);
    console.log(Profiles);
    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            method: 'GET',
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
            },
        })
            .then((response) => response.json())
            .then((data) => setProfiles(data.slice(117, 124)));
    }, []);
    return (
        <div
            className='Messaging'
            style={
                messaging
                    ? { transform: 'translateY(0)' }
                    : { transform: 'translateY(90%)' }
            }
        >
            <div className='header_messaging'>
                <div className='messaging_head'>
                    {/* <img
                        src='https://media-exp1.licdn.com/dms/image/C4E35AQEIVkoUWgLFvw/profile-framedphoto-shrink_100_100/0/1597096649541?e=1623816000&v=beta&t=kPWuy6CfRj_9ky14jRJtuusU_JzsQZV5E9hPwemwXa0'
                        alt=''
                    /> */}
                    <h5>Messaging</h5>
                    <div className='icon'>
                        <MoreHorizOutlinedIcon />
                        <EditOutlinedIcon className='icon' />
                        <div className='icon' onClick={() => setMessaging(!messaging)}>
                            <MdKeyboardArrowDown />
                        </div>
                    </div>

                </div>

            </div>

            <hr />
            <div className='messagin_body'>
                <input type='text' placeholder='Search messages' />
                {Profiles.slice(0, 10).map((p) => (
                    <a href={'/profile/' + p.name + '/' + p._id}>
                        <Chat p={p} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Messaging;
