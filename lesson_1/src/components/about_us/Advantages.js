import '../../scss/components/about_us/Advantages.scss'
import Experience from '../../icons/advantages/Experience.svg'
import Clients from '../../icons/advantages/Clients.svg'
import Probono from '../../icons/advantages/Probono.svg'

function Advantages() {
  return (
<section className="advantages">
    <div className="advantages__wrapper">
        <div className="advantages__introduction">
            <h2 className="advantages__title">Перевертаємо уявлення про юридичні послуги.</h2>
            <p className="advantages__descriptions">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p>
            <br/>
            <p className="advantages__descriptions">Prolegals – надійний бізнес-партнер, що підтверджується стабільним співробітництвом з міжнародними юридичними фірмами, довірою великих українських і міжнародних компаній, визнанням професійних рейтингів.</p>
        </div>
        <div className="advantages__advantagwrap">
            <div className="advantages__item">
                <div className="advantages__iconwrap">
                <img src={Experience}/>
                <span>10+</span>
                </div>
                <p>років релевантного досвіду</p>
            </div>
            <div className="advantages__item">
                <div className="advantages__iconwrap">
                <img src={Clients}/>
                <span>30+</span>
                </div>
                <p>активних клієнтів, які довіряють нам свої доручення щомісячно</p>
            </div>
            <div className="advantages__item">
                <div className="advantages__iconwrap">
                <img src={Probono}/>
                <span>500+</span>
                </div>
                <p>годин роботи «pro bono» щорічно</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default Advantages;
