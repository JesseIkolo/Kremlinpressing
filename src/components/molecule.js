import PropTypes from "prop-types";
import React, { Children } from "react";
import { Link} from "gatsby";
// import Img from 'gatsby-image'
import {CosmoIcon} from './cosmoIcon';
import {CosmoIll} from './cosmoIll';


const Container = ({ id }) => (
  <div className="cosmos-grid-container">
    
  </div>
)

Container.propTypes = {
  id: PropTypes.string,
}

Container.defaultProps = {
  id: ``,
}

const TextButton = ({ icon, text,type, to, background, backgroundColor, textColor, cosmoIcon}) => (

  <Link 
  className={[background ? ("cosmo-text-button" + " " + type ) :("cosmo-text-button no-back") , icon ?(" iconed"):(" no-iconed")]}
  style={backgroundColor ? ({backgroundColor : backgroundColor}):null}
   to={to}>
    <span style={textColor ? ({color : textColor}):null}
    className="button-text">{text}</span>
    {
      icon ? (
        <div className={
          backgroundColor === "transparent" ?  (
            "icon-cacher transparent"
          ):("icon-cacher")
        }
        style={
          backgroundColor ? ({backgroundColor : textColor})
          :null
          }
        >
          {
            cosmoIcon ? (
              <CosmoIcon icon={icon} iconColor={background ? (backgroundColor):("var(--primary-color)")}/>
            ):(
              <span className={'icon ' + icon} style={background ? ({color : backgroundColor}):({color : "var(primary-color)"})}/>
            )
          }
          
        </div>
      ):null
    }
  </Link>

)

TextButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string
}

TextButton.defaultProps = {
  icon: ``,
  text: ``,
  to:``
}

const SquaredButton =({cosmoIcon, icon, iconColor, secondColor, backgroundColor, size, to}) =>(
  <Link to={to} className={size ? ("squared-button " + size) : ("squared-button")} style={{backgroundColor : backgroundColor}}>
    {cosmoIcon ? 
    (<CosmoIcon iconColor={iconColor} secondColor={secondColor} icon={icon}/>)
    :
    (<span className={'icon ' + icon}/>)}
  </Link>
)

SquaredButton.propTypes = {
  icon : PropTypes.string
}

SquaredButton.defaultProps ={
  icon : ``,
}

function Illustration(props){
  return(
    <div className="ill">
      <CosmoIll illustration={props.illustration}/>
    </div>
  )
}

function TestimonyCard(props){
  console.log(props)
  return(
    <div className="testimony clarifyItem">
      <div className="testimonyHeader">
        <div className="profilThumbs"></div>
        <div className="description">
          <h3>{props.TestimonierName}</h3>
          <p>{props.TestimonierDescription}</p>
        </div>
      </div>
      <p className="testimonyContent">
        {props.Testimony}
      </p>
      <div className="testimonySocial">
        {props.facebook ? (
          <Link to={props.facebook}>
            <CosmoIcon icon="facebook" iconColor="#161616"/>
          </Link>):
          (null)
        }
        {props.twitter ? (
          <Link to={props.twitter}>
            <CosmoIcon icon="twitter" iconColor="#161616"/>
          </Link>):
          (null)
        }
        {props.instagram ? (
          <Link to={props.instagram}>
            <CosmoIcon icon="instagram" iconColor="#161616"/>
          </Link>):
          (null)
        }
      </div>
    </div>
  )
}
function PricingCard(props){
  console.log("Les purposes ", props.Purposes)
  return(
    <div 
      style={props.backgroundColor ? ({backgroundColor : props.backgroundColor,color : props.textColor}):(null)}
      className={props.bordered ? ("pricing bordered clarifyItem"):("pricing clarifyItem")}>
                  <div className="pricingHeader">
                    <Link className="pricingItemName" to="">{props.name}</Link>
                    <Link to="" className="pricingValue">{props.price} <span className="currency">{props.currency}/{props.timing}</span></Link>
                    <p className="pricingDescription">
                      {props.description}
                    </p>
                  </div>
                  <div className="purposeEnumeration">
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                    <div className="pricingPurposeItem">
                      <CosmoIcon iconColor={props.textColor} icon="check"/>
                        Pricing Purpose Item
                    </div>
                  </div>
                </div>
  )
}


function Notification(props) {
  return (
    <div className={'notification ' + props.style}>
      <div className="image-side"></div>
      <div className="notification-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {props.readmore ? (
          <Link to={props.readmoreTo} className="readmore">
            Read More<span className="icon ion-ios-arrow-right"/>
          </Link>
        ) : null }
      </div>
      <div className="action-button"></div>
      <SquaredButton icon="ion-ios-close-empty" color="#EAEDFA"/>
    </div>
  );
}

function SocialButton(props){
  return(
    <Link className="social-button" to={props.to}>
       <CosmoIcon icon={props.for}/>
    </Link>
  )
}

function MiniCard(props){
  return(
    <Link className="hm-card" to={props.to} style={{backgroundColor : props.backgroundColor}}>
      { props.cosmoIcon ? 
        (<CosmoIcon icon={props.icon} 
          iconColor={props.iconColor} 
          secondColor={props.secondColor}/>)
          :
        (<span className={'icon ' + props.icon}/>)
      }
        <h2 className="title">
          {props.title}
        </h2>
    </Link>
  )
}


function ContactInfo(props) {
  return (
    <div className="contact-info">
      <h4>{props.title}</h4>
      <p>{props.text} <br/>
        { props.subText ? (
            <span>{props.subText}</span>
        ): null }
      </p>
    </div>
  );
}

function BeautifulLink(props) {
  return (
   
      <div className="contact-info">
        <h4>
        {props.dash ? (<span className="dash-line">——</span>):null}
          <Link to={props.to}>
            {props.text}
          </Link>
        </h4>
      </div>
  );
}

function Tag(props){
  return (
    <div className={props.background ? ("cosmo-text-tag"):("cosmo-text-tag no-back")}
        style={{backgroundColor : props.background, color : props.textColor}}
    >
      {
        props.icon ?(
          <>
            {
              props.cosmoIcon ? (
                <CosmoIcon iconColor={props.textColor} icon={props.cosmoIcon}/>
              ):null
            }
          </>
        ):null
      }
      <span className="button-text">{props.for}</span>
    </div>
  )
}

function Project(props){
  return(
    <div className="wk">
            <div className="project-content">
              <div className="project-thumb">
              <img alt="projectThumb" src={props.projectThumb}/>
              </div>
              <h5 className="project-client-name">
                { props.clientName }
              </h5>
              <h4 className="project-subtitle">
              { props.projectSubDescription }
              </h4>
              <TextButton 
                icon="ion-ios-arrow-right" 
                text="Discover the case study"
                background={false}/>
              
            </div>
    </div>
  )
}

const Para = ({children}) => {
  return(
    <>
      <p>
        {children}
      </p>
    </>
  )
}

Para.propTypes = {
  children: PropTypes.node.isRequired,
}


// const Notification =({}) => (


// )

// Notification.propTypes ={
//   style : PropTypes.string,
//   Title : PropTypes.string,
//   content : PropTypes.string,
//   readmore : PropTypes.bool,
//   readmoreTo : PropTypes.string
// }

// Notification.defaultProps = {
//   style : ``,
//   Title : ``,
//   content : ``,
//   readmore : false,
//   readmoreTo :``
// }

// export default Container
export { Illustration, TestimonyCard, PricingCard, MiniCard, Container, TextButton, Notification, ContactInfo, BeautifulLink, Tag, Project, Para, SocialButton, SquaredButton}

