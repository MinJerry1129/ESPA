import { useState, useEffect } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

import Button from '../components/Button';

const Home = () => {
  usePageTitle('Home');
  const [showAdd, setShowAdd] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'ESPA Homepage',
    title: 'Home | ESPA',
    description:
      'ESPA is the first casual esports platform that lets you take you & your skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game.',
  };

  return (
    <div className="w-full flex flex-col justify-center px-5 lg:px-20">
      <Head>
        <meta
          name="description"
          content="ESPA is the first casual esports platform that lets you take you & your skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game."
        />
        <meta property="og:title" content="Home | ESPA" />
        <meta
          property="og:description"
          content="ESPA is the first casual esports platform that lets you take you & your skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game."
        />
        <meta property="og:url" content="https://espa.digitalax.xyz" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ESPA4play" />
        <meta name="twitter:title" content="ESPA Homepage" />
        <meta
          name="twitter:description"
          content="ESPA is the first casual esports platform that lets you take you & your skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game."
        />
        <meta name="twitter:image" content="https://espa.digitalax.xyz/back.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <div className="flex flex-col-reverse items-center relative justify-center">
        <div className="text-center md:text-left md:absolute left-0 w-2/4">
          <p className="my-10 md:w-1/2 2xl:w-2/5 text-base md:text-xs lg:text-sm xl:text-base leading-extra-28">
            WE ARE INTRODUCING FOR THE FIRST TIME EVER INDIE AND MOD “CASUAL ESPORTS”.
            <br/>
            <br/>
            OUR MISSION IS TO LIBERATE FASHION AND GAMING WITH MOD CULTURE. WE ARE BUILDING OUT THE METAVERSE, ESTABLISHING A WEB3 PLAYER CREATOR ECONOMY.
          </p>
          <Button className="text-xs md:text-xs w-60 md:w-auto md:px-5" onClick={() => router.push('/ecosystem')}>
            SEE ECOSYSTEM
          </Button>
        </div>
        <div className="mb-10 md:mb-0 z-10">
          {/* {showAdd && (
            <p
              className="text-yellow-400 md:text-sm absolute mt-4 text-center text-2xs w-60 md:w-72 -top-8"
              style={{ top: "-2.75rem" }}
            >
              ESPA BETA IS NOW READY!
            </p>
          )} */}
          <Button
            className="px-5 py-6 text-base lg:leading-extra-35 w-280 lg:w-354 lg:text-20"
            // onMouseEnter={() => setShowAdd(true)}
            // onMouseLeave={() => setShowAdd(false)}
            onClick={() => router.push('/quest')}
          >
            {isClicked ? 'Coming Soon' : 'Are you ready to mod the metagame?'}
          </Button>
          {/* {showAdd && (
            <p className="text-yellow-400 md:text-sm absolute mt-4 text-center text-2xs ">
              every human is a player.
              <br />
              this is the future.
              <br />
              this is what we are pioneering.
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
