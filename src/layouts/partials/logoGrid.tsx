import style from "./logoGrid.module.css";

export default function LogoGrid(){
    return (
      <section className="section pt-14">
        <div className="container">
          <div className={style.gridContainer}>
            {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
              <div key={num} className={`${style.gridItem} bg-transparent`}>
                {num}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
