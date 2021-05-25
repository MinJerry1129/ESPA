import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EmailContainer from './email-container';

export default function Infographics({ containEmail = false }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // Adjust selected thumb cuz email container is inserted and removed at the first position
    if (containEmail) {
      setSelected(selected + 1);
    } else {
      setSelected(selected - 1);
    }
  }, [containEmail])

  return !containEmail ? (
    <Carousel showStatus={false} showThumbs={false} selectedItem={selected} onChange={setSelected}>
      <div>
        <img src='/infographics/ESPA for players-01.png' />
      </div>
      <div>
        <img src='/infographics/ESPA for Devs-01.png' />
      </div>
      <div>
        <img src='/infographics/ESPA for Designers-01.png' />
      </div>
    </Carousel>
  ) : (
    <Carousel showStatus={false} showThumbs={false} selectedItem={selected} onChange={setSelected}>
      <EmailContainer />
      <div>
        <img src='/infographics/ESPA for players-01.png' />
      </div>
      <div>
        <img src='/infographics/ESPA for Devs-01.png' />
      </div>
      <div>
        <img src='/infographics/ESPA for Designers-01.png' />
      </div>
    </Carousel>
  );
}
