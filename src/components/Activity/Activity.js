import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('activity.json')
    .then(res => res.json())
    .then(data => setActivities(data))
    
  }, [])
  return (
    <div>
      <h1>Ultra activity</h1>
      <div>
        {
          activities.map(activity => <Card key={activity.id} activity={activity}></Card>)
        }
      </div>
    </div>
  );
};

export default Activity;
