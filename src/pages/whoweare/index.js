import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";

const WhoWeAre = () => {
  usePageTitle("Whoweare");

  return (
    <div className="w-full flex font-tw-cent">
      <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
        <div className="flex flex-col md:flex-row mb-6">
          <div className="mr-0 md:mr-10 mb-6 md:mb-0 md:w-7/12 w-full">
            <p className="text-yellow-400 text-4xl mb-8">Who we are</p>
            <div>
              <p className="mb-8 text-lg">
                ESPA is the first ever dedicated Esports platform for
                independent developers, modders, designers and casual players or
                gamers. It’s all about freeing players, modders, independent
                devs, designers to create new livelihoods for themselves no
                matter where they live. For the first time ever they are going
                to be able to genuinely monetize without requiring the usual
                industry-political approval. The ESPA Platform allows for indie
                devs and modders to easily plug in and enable players to start
                playing to win, creating a secure livelihood for each other in
                the process. Every Player is Esports ready. Players no longer
                have to engage only in strict, time sensitive, one time battles.
                They can Play anytime, anywhere and start building a record of
                winning plays. Designers, brands, creators can engage with and
                monetise off of this digital ecosystem, maintain streamlined
                content pipelines and bring forth meaningful, personalised,
                self-expressive content for all Players and Developers to
                leverage.
              </p>
              <p className="text-lg">
                digital fashion is at the heart of espa— where skins and
                wearables provide Players, Indie Devs and Modders their
                consistent income streams and ability to make a livelihood.
                these are all made possible through $mona utility.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <iframe
              className="w-full"
              height="390"
              src={`https://www.youtube.com/embed/QGHOoSxAyYw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <div>
          <p className="text-yellow-400 text-4xl mb-8">MOTIVATION AND VISION</p>
          <div>
            <p className="mb-8 text-lg">
              Our world today is undeniably digital. In our thoroughly
              technological society everything is changing so fast that we are
              almost unrecognisable from 20 years ago. Throughout this time,
              there has been an undeniable, and obvious in hindsight, innovation
              curve in the advancement of gaming, VR and other 3D technologies.
              Each year these digital worlds are becoming more and more
              photorealistic, pushing our trajectory of technological ubiquity
              more towards where there is no meaningful difference between the
              digital and the physical, and creating a compelling argument for a
              future that is driven by native digital economies. Built around
              entire virtual world communities and ecosystems comprised of most
              of humanity, where most will never meet face to face.
            </p>
            <p className="mb-8 text-lg">
              We are introducing for the first time ever, “Casual Esports”.
            </p>
            <p className="mb-8 text-lg">
              Casual Esports is all about giving power back to the
              Player-Creator economy, it is about allowing anyone, no matter
              where they live, to start making a livelihood and a consistent
              income stream through Play. The platform’s mission is to
              democratize and unlock value for all Players and Creators. We are
              giving entry to the looked over independents, the game modders.
              For the first time, experimental and large varieties of content
              can be highlighted, exposed and funded. ESPA was established for
              the Player-Creator economy, and with $MONA the key utility token,
              our purpose is to further decentralise overtime, eventually
              allowing the full ecosystem to be led and directed by the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
