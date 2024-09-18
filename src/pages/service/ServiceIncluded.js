import React from "react";
import styles from'./ServiceIncluded.module.css';

const ServiceIncluded = ({
  supplementaryServiceInfo,
  warningMessage,
}) => {
  return (
    <div className="bannerService">
      <div className={styles.serviceIncluded}>
        <div className={styles.serviceIncludedContent}>
          <h4 className={styles.serviceTitle}>What is included in this service?</h4>
          <div className={styles.serviceSteps}>
            {supplementaryServiceInfo.map((item, index) => (
              <div key={index}>
                <h5>{item.title}
                  <span class={styles.descriptionStyle}>{item.description}</span>
                </h5>
              </div>
            ))
            }
          </div>
          <div className={styles.serviceIncludedWarning}>
            <div>
              <span class="material-symbols-outlined">info</span>
              <h6>{warningMessage}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIncluded;
