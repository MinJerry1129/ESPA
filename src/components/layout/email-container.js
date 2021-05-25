import React, { useState } from 'react';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const API_KEY = 'fnAEBtrtA0ACCKMQJyHpLwOYc0bu65P8iQwWXJpi';

const request = async (email, unsubscribe = false) => {
  const headers = new Headers();

  headers.append('Authorization', `Bearer ${API_KEY}`);
  headers.append('Content-Type', 'application/json');

  let subQuery =
    'mutation Subscribe($email: String!) {\n  subscribe(email: $email)\n}';
  let unsubQuery =
    'mutation Unsubscribe($email: String!) {\n  unsubscribe(email: $email)\n}';

  return fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: unsubscribe ? unsubQuery : subQuery,
      variables: { email: email },
    }),
  }).then((response) => response.json());
};

const subscribe = async (email) => {
  try {
    const res = await request(email);
    if (res.data.subscribe) {
      alert('Subscribed!');
    } else {
      alert('Email has already subscribed');
    }
  } catch (e) {
    alert('Server error');
  }
};

const unsubscribe = async () => {
  try {
    const res = await request(email, true);
    if (res.data.unsubscribe) {
      alert('Unsubscribed!');
    } else {
      alert('Email does not exist on mailing list');
    }
  } catch (e) {
    alert('Server error');
  }
};

export default function EmailContainer() {
  const [email, setEmail] = useState('');
  return (
    <div className='flex flex-col justify-center overflow-hidden text-center text-white h-full' style={{ zIndex: 2 }}>
      <span className='align-middle font-awkward text-5xl leading-4'>
        EVERYONE IS A PLAYER
      </span>
      <br />

      <input
        placeholder='Where can we reach you?'
        type='email'
        id='email'
        className='from-control'
        className='w-4/5 lg:w-2/3 xl:w-2/3 rounded-md text-center p-2 block mx-auto mt-4 text-black'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='email'
      />
      <button
        type='button'
        className='w-4/5 lg:w-2/3 xl:w-2/3 block rounded-full p-2 mx-auto mt-4'
        style={{ backgroundColor: '#F0D86B', color: '#8337E1' }}
        onClick={() => {
          if (validateEmail(email)) {
            subscribe(email);
          }
        }}
      >
        START
      </button>
    </div>
  );
}
