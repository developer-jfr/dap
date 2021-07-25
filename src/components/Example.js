import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Example() {
const [photos, setPhotos] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [fetching, setIsFetching] = useState(true)


   useEffect(() => {
      axios.get(` https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=${currentPage}`)
      .then(res => {
        setPhotos(res.data.data);
        setCurrentPage(prevState => prevState + 1)
        
      })
      .finally( () => setIsFetching(false))
     
   }, [fetching])

   useEffect(() => {
     document.addEventListener('scroll', scrollHandler)
     return () => {
         document.removeEventListener('scroll', scrollHandler)
     }
   }, [])

   const scrollHandler = (e) => {
       if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
           setIsFetching(true)
       }
   }
   
    return (
        <div>
            {photos.map(photo =>
                <div key={photo.id}>
                    <div>{photo.address}</div>
                    <div>{photo.title}</div>
                    <div>{photo.text_6}</div>
                </div>
                
                )}
        </div>
    )
}

export default Example
