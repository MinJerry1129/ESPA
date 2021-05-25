import { useDispatch } from "react-redux";
import usePageTitle from "../../hooks/usePageTitle";
import Button from "../../components/Button";
import { openConnectMetamaskModal } from "@actions/modals.actions";

const Singin = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openConnectMetamaskModal());
  };
  usePageTitle("Signin");

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex flex-col md:mx-40">
        {/* <p className="md:text-4xl mb-10 md:mb-20 text-center">
          go to the digitalax marketplace to create your profile. pick out some
          cool digital fashion.
        </p> */}
        <div className="flex justify-center py-10">
          <video autoPlay muted loop className="w-100">
            <source src="/images/AMONG US SIGN IN .mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center">
          <Button
            className="mx-10 md:px-20 text-base"
            onClick={() => handleClick()}
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Singin;
