import '../scss/about_us.scss';
import Advantages from "../components/about_us/Advantages"
import MoreDescription from '../components/about_us/MoreDescription'
import Achievments from '../components/about_us/Achievments'

function About_us() {
  return (
    <body>
      <section className="aboutUs__Advantages">
        <Advantages/>
      </section>
      <section className="aboutUs__Team">
        <h3 class="aboutUs__TeamTitle">команда</h3>
      </section>
      <section className="aboutUs__MoreDescription">
        <MoreDescription/>
       </section>
      <section className="aboutUs__Achievments">
        <section className="aboutUs__AchievmentsWrapper">
        <Achievments/>
        </section>
      </section>
    </body>
  );
}

export default About_us;
