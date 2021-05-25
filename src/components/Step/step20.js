import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Button from '../Button'
import styles from '../Button/return-button.module.scss'
import { getUser } from '@selectors/user.selectors';
import { getTournamentInfo } from '@selectors/tournament.selectors';
import { openConnectMetamaskModal } from '@actions/modals.actions'


const Step20 = () => {
  const router = useRouter()
  const user = useSelector(getUser)
  const tournamentInfo = useSelector(getTournamentInfo)

  console.log('tournamentInfo: ', tournamentInfo)
  const dispatch = useDispatch()

  const openSignin = () => {
    dispatch(openConnectMetamaskModal())
  }

  return (
    <div className='flex flex-col items-center'>
      <p className='text-base'>steps to start playing:</p>
      <p className='my-12 text-base md:w-6/12 text-center'>
        Have you already downloaded and installed the mod?
      </p>
      <div className='flex text-xl justify-space-around'>
        <Button
          className='mx-10 px-20 text-base'
          onClick={() => {
            if (user) {
              router.push('/playnow/21')
            } else {
              openSignin()
            }
          }}
        >
          YES
        </Button>
        <Button
          className='mx-10 px-20 text-base'
          onClick={() => router.push('/esports')}
        >
          NO
        </Button>
      </div>
      <Button
        buttonstyle='none'
        className={styles.returnButton}
        onClick={() => router.push('/playnow')}
      >
        return
      </Button>
    </div>
  );
};

export default Step20
