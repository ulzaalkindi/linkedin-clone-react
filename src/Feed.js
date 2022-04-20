import React from "react";
import "./Feed.css";
// import CreateIcon from "@mui/icons-material/Create";
import BorderColorIcon from '@mui/icons-material/BorderColor';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <BorderColorIcon />
                </div>
            </div>
        </div>
    );
}

export default Feed;
