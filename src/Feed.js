import React from "react";
import "./Feed.css";
// import CreateIcon from "@mui/icons-material/Create";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <BorderColorIcon />
          <form>
            <input type="text" name="" id="" />
            <button>Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
