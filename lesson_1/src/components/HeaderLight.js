import '../scss/components/HeaderLight.scss';
import logo from "../icons/header/HeaderLightLogo.svg"
import LogoSlash from "../icons/header/SymbolSlash.svg"
import HamburgerLignt from "../icons/header/HamburgerLignt.svg"
import HeaderSoc from "../icons/header/FacebookLight.svg"

function HeaderLight() {
    return (
        <section className='HeaderWrapper'>
            <div className="HeaderWrapper__header">
                <div className="HeaderWrapper__header__logo">
                    <a href="#"><img src={logo} classNameName="HeaderWrapper__header__logoImg" alt="logo"/></a>
                    <span className="HeaderWrapper__header__logoTitle">о нас</span>
                    <img classNameName="HeaderWrapper__header__logoSmall" src={LogoSlash}/>
                        <a className="HeaderWrapper__header__hamburger"><img src={HamburgerLignt}/></a>
                </div>
                <div className="HeaderWrapper__header__wrapper">
                    <div className="HeaderWrapper__header__wrapperLanguage">
                        <div className="HeaderWrapper__header__language">
                            <span>УК</span>
                            <span>РУ</span>
                            <span>EN</span>
                        </div>
                        <div className="HeaderWrapper__header__contact">
                            <a className="HeaderWrapper__header__address" href="#"><span>Одеса, Адміральський пр., 3</span></a>
                            <a className="HeaderWrapper__header__tel" href="#"><span>+38 (050) 390 15 91</span></a>
                            <a className="HeaderWrapper__header__soc" href="#"><img src={HeaderSoc}/></a>
                        </div>
                    </div>
                    <div className="HeaderWrapper__header__menu">
                        <ol>
                            <a className="HeaderWrapper__header__menuPItem" href="#">
                                <li>о нас</li>
                            </a>
                            <a className="HeaderWrapper__header__menuPItem" href="#">
                                <li>послуги</li>
                            </a>
                            <a className="HeaderWrapper__header__menuPItem" href="#">
                                <li>команда</li>
                            </a>
                            <a className="HeaderWrapper__header__menuPItem" href="#">
                                <li>публікації</li>
                            </a>
                            <a className="HeaderWrapper__header__menuPItem" href="#">
                                <li>контакти</li>
                            </a>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderLight;
