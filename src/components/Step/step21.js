import { useRouter } from 'next/router'
import Button from '../Button'
import styles from '../Button/return-button.module.scss'

const Step21 = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center'>
      <p className='text-base'>steps to start playing:</p>
      <p className='my-12 text-base md:w-6/12 text-center'>
        Join the ESPA discord to start battling!
      </p>
      <div className='flex text-xl justify-space-around'>
        <button
          className='espa-bg-yellow py-3 px-10 text-base'
          onClick={() => router.push('https://discord.com/invite/QM6CktUsKw')}
        >
          Join now
        </button>
      </div>
      <Button
        buttonstyle='none'
        className={styles.returnButton}
        onClick={() => router.push('/playnow/20')}
      >
        return
      </Button>
    </div>
  );
};
export default Step21
