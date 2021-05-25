import { useRouter } from 'next/router'
import Button from '../Button'
import styles from '../Button/return-button.module.scss'

const Step19 = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center'>
      <p className='text-base'>steps to start playing:</p>
      <p className='my-12 text-base md:w-6/12 text-center'>
        GO SKIN YOURSELF! CLICK BELOW TO get A UNIQUE IN-GAME DIGITAL FASHION AUTHENTICATOR. 
        THIS IS YOUR IDENTITY MARKER AND HOW WE TAACK YOU ON THE LEADERBOARD FOR ESPA ESPORTS.
      </p>
      <div className='flex text-xl justify-space-around'>
        <button
          className='espa-bg-yellow py-5 px-10 text-base'
          onClick={() => router.push('https://skins.digitalax.xyz')}
        >
          Get Skinned
        </button>
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
export default Step19
