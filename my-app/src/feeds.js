import React, { useEffect, useState } from 'react';
import Feed from "./feed";
const Feeds = () => {
    const [feeds, setFeeds] = useState([])

    const URL = 'https://picsum.photos/v2/list'
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setFeeds(data))
            .catch(err => console.error(err));
        }
        
        useEffect(() => {
            getFeed();
            
        }, [])
    
     
        return(
            <div className='feed'>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }

export default Feeds;
