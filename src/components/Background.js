import React, { useState, useEffect } from 'react';

//- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
//- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random

const Background = () => {
    const dayjs = require('dayjs')

    //Hook to get api
    const [posts, setPosts] = useState([
    ]);
    useEffect(() => {
        const timer = setInterval(() => {
            fetch('http://worldtimeapi.org/api/ip')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    //Formatting the time
    var settime = posts.datetime;
    var formattedDate = dayjs(settime).format('hh:mm');

    return (
        <div className="posts-container">
            <h1>Time {formattedDate}</h1>
            <h1>Day of the week {posts.day_of_week}</h1>
            <h1>Day of the year {posts.day_of_year}</h1>
            <h1>Week Number {posts.week_number}</h1>
            <h1>Current Timezone {posts.timezone}</h1>
            <h1>Current Timezone Abbrivation {posts.abbreviation}</h1>
        </div>
    );
 };

    
export default Background;