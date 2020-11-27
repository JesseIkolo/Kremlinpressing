
import PropTypes from "prop-types"
import React from "react"
import {TextButton,ContactInfo,BeautifulLink,Tag} from '../components/molecule'

class Footer extends React.Component{
   constructor(props){
      super(props);

   }
   render(){
      return(
         <footer className="linear">
              <div className="cosmos-grid-container">
                 <div className="clarify four">
                 <div className="clarifyItem">
                    <h3>
                     Kremlin Pressing
                    </h3>
                 </div>
                 <div className="clarifyItem">
                    <h3>Contact Us —</h3>
                    <ContactInfo 
                       title="A meet at office ?"
                       text="Rue des Princes, Bali,"
                       subText="Douala 1er, Littoral, Cameroun."
                    />
                    <ContactInfo 
                       title="Want to mail us ?"
                       text="hello@programactor.com"
                    />
                    <ContactInfo 
                       title="Or join our team ?"
                       text="carreer@programactor.com"
                    />
                    <ContactInfo 
                       title="Maybe a call/whatsapp ?"
                       text="00237 669 22 79 76"
                    />
                 </div>
                 <div className="clarifyItem">
                    <h3>Useful Links</h3>
                       <BeautifulLink
                          text="Home"
                          to=""/>
                          <BeautifulLink
                          text="Works"
                          to="./works"/>
                          <BeautifulLink
                          text="About Us"
                          to="./aboutus"/>
                          <BeautifulLink
                          text="Services"
                          to=""/>
                          <BeautifulLink
                          text="Contact Us"
                          to=""/>
                          <h3>Owner Projects</h3>
                          <BeautifulLink
                          text="One Touch Labs"
                          to=""/>
                           <BeautifulLink
                          text="Bongo"
                          to=""/>
                          <BeautifulLink
                          text="nzembo"
                          to=""/>
                          <BeautifulLink
                          text="Koteka"
                          to=""/>
                          <BeautifulLink
                          text="Kolia"
                          to=""/>
                          <BeautifulLink
                          text="Kolala"
                          to=""/>
                   </div>
                 <div className="clarifyItem">
                    <h3>Social Networks</h3>
                    <BeautifulLink
                       text="Dribbble"
                       to=""/>
                       <BeautifulLink
                       text="Instagram"
                       to=""/>
                       <BeautifulLink
                       text="Twitter"
                       to=""/>
                       <BeautifulLink
                       text="Linked In"
                       to=""/>
                       <BeautifulLink
                       text="Behance"
                       to=""/>
                       <BeautifulLink
                       text="Facebook"
                       to=""/>
                        <BeautifulLink
                       text="Messenger"
                       to=""/>
                       <BeautifulLink
                       text="Whatsapp Pro"
                       to=""/>
                 </div>
              
                 </div>
            </div>
              <div className="cosmos-grid-container">
                 <p className="copyright">
                    © Kremlin Pressing 2020. All rights reserved.
                 </p>
              </div>
          </footer>
        )
   }
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
