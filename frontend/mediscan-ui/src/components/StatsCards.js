import React from "react"

function StatsCards(){

return(

<div className="stats">

<div className="stat-card">

<h4>Total Scans</h4>
<h2>1247</h2>
<p>↑ 12% from last month</p>

</div>

<div className="stat-card">

<h4>Accuracy Rate</h4>
<h2>94.2%</h2>
<p>↑ 3.1% improvement</p>

</div>

<div className="stat-card">

<h4>Active Patients</h4>
<h2>389</h2>
<p>Updated 2 mins ago</p>

</div>

<div className="stat-card">

<h4>Avg Process Time</h4>
<h2>2.3s</h2>
<p>↓ 0.4s faster</p>

</div>

</div>

)

}

export default StatsCards