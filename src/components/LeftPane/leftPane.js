import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function leftPane() {
  return (
    <div className='leftPanebox'>
     <div className="leftPaneContainer">
      <div className="leftPaneMenu">
        <li className="leftPaneMenuItem">
          <MarkUnreadChatAltIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Messages</span>
        </li>
        <li className="leftPaneMenuItem">
          <GroupIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Groups</span>
        </li>
        <li className="leftPaneMenuItem">
          <RssFeedIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Feed</span>
        </li>
        <li className="leftPaneMenuItem">
          <FlagIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Pages</span>
        </li>
        <li className="leftPaneMenuItem">
          <CalendarMonthIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Events</span>
        </li>
        <li className="leftPaneMenuItem">
          <BuildIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Settings</span>
        </li>
        <li className="leftPaneMenuItem">
          <SportsEsportsIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">Games</span>
        </li>
        <li className="leftPaneMenuItem">
          <NewspaperIcon className='leftPaneeMenyIcon'/>
          <span className="leftPaneMenuText">News</span>
        </li>
        <hr/>
        <div className="pagesYouLiked">
          <h3>Pages You Liked</h3>
        </div>
        <div className="pageList">
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        <li className="pageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">RAMP</span>
        </li>
        </div>
       
      </div>
     </div>

    </div>
  )
}
