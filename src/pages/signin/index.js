import { useDispatch } from "react-redux";
import usePageTitle from "../../hooks/usePageTitle";
import Button from "../../components/Button";
import { openConnectMetamaskModal } from "@actions/modals.actions";
import { useRouter } from "next/router";

const Singin = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openConnectMetamaskModal());
  };
  usePageTitle("Signin");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex flex-col md:mx-40">
        {/* <p className="md:text-4xl mb-10 md:mb-20 text-center">
          go to the digitalax marketplace to create your profile. pick out some
          cool digital fashion.
        </p> */}
        {/* <div className="flex justify-center py-10">
          <video autoPlay muted loop className="w-100">
            <source src="/images/AMONG US SIGN IN .mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="flex flex-col items-center pb-8">
          <p className="text-base pb-8 font-ode-gaming font-normal">steps to start playing:</p>
          <p className="text-base max-w-941 text-center font-ode-gaming font-normal">
            NOW YOU MUST CREATE YOUR WALLET.
            <span className="text-3xl font-inter font-black signin_title">
            You Will Be Generated An ARKANE WALLET On Matic Network.
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => setShowCreate(true)}
            className="mx-10 md:px-20 text-base"
            onClick={() => handleClick()}
          >
            CREATE WALLET
          </Button>
        </div>
        <Button
            className="text-base w-198 h-57 fixed return"
            onClick={() => router.push('/quest')}
        >
            RETURN
        </Button>
      </div>
    </div>
  );
};

export default Singin;
