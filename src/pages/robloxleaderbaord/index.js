import { useEffect, useState } from "react";
import axios from 'axios';
import usePageTitle from "../../hooks/usePageTitle";
import styles from "./leaderboard.module.scss";
import { dashboardEndpoint } from '../../constants';
import Button from '../../components/Button';

const RobloxLeaderboard = () => {
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
    <div
      className={`${styles.background} w-full flex flex-col justify-center pb-10`}
    >
      <div className="flex flex-col md:flex-row w-full mb-20 px-20 md:px-0 mt-10 md:mt-0">
        <div className="w-full md:w-5/12 flex flex-col mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/leaderboard/smallcast.png"
              width="128"
              className="hidden md:block"
            />
            <p className={`text-4xl mx-10`}>Leaderboard</p>
          </div>
          <div className="flex justify-center">
            <img
              src="/leaderboard/maincast.png"
              width="700"
              className="md:-mt-16 mt-0"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <p className={`text-4xl mt-10 text-center`}>Tier 4</p>
          {tier4.map(item => (
            <div className="flex items-center flex-col md:flex-row mb-10 md:mb-0" key={item}>
              <img src="/leaderboard/tier4.png" width="400" />
              <div className="bg-white text-black w-60 text-center md:ml-20 p-2 h-10 items-center flex">
                {item.data[0].username}
              </div>
            </div>
          ))}
          {tier4.length <= 2 && (
            <>
              {[...Array(2 - tier4.length).keys()].map(item => (
                <div className="flex items-center flex-col md:flex-row mb-10 md:mb-0" key={item}>
                  <img src="/leaderboard/tier4.png" width="400" />
                  <div className="bg-white text-black w-60 md:ml-20 p-2 h-10 items-center flex">
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full md:px-20 mb-20">
        <p className={`text-4xl px-6 py-2 text-center mb-10`}>Tier 3</p>
        <div className="flex flex-col md:flex-row">
          <div className="flex mb-10 md:mb-0 flex-wrap">
            {tier3.map((item) => (
              <div className="flex flex-col items-center w-full sm:w-3/12" key={item}>
                <img src="/leaderboard/tier3.png" width="448" />
                <div className="bg-white text-black text-center h-10 w-60 p-2">{item.data[0].username}</div>
              </div>
            ))}
            {tier3.length <= 4 && (
              <>
                {[...Array(4 - tier3.length).keys()].map(item => (
                  <div className="flex flex-col items-center w-full sm:w-3/12" key={item}>
                    <img src="/leaderboard/tier3.png" width="448" />
                    <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:px-20 mb-20">
        <p className={`text-4xl px-6 py-2 text-center mb-10`}>Tier 2</p>
        <div className="flex justify-center mb-20 flex-wrap">
          {tier2.map((item) => (
            <div className="flex flex-col items-center" key={item}>
              <img src="/leaderboard/tier2.png" width="360" />
              <div className="bg-white text-black text-center h-10 w-60 p-2">{item.data[0].username}</div>
            </div>
          ))}
          {tier2.length <= 3 && (
            <>
              {[...Array(3 - tier2.length).keys()].map(item => (
                <div className="flex flex-col items-center" key={item}>
                  <img src="/leaderboard/tier2.png" width="360" />
                  <div className="bg-white text-black h-10 w-60 p-2">
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full md:px-20 mb-20">
        <p className={`text-4xl px-6 py-2 text-center`}>Tier 1</p>
        <div className="flex justify-center mb-20 flex-wrap">
          {tier1.map((item) => (
            <div className="flex flex-col items-center" key={item}>
              <img src="/leaderboard/tier1.png" width="314" />
              <div className="bg-white text-black text-center h-10 w-60 px-2 md:p-2 text-base">
                {item.data[0].username}
              </div>
            </div>
          ))}
          {tier1.length <= 5 && (
            <>
              {[...Array(5 - tier1.length).keys()].map(item => (
                <div className="flex flex-col items-center" key={item}>
                  <img src="/leaderboard/tier1.png" width="314" />
                  <div className="bg-white text-black h-10 w-60 px-2 md:p-2 text-base">
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RobloxLeaderboard;
