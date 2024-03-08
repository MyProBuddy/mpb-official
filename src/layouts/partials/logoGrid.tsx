import style from "./logoGrid.module.css";
import Image from 'next/image'
import logo1 from '../../../public/assets/partners/d2c.svg';
import logo2 from '../../../public/assets/partners/climate-tech.svg';
import logo3 from '../../../public/assets/partners/crypto.svg';
import logo4 from '../../../public/assets/partners/education.svg';
import logo5 from '../../../public/assets/partners/fashion.svg';
import logo6 from '../../../public/assets/partners/female-founders.svg';
import logo7 from '../../../public/assets/partners/fintech.svg';
import logo8 from '../../../public/assets/partners/food-bev.svg';
import logo9 from '../../../public/assets/partners/government.svg';
import logo10 from '../../../public/assets/partners/hardware.svg';
import logo11 from '../../../public/assets/partners/health-tech.svg';
import logo12 from '../../../public/assets/partners/saas.svg';
import logo13 from '../../../public/assets/partners/sports-fitness.svg';
import logo14 from '../../../public/assets/partners/veterans.svg';
import logo15 from '../../../public/assets/partners/more.svg';

export default function LogoGrid(){
    return (
      <section className="section pt-14">
        <div className="container">
          <div className={`${style.gridContainer} grid-inner-[2,6] md:grid-inner-[3,6] lg:grid-inner-[5,6]`}>
            {/* {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
              <div key={num} className={`${style.gridItem} bg-transparent`}>
                {num}
              </div>
            ))} */}
            <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo1}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo2}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo3}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo4}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo5}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo6}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo7}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo8}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo9}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo10}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo11}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo12}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo13}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}>
                <Image
                  src={logo14}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
              <div className={`${style.gridItem} bg-transparent`}
              >
                <Image
                  src={logo15}
                  width={200}
                  height={200}
                  alt="img"
                />
              </div>
          </div>
        </div>
      </section>
    );
}
