import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import usePageTitle from "../../hooks/usePageTitle";
import styles from "./leaderboard.module.scss";
import { dashboardEndpoint } from '../../constants';
import Button from '../../components/Button';

const DigitalId = () => {
  usePageTitle("Leaderboard");
  const espaStaffs = [
    "noctis21",
    "onakgaming",
    "espchrollo",
    "chrollo007",
    "elieszhae",
    "woodi",
    "onak",
    "zardiums"
  ];
  const [tier1, setTier1] = useState([]);
  const [tier2, setTier2] = useState([]);
  const [tier3, setTier3] = useState([]);
  const [tier4, setTier4] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get(dashboardEndpoint)
      .then(res => {
        const { data } = res;
        const filteredData = data.filter(item => espaStaffs.indexOf(item.data[0].username) === -1);
        setTier1(filteredData.filter(item => item.data[0].tier === 0));
        setTier2(filteredData.filter(item => item.data[0].tier === 1));
        setTier3(filteredData.filter(item => item.data[0].tier === 2));
        setTier4(filteredData.filter(item => item.data[0].tier === 3));
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex mb-12">
        <div className="w-full">
          <p
            className="text-xs text-2xl md:text-4xl mx-10 text-center"
          >
            craft your digi id across the realms
          </p>
          <p
            className="text-1xl md:text-3xl mt-4 mb-16 text-center"
          >
            REP FOR YOUR GUILD
          </p>
          <div className="flex justify-center flex-wrap">
            <div className="flex flex-col items-center p-1 w-full justify-center sm:w-4/12">
              <div className={`${styles.leaderboardCard} ${styles.metaLeaderBoardBox} ${styles.discoverCard} w-full sm:w-12/12 p-4 text-center`}>
                <p
                  className="text-base md:text-2xl mt-4 mb-16 text-center" style={{ float: 'center' }}
                >
                  DISCOVER
                </p>
                <Button className={`${styles.levelUp1} flex flex-col items-center w-full sm:w-12/12`}>LAUNCH</Button>
              </div>
            </div>
            <div className="flex flex-col items-center p-1 w-full justify-center sm:w-4/12">
              <div className={`${styles.leaderboardCard} ${styles.metaLeaderBoardBox} ${styles.metaIDCard} w-full sm:w-12/12 p-4 text-center`}>
                <p
                  className="text-base md:text-2xl mt-4 mb-16 text-center" style={{ float: 'center' }}
                >
                  META ID
                </p>
                <Button className={`${styles.levelUp1} flex flex-col items-center w-full sm:w-12/12`}>CHOOSE</Button>
              </div>
            </div>
          </div>
          <div className="flex mb-10 md:mb-0 flex-wrap">
            <div className="flex flex-col mt-10 items-center p-1 w-full justify-center sm:w-4/12">
              <div className={`${styles.leaderboardCard} ${styles.background} ${styles.amongUsCard} w-full sm:w-12/12 p-4 text-center`}>
                <div className="flex flex-row absolute"
                  style={{
                    alignItems: 'baseline',
                    bottom: 10,
                    left: 10,
                    width: '50%'
                  }}>
                  <img style={{ maxWidth: "60%" }} src="/leaderboard/among_us_1.png" />
                  <img style={{ maxWidth: "30%" }} src="/leaderboard/among_us_2.png" />
                </div>
                <p
                  className="text-2xl sm:text-xs laptop-3:text-sm laptop-2:text-xl laptop-1:text-2xl mt-4 text-center font-mixgiants" style={{ textAlign: 'end' }}
                >
                  AMONG US SHERIFF MOD
                </p>
                <p
                  className="text-1xl sm:text-xs md:text-base text-center mb-8 font-mixgiants" style={{ textAlign: 'end' }}
                >
                  LEADERBOARD
                </p>
                <Button className={`${styles.levelUp} flex flex-col items-center w-full sm:w-12/12`}>CHOOSE</Button>
              </div>
            </div>
            <div className="flex flex-col mt-10 items-center p-1 w-full justify-center sm:w-4/12">
              <div className={`${styles.leaderboardCard} ${styles.minecraftLeaderboard} w-full sm:w-12/12 p-4 text-center`}>
                <p
                  className="text-2xl sm:text-xs laptop-3:text-sm laptop-2:text-xl laptop-1:text-2xl mt-4 text-center font-minecraft" style={{ textAlign: 'end' }}
                >
                  MINECRAFT
                </p>
                <p
                  className="text-1xl sm:text-xs md:text-base text-center mb-8 font-minecraft" style={{ textAlign: 'end' }}
                >
                  LEADERBOARD
                </p>
                <Button className={`${styles.levelUp} flex flex-col items-center w-full sm:w-12/12`}>CHOOSE</Button>
              </div>
            </div>
            <div className="flex flex-col mt-10 items-center p-1 w-full justify-center sm:w-4/12">
              <div className={`${styles.leaderboardCard} ${styles.robloxLeaderboard} w-full sm:w-12/12 p-4 text-center`}>
                <p
                  className="text-2xl sm:text-xs laptop-3:text-sm laptop-2:text-xl laptop-1:text-2xl mt-4 text-center" style={{ textAlign: 'end' }}
                >
                  ROBLOX OBBYS
                </p>
                <p
                  className="text-1xl sm:text-xs md:text-base text-center mb-8" style={{ textAlign: 'end' }}
                >
                  LEADERBOARD
                </p>
                <Button className={`${styles.levelUp} flex flex-col items-center w-full sm:w-12/12`}>COMING</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalId;
