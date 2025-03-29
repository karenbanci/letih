import React from "react";
import styles from "./Treatments.module.css";
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const StyledSession = ({ children, descriptionClass }) => (
  <h5 className={styles.sessionTitle}>
    <span className={`${styles.descriptionStyle} ${descriptionClass}`}>
      {children}
    </span>
  </h5>
);

const Treatments = ({
  title,
  whatIs,
  whatIsDescription,
  custombannerMiddleContentClass,
  benefits,
  benefitsDescription,
  benefitsRecommendations,
  whatContains,
  whatContainsUlProps,
  firstTitle,
  firstTitleDescription,
  secondTitle,
  secondTitleDescription,
  btnComponent,
  customButtonClass,
  imgSrc,
  description,
  customDescriptionClass,
  customBottomClass,
  customPhotoClass,
  customNavWrapperClass,
  customListProp,
  additionalWhatIsDescriptionProp,
  children,
  packagePriceProp,
  firstSession,
  firstSessionTime,
  secondSessionTitle,
  secondSessionDescription,
  secondSessionUlProp,
  secondSessionTime,
  priceProp,
  customBannerMiddleContentDetailsClass,
  firstSessionDescription,
  firstSessionTimeDescription,
  pricePropDescription,
  secondSessionTimeDescription,
  customdescriptionStyleClass,
  packagePricePropDescription,
}) => {
  return (
    <div className={styles.containerService}>
      <div className={`${styles.mobileNavbarWrapper} ${customNavWrapperClass}`}>
        <ServiceMobileNavbar />
      </div>
      <div className={styles.bannerMiddle}>
        <div
          className={`${styles.bannerMiddleContent} ${custombannerMiddleContentClass}`}
        >
          {title && <h2 className={styles.title}>{title}</h2>}

          <div
            className={`${styles.titleDescription} ${customDescriptionClass}`}
          >
            {whatIs && <h5>{whatIs}</h5>}
            {whatIsDescription && <p>{whatIsDescription}</p>}
            {whatContains && <h5>{whatContains}</h5>}
            {whatContainsUlProps}
            {benefits && <h5>{benefits}</h5>}
            {benefitsDescription && <p>{benefitsDescription}</p>}
            {customListProp}
            {additionalWhatIsDescriptionProp && (
              <p>{additionalWhatIsDescriptionProp}</p>
            )}
            {children}
            {benefitsRecommendations && (
              <p className={styles.bannerMiddleRecommendation}>
                {benefitsRecommendations}
              </p>
            )}

            <div
              className={`${styles.bannerMiddleContentDetails} ${customBannerMiddleContentDetailsClass}`}
            >
              {firstSession && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {firstSession}
                  {firstSessionDescription && <p>{firstSessionDescription}</p>}
                </StyledSession>
              )}
              {firstSessionTime && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {firstSessionTime}
                  {firstSessionTimeDescription && (
                    <p>{firstSessionTimeDescription}</p>
                  )}
                </StyledSession>
              )}
              {secondSessionTitle && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {secondSessionTitle}
                  {secondSessionDescription && (
                    <p>{secondSessionDescription}</p>
                  )}
                </StyledSession>
              )}
              {secondSessionUlProp && (
                <StyledSession>{secondSessionUlProp}</StyledSession>
              )}
              {secondSessionTime && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {secondSessionTime}
                  {secondSessionTimeDescription && (
                    <p>{secondSessionTimeDescription}</p>
                  )}
                </StyledSession>
              )}
              {priceProp && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {priceProp}
                  {pricePropDescription && <p>{pricePropDescription}</p>}
                </StyledSession>
              )}
              {firstTitle && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {firstTitle}
                  {firstTitleDescription && <p>{firstTitleDescription}</p>}
                </StyledSession>
              )}
              {secondTitle && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {secondTitle}
                  {secondTitleDescription && <p>{secondTitleDescription}</p>}
                </StyledSession>
              )}
              {packagePriceProp && (
                <StyledSession descriptionClass={customdescriptionStyleClass}>
                  {packagePriceProp}
                  {packagePricePropDescription && (
                    <p>{packagePricePropDescription}</p>
                  )}
                </StyledSession>
              )}
            </div>

            {btnComponent && (
              <div className={`${styles.bannerButton} ${customButtonClass}`}>
                {btnComponent}
              </div>
            )}
          </div>

          {imgSrc && (
            <div className={`${styles.bannerMiddlePhoto} ${customPhotoClass}`}>
              <img
                src={imgSrc}
                alt={
                  description
                    ? description
                    : title
                    ? `Image for ${title}`
                    : "Treatment image"
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.bannerBottom} ${customBottomClass}`} />
    </div>
  );
};

export default Treatments;
