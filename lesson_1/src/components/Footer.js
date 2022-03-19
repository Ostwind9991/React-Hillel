import '../scss/components/Footer.scss';
import footerSocFacebook from "../icons/Facebook.svg"

function Footer() {
  return (
    <section className="FooterWrapper">
            <section className="FooterWrapper__footer">
                <div className="FooterWrapper__footer__contact">
                    <div className="FooterWrapper__footer__addressWrapper">
                        <p className="FooterWrapper__footer__address">Одеса, Адміральський пр., 3</p>
                        <p className="FooterWrapper__footer__map"><a href="#">Подивитися на мапі</a></p>
                    </div>
                    <div className="FooterWrapper__footer__contactsWrapper">
                        <a href="#" className="FooterWrapper__footer__socFacebook"><img src={footerSocFacebook}/></a>
                        <p className="FooterWrapper__footer__tell"><a href="#">+38 (050) 390 15 91</a></p>
                        <p className="FooterWrapper__footer__mail"><a href="#">contact@hlegals.net</a></p>
                    </div>
                </div>
                <div className="FooterWrapper__footer__cooperate">
                    <p>© 2021 ТОВ Юридична компанія «HLEGALS»</p>
                </div>
            </section>
    </section>
  );
}

export default Footer;
