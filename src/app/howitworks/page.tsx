import React from 'react';
import styles from './guide.module.css';

const Howitworks: React.FC = () => {
  return (
    <div className={styles.main}>
    <h3 className={styles.head} style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>User Journey</h3>
    <div className={styles.container}>
        <ul>
            <li>
                <h3 className={styles.heading}>STAGE 1</h3>
                <p className={styles.p}>Fill the form to check the eligibity.
 </p>
               
                {/* <span className={styles.date}>January 2021</span> */}
                <span className={styles.circle}></span>
            </li>
            <li>
                <h3 className={styles.heading}>STAGE 2</h3>
                <p className={styles.p}>Sign the confidentiality agreement.

 </p>
              
               
                <span className={styles.circle}></span>
            </li>
            <li>
                <h3 className={styles.heading}>STAGE 3</h3>
                <p className={styles.p}>Fill the questionnaire. </p>
              
                {/* <span className={styles.date}>March 2021</span> */}
                <span className={styles.circle}></span>
            </li>
            <li>
                <h3 className={styles.heading}>STAGE 4</h3>
                <p className={styles.p}>Get a call from our expects if your idea is shortlisted.
 </p>
                
                {/* <span className={styles.date}>April 2021</span> */}
                <span className={styles.circle}></span>
                
            </li>
            
            <li>
                <h3 className={styles.heading}>STAGE 5</h3>
                <p className={styles.p}>Pay  ‘2499’ to unlock your grant report.

 </p>
                
                {/* <span className={styles.date}>April 2021</span> */}
                <span className={styles.circle}></span>
            </li>
            <li>
                <h3 className={styles.heading}>STAGE 6</h3>
                <p className={styles.p}>Report delivery along with gpt (grant proposal template) and calendly link to select slot for the one to one consultation call.

 </p>
                
                {/* <span className={styles.date}>April 2021</span> */}
                <span className={styles.circle}></span>
            </li>
            

        </ul>
    </div>
</div>
  )
}

export default Howitworks;