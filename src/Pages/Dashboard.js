import "./Dashboard.scss";
import AffirmationCard from "../Components/AffirmationCard";
import NightBackground from "../Media/landscape-night.gif";
import DayBackground from "../Media/landscape-night.gif";

const Dashboard = () => {
  return (
    <section class="Dashboard page-width">
      <h1 class="greeting">
        Good Afternoon,
        <br />
        Emmanuel
      </h1>

      <div
        class="landscape"
        style={{ backgroundImage: `url(${NightBackground})` }}
      ></div>

      <h2>Today</h2>
      <AffirmationCard />
    </section>
  );
};

export default Dashboard;
