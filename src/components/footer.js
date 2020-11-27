
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
                    <h3>Contactez-nous —</h3>
                    <ContactInfo 
                       title="Nous rencontrer"
                       text="Terminus, Bonamoussadi,"
                       subText="Douala 5eme, Littoral, Cameroun."
                    />
                    <ContactInfo 
                       title="Ecrivez-nous par mail ?"
                       text="hello@kremlinpressing.com"
                    />
                    <ContactInfo 
                       title="Devenir membre de notre equipe ?"
                       text="carreer@kremlinpressing.com"
                    />
                    <ContactInfo 
                       title="Ou alors, appelez-nous ?"
                       text="00237 233 47 07 87"
                    />
                    <ContactInfo 
                       title="Ou via Whatsapp ?"
                       text="00237 699 43 90 38"
                    />
                 </div>
                 <div className="clarifyItem">
                    <h3>Plan du site</h3>
                       <BeautifulLink
                          text="Acceuil"
                          to=""/>
                          <BeautifulLink
                          text="Nos tarifs"
                          to="./pricing"/>
                          <BeautifulLink
                          text="Kremlin pour Entreprise"
                          to="./entreprise"/>
                          
                          <h3>Liens utiles</h3>
                          <BeautifulLink
                          text="Creer un compte"
                          to=""/>
                          <BeautifulLink
                          text="Suivez votre commande"
                          to=""/>
                   </div>
                 <div className="clarifyItem">
                    <h3>Suivez-nous sur les reseaux</h3>
                    
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
