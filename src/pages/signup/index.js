import usePageTitle from "../../hooks/usePageTitle";
import { useRouter } from "next/router";
import Button from "@components/Button";
import styles from '@components/Button/return-button.module.scss'

const Signup = () => {
  usePageTitle("Sign Up");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-20 py-12">
      <div>
        <div className="flex flex-col items-center">
          <p className="text-base">steps to start playing:</p>
          <p className= "my-12 text-base text-center signup_description">
          Have you ever used cryptocurrency before? Do you know what it is?
          </p>
          <div className="flex text-xl justify-space-around">
            <Button
              className="mx-12 px-10 text-base w-198 h-57"
              onClick={() => router.push("/cryptoyes")}
            >
              Yes
            </Button>
            <Button
              className="mx-12 px-10 text-base w-198 h-57"
              onClick={() => router.push("/cryptono")}
            >
              No
            </Button>
          </div>
        </div>
        <div className="bottom_button">
        <Button
          buttonstyle='none'
          className="btnOverlay w-198 h-57"
          onClick={() => router.push('/')}
        >
          skip
        </Button>
        <Button
          buttonstyle='none'
          className="returnButton w-198 h-57"
          onClick={() => router.push('/quest')}
        >
          return
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
