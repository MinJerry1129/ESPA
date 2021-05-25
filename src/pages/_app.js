import { useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { useRouter } from "next/router";
import Head from "next/head";
import { deserialize, serialize } from 'json-immutable/lib';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "@components/layout/header";
import MobileHeader from "@components/layout/mobileHeader";
import Footer from "@components/layout/footer";
import Home from "./index.js";
import Modals from '@containers/modals/index';
import getOrCreateStore from '../lib/with-redux-store';
import { getIsInitialized, getChainId } from '@selectors/global.selectors';
import globalActions from '@actions/global.actions';
import '@styles/global.scss';
import config from '../utils/config';
import { route } from "next/dist/next-server/server/router";


if (config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN,
    environment: config.ENVIRONMENT,
  });
}


const InitWrapper = (props) => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(getIsInitialized);

  useEffect(() => {
    dispatch(globalActions.initApp());
  }, []);

  if (!isInitialized) {
    return null;
  }

  return props.children;
};

const MyApp = ({ Component, pageProps, store, err }) => {
  const router = useRouter();
  const containerRef = useRef();
  console.log(containerRef);
  const [overLayMode, setOverLayMode] = useState(0);
  const [loadArkane, setLoadArkane] = useState(false);
  useEffect(() => {
    if (router.route === '/signin' || router.query.step === 20) {
      setLoadArkane(true)
    } else {
      setLoadArkane(false)
    }
    handleResize();
  }, [router.route, router.query.step]);


  const handleResize = () => {
    if(containerRef.current.clientHeight == 0) {
      setTimeout(handleResize, 500);
      return;
    }
    // console.log(containerRef.current.clientHeight, window.innerHeight + 48);
    if (containerRef.current.clientHeight > window.innerHeight + 48) {
      if (router.route === '/profile'
        || router.route === '/discover'
        || router.route === '/crew'
        || router.route.substr(0, 5) === '/meta') 
      {
        setOverLayMode(1);
      } else if (router.route === '/leaderboard' || router.route === '/digitalid') {
        setOverLayMode(3);
      }
    } else {
      if (router.route === '/leaderboard' || router.route === '/digitalid') {
        setOverLayMode(2);
      } else {
        setOverLayMode(0);
      }
    }
  };

  const gaScriptTxt = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y06VSWY6VY');
  `;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        handleResize();
      }
    }

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let allowed = true;

  const ComponentToRender = allowed ? Component : Home;

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0,minimum-scale=1, width=device-width"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y06VSWY6VY"></script>
        {loadArkane && <script src="/arkane-network/web3-arkane-provider.js"></script>}
        <script dangerouslySetInnerHTML={{ __html: gaScriptTxt }} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("/fonts/inter-400.woff2") format("woff2"),
              url("/fonts/inter-400.woff") format("woff");
              font-weight: normal;
              font-style: normal;
            } 
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("/fonts/inter-600.woff2") format("woff2"),
              url("/fonts/inter-600.woff") format("woff");
              font-weight: 600;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("/fonts/inter-700.woff2") format("woff2"),
                url("/fonts/inter-700.woff") format("woff");
              font-weight: 700;
              font-style: normal;
            }
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("/fonts/inter-800.woff2") format("woff2"),
                url("/fonts/inter-800.woff") format("woff");
              font-weight: 800;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("/fonts/inter-900.woff2") format("woff2"),
                url("/fonts/inter-900.woff") format("woff");
              font-weight: 900;
              font-style: normal;
            }

            @font-face {
              font-family: "Tw Cent";
              src: url("/fonts/TCV.TTF") format("truetype");
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: "Internal Rainbows";
              src: url("/fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("/fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("/fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("/fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            
            @font-face {
              font-family: "Knife Princess";
              src: url("/fonts/Knife Princess.ttf");
            }
        `,
          }}
        />
      </Head>
      <div className="container-wrapper" ref={containerRef}>
        <InitWrapper>
          <img src='/back.jpg' className='background-image' />
          <div className="relative flex flex-row page-container text-white">
            <div className={`back-overlay ${overLayMode === 2 && "back-overlay3"} ${overLayMode === 1 && "back-overlay2"} ${overLayMode === 3 && "back-overlay4"}`}></div>
            <div className="w-full z-10">
              <Header className="invisible md:visible" />
              <MobileHeader className="visible md:invisible" />
              <div className="w-full flex font-ode-gaming main-container pt-0 md:pt-20 pb-10">
                <ComponentToRender {...pageProps} />
              </div>
              <Footer />
            </div>
          </div>
          <Modals />
        </InitWrapper>
      </div>
      <ToastContainer />
    </Provider>
    // </UseWalletProvider>
  );
}

MyApp.getInitialProps = async () => { };

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  err: PropTypes.any,
  backError: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
  store: {},
  err: undefined,
  backError: {},
};

const serializeWrapper = (value, cb) => {
  try {
    value = cb(value);
  } catch (e) {
    // eslint-disable no-empty
  }
  return value;
};


export default withRedux((initialState) => getOrCreateStore(initialState), {
  serializeState: (state = {}) => serializeWrapper(state, serialize),
  deserializeState: (state = serialize({})) => serializeWrapper(state, deserialize),
})(MyApp);