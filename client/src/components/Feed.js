import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import notFound from '../assets/nothing.jpg';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if(categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [categoryId])
  

  if(loading) return <Spinner message='We are adding new ideas to your feed!' />

  if(!pins?.length) {
    return (
      <div>
        <div className='mt-10 mb-10 text-center text-xl' >
          No Pins Found!
        </div>
        <div>
          <img src={notFound} alt='not-found' className='mx-auto' style={{ width: '30rem', height: '30rem' }} />
        </div>
      </div>
    )
  }

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed