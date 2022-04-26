import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import './Widget.css'
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widget__article'>
            <div className='widgets__articleleft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className='widgets'>
            <div className='widget__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
            {newsArticle("Bitcoin hits new hight", "Tops news - 3,284 readers")}
        </div>
    )
}

export default Widgets