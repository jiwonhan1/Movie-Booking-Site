import React from 'react';
import './App.css'

function Intro() {
  return (
    <React.Fragment>
      <div className="Intro">
        <h2>Welcome to Classic Theater!</h2>
        <img src="https://philadelphia.cbslocal.com/wp-content/uploads/sites/15116066/2012/07/stagetheater.jpg?w=420&h=316&crop=1"/>
        <p>We offer having great class movies with full CRUD funtioanalities and movie booking feature</p>
        <p>Each movies have movie information : id, title, poster, released year, summary</p>
        <p>In addition to it, they contains data information such as timestamp, bookedseats and tickets</p>
        <p>In the booking section, there are 8 seats and allows to choose one of them. It prevents dulicated reservation with notification</p>
        <p>In the Nav Bar, you can navigate to movielist, movie addition, movie booking menu</p>
        <p>Let's navigate to class movie theater, please click any menus at the top nav bar</p>
      </div>
     </React.Fragment>
  )
}

export default Intro;