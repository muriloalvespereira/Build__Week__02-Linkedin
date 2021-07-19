import React, { useEffect, useState } from 'react';
import '../../Styles/Hasham.css';

const PeopleAlsoViewed = () => {
    const [Profiles, setProfiles] = useState([]);
    //console.log(Profiles);
    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            method: 'GET',
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
            },
        })
            .then((response) => response.json())
            .then((data) => setProfiles(data.slice(43, 54)));
    }, []);
    return (
        <div className='people_also_viewed ml-auto mt-5 p-4' style={{
            border: '1px solid black', borderRadius: '10px'
        }}>
            <p style={{ fontSize: '1.5em', fontWeight: '500', }}>People also viewed</p>
            {
                Profiles.slice(3, 10).map((profile) => (
                    <div className='profile_container py-2' key={profile._id}>
                        <img src={profile.image} alt={profile.name + ' ' + profile.surname} />
                        <div className='profile_info'>
                            <a href={'@' + profile.name + '/' + profile._id}>
                                <div className='name'>{profile.name + ' ' + profile.surname}</div>
                                <div
                                    className='speciality text-muted'
                                    style={{ fontSize: '1.0em' }}
                                >
                                    {profile.title}
                                </div>
                            </a>
                            <button className='connect_button px-2 py-0 mt-1'>Connect</button>
                        </div>
                    </div>
                ))
            }
            <div style={{ textAlign: 'center' }} className='mt-4'>Show More</div>
        </div >
    );
};

export default PeopleAlsoViewed;
