import { useState, useLayoutEffect } from "react";
import usePageTitle from "../../hooks/usePageTitle";

import Button from '../../components/Button';

const Crew = () => {

  const [editMode, setEditMode] = useState(0);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const goEditMode = (mode) => {
    setEditMode(mode);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  usePageTitle("Crew");

  return (
    <div className="w-full flex flex-col md:flex-row mb-20 md:mb-32 px-12 py-12">
      {(size[0] > 600 || (size[0] <= 600 && editMode == 0)) && (
        <div className="flex mb-12 w-full md:w-4/12">
          <div className="w-full">
            <p
              className="text-xs text-4xl leaderboard"
              style={{
                textAlign: "left",
                marginTop: 46
              }}
            >
              CHOOSE YOUR CREW
          </p>
            <p
              className="text-3xl mb-16"
              style={{
                fontSize: "19px",
                textAlign: "left"
              }}
            >
              MAXIMUM OF 13 CREW MEMBERS PER
          </p>
            <p
              className="text-xs text-2xl mt-16"
              style={{
                textAlign: "left",
                marginTop: 46
              }}
            >
              meta crew
          </p>
            <div className="flex flex-row md:flex-row profile-image-container">
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
            </div>
            <Button className="meta-crew-gradient-border flex flex-col items-center w-full sm:w-6/12" onClick={() => { goEditMode(1) }}>GO Discover</Button>
            <p
              className="text-xs text-2xl mt-16"
              style={{
                textAlign: "left",
                marginTop: 46
              }}
            >
              SHERIFF crew
          </p>
            <div className="flex flex-row md:flex-row profile-image-container">
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
            </div>
            <Button className="sheriff-crew-gradient-border flex flex-col items-center w-full sm:w-6/12" onClick={() => { goEditMode(2) }}>GO Discover</Button>
            <p
              className="text-xs text-2xl mt-16"
              style={{
                textAlign: "left",
                marginTop: 46
              }}
            >
              minecraft crew
          </p>
            <div className="flex flex-row md:flex-row profile-image-container">
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
              <img className="profile-image" src="/leaderboard/profile.png" />
            </div>
            <Button className="minecraft-crew-gradient-border flex flex-col items-center w-full sm:w-6/12" onClick={() => { goEditMode(3) }}>GO Discover</Button>
          </div>
        </div>
      )}
      <div className="flex mb-12 w-full md:w-1/12"></div>
      {(editMode != 0) && (
        <div className="flex mb-12 w-full md:w-7/12">
          <div className="w-full">
            <p
              className="text-xs text-4xl"
              style={{
                textAlign: "left",
                marginTop: 46,
                fontSize: 24,
                color: '#BBA0FF'
              }}
            >
              CHOOSE CREW member to mod
          </p>
            <div className="flex flex-row md:flex-row profile-image-container">
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
              <div className="profile-container">
                <img className="profile-image" src="/leaderboard/profile.png" />
                {
                  editMode == 1 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-pencil" src="/leaderboard/pencil_brown.png" />
                  )
                }
                {
                  editMode == 1 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel.png" />
                  )
                }
                {
                  editMode == 2 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_pink.png" />
                  )
                }
                {
                  editMode == 3 && (
                    <img className="profile-image profile-cancel" src="/leaderboard/cancel_brown.png" />
                  )
                }
              </div>
            </div>
            <div className="mb-16">
              <div className="flex flex-col md:flex-row">
                <input placeholder="Enter A Meta ID" className={`input-discover pl-2 pr-2 gradient-border flex flex-col items-center w-full sm:w-4/12 mx-2 my-2 ${editMode == 1 && "meta-crew-gradient-border"} ${editMode == 2 && "sheriff-crew-gradient-border"} ${editMode == 3 && "minecraft-crew-gradient-border"}`} />
                <Button className={`gradient-border flex flex-col items-center w-full sm:w-2/12 mx-2 my-2 ${editMode == 1 && "meta-crew-gradient-border"} ${editMode == 2 && "sheriff-crew-gradient-border"} ${editMode == 3 && "minecraft-crew-gradient-border"}`} onClick={() => { setEditMode(0) }}>CHOOSE</Button>
                <Button className={`gradient-border flex flex-col items-center w-full sm:w-2/12 mx-2 my-2 ${editMode == 1 && "meta-crew-gradient-border"} ${editMode == 2 && "sheriff-crew-gradient-border"} ${editMode == 3 && "minecraft-crew-gradient-border"}`} onClick={() => { setEditMode(0) }}>SAVE</Button>
              </div>
              <p className="mt-1 mr-24  mx-2 my-2">ADD A CREW MEMBER WITH THEIR <span>META ID</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crew;
