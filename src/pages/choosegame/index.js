import { useState } from 'react'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import tournamentActions from '@actions/tournament.actions';
import ChooseGameMode from '@components/select-game/choose-gamemode'
import ChooseTime from '@components/select-game/choose-time'
import Button from '@components/Button'
import styles from '@components/Button/return-button.module.scss'
import { getUser, getIsLoading } from '@selectors/user.selectors';

const gameList = [
  {
    label: 'Among us modes',
    value: 'Among Us'
  },
  {
    label: 'MINECRAFT',
    value: 'MineCraft'
  },
  {
    label: 'ROBLOX',
    value: 'Roblox'
  }
]

const gameModeList = [
  {
    label: 'AMONG US SHERIFF MOD',
    value: 'AMONG US SHERIFF MOD'
  },
  {
    label: 'AMONG US MONSTER MOD',
    value: 'AMONG US MONSTER MOD'
  }
]

const regionList = [
  {
    label: 'ASIA',
    value: 'Asia',
  },
  {
    label: 'AMERICAS',
    value: 'Americas'
  },
  {
    label: 'EUROPE',
    value: 'Europe'
  }
]

const timeList = [[
  {
    label: 'Time slot one',
    caption: 'Thursday & Sunday: 5PM - 9PM (GMT+8)',
    value: 'Thursday & Sunday: 5PM - 9PM (GMT+8)'
  },
  {
    label: 'Time slot two',
    caption: 'Friday & Saturday: 4PM - 9PM (GMT+8)',
    value: 'Friday & Saturday: 4PM - 9PM (GMT+8)'
  }
],
[
  {
    label: 'Time slot one',
    caption: 'Thursday & Sunday: 2PM to 7PM (PST) ',
    value: 'Thursday & Sunday: 2PM to 7PM (PST)'
  },
  {
    label: 'Time slot two',
    caption: 'Friday & Saturday: 4PM - 9PM (PST)',
    value: 'Friday & Saturday: 4PM - 9PM (PST)'
  }
],
[
  {
    label: 'Time slot one',
    caption: 'Thursday & Sunday: 5PM - 9PM (CET)',
    value: 'Thursday & Sunday: 5PM - 9PM (CET)'
  },
  {
    label: 'Time slot two',
    caption: 'Friday & Saturday: 1PM - 5PM (CET)',
    value: 'Friday & Saturday: 1PM - 5PM (CET)'
  }
]]


const ChooseGame = () => {
  const [step, setStep] = useState(0)
  const [tournamentInfo, setTournamentInfo] = useState({})
  const dispatch = useDispatch()
  const profile = useSelector(getUser);
  

  const renderContent = () => {
    if (step === 0) {
      return <ChooseGameMode 
        title='SELECT GAME MOD FOR BATTLE'
        description='MORE MODS AND TOURNAMENTS COMING SOON.'
        chooseList={gameList}
        buttonStyle='fill'
        onChoose={index => {
          if (index === 0) {
            setTournamentInfo({
              game: gameList[index].value
            })
            setStep(1)
          }
        }}
      />
    } else if (step === 1) {
      return <ChooseGameMode
        title='SELECT GAME MOD FOR BATTLE'
        description='MORE MODS AND TOURNAMENTS COMING SOON.'
        chooseList={gameModeList}
        onChoose={index => {
          console.log('selected game mode: ', index)
          tournamentInfo.gameMode = gameModeList[index].value
          setTournamentInfo(tournamentInfo)
          setStep(2)
        }}
      />
    }
    else if (step === 2) {
      return <ChooseGameMode
        title='SELECT REGION'
        titleClassName='mb-20'
        chooseList={regionList}
        onChoose={index => {
          console.log('selected region: ', index)
          tournamentInfo.region = regionList[index].value
          setTournamentInfo(tournamentInfo)
          setStep(3)
        }}
      />
    } else if (step === 3) {
      const regionIndex = regionList.findIndex(item => item.value === tournamentInfo.region)
      return <ChooseTime 
        chooseList={timeList[regionIndex]}
        onChoose={game => {
          console.log('selected timeslot: ', game)
          tournamentInfo.timeSlot = timeList[regionIndex][game].value
          setTournamentInfo(tournamentInfo)
          // setStep(3)
        }}
        onSubmit={onClickSubmit}
      />
    }

    return <></>
  }

  const onClickReturn = () => {
    if (step > 0) {
      setStep(step - 1)
    } else {
      Router.push('/');
    }
  }

  const onClickSubmit = () => {
    const wallet = profile.get('wallet')
    dispatch(tournamentActions.registerTournamentInfo({
      wallet,
      tournamentInfo
    }))
  }

  return (
    <>
    {
      renderContent()
    }
    <Button
      buttonstyle='none'
      className={styles.returnButton}
      onClick={() => onClickReturn()}
    >
      return
    </Button>
    </>
  )
};

export default ChooseGame;