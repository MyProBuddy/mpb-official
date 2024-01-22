import Image from 'next/image';
import icon1 from '../../../public/assets/icon-target.svg';
import icon2 from '../../../public/assets/icon-launch.svg';

export default function Counter(){
    return (
      <section className="section pt-14">
        <div className="container">
            <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="text-center items-center">
                        {/* <img src="image1.jpg" alt="Experience" className="mb-4" /> */}
                        <Image src={icon1} height={200} width={200}/>
                        <h3 className="text-4xl font-semibold text-[#d15e5e]" style={{ fontSize: '60px', lineHeight: '96px', textAlign: 'center' }}>10+</h3>
                        <p className="mt-3 text-[#be4444]" style={{ fontSize: '20px', lineHeight: '36px', textAlign: 'center' }}>Years of Experience</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="text-center items-center">
                        {/* <img src="image2.jpg" alt="Projects" className="mb-4" /> */}
                        <Image src={icon2} height={200} width={200}/>
                        <h3 className="text-4xl font-semibold text-[#d15e5e]" style={{ fontSize: '60px', lineHeight: '96px', textAlign: 'center' }}>100+</h3>
                        <p className="mt-3 text-[#be4444]" style={{ fontSize: '20px', lineHeight: '36px', textAlign: 'center' }}>Projects Completed</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}