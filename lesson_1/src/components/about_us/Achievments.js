import '../../scss/components/about_us/Achievments.scss'
import achievments_image from '../../icons/achievments/achievments_image.svg'
import achievments_image2 from '../../icons/achievments/achievments_image2.svg'
import achievments_image3 from '../../icons/achievments/achievments_image3.svg'
import achievments_image4 from '../../icons/achievments/achievments_image4.svg'


function Achievments() {
  return (
        <section className="achievments">
            <h4 className="achievments__title">Досягнення</h4>
            <div className="achievments__itemWrapper">
                <div className="achievments__item">
                    <a href="#"><img src={achievments_image}/></a>
                </div>
                <div className="achievments__item">
                    <a href="#"><img src={achievments_image2}/></a>
                </div>
                <div className="achievments__item">
                    <a href="#"><img src={achievments_image3}/></a>
                </div>
                <div className="achievments__item">
                    <a href="#"><img src={achievments_image4}/></a>
                </div>
            </div>
            <div className="achievments__pointWrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
  );
}

export default Achievments;
