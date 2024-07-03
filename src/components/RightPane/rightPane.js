import React from 'react'
import "./rightPane.css"

export default function rightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPainContainer">
        <div className="adContainer">
<span className="sponsor">Sponsored</span>
<img src="/images/ad.jpg" alt="" className="adImage" />
<span className="adText">
  Order Foods
</span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/birthday.jpg" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Venath Randima</b> and <b>3 others</b> having birthday today</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
           <span className="onlineFriendName">Saantha Karuppu</span>
          </li>
        </div>

        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
           <span className="onlineFriendName">Saantha Karuppu</span>
          </li>
        </div>

        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
           <span className="onlineFriendName">Saantha Karuppu</span>
          </li>
        </div>

        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
           <span className="onlineFriendName">Saantha Karuppu</span>
          </li>
        </div>
      </div>

    </div>
  )
}
