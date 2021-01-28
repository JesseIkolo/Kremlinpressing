import React from 'react'
import { graphql, Img, Link } from 'gatsby'
import Layout from '../components/layout'
import {Illustration, Tag, TestimonyCard, PricingCard , MiniCard, TextButton, SquaredButton} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"
import Header from "../components/header"
import Program from "../components/program"

export default class IndexPage extends React.Component {
  state={
    firstName : "",
    lastName : "",
    email : "",
    password:"",
    Purpose : {
      data : [
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
          "Purpose value 1",
      ]
    }

  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  render(){
    return (
      <> 
        <Layout>
          <Header siteTitle={'data.site.siteMetadata.title'} />
          <SEO title="Kremlin Pressing" />
          <div className="cosmos-section linear">
            <div className="home-sliderBKG full"></div>
            <div className="cosmos-grid-container full-height home-slider align-center">
              <div className="home-text center">

              <h1 className="supra">
                Kremlin Pressing chez vous !
              </h1>
              <form className="type-search">
                        <div className="icon-cacher"><CosmoIcon icon="location" iconColor="#fff"/></div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Vous etes a douala ? Nous vous livrons"
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                        <TextButton 
                            cosmoIcon={false}
                            text="Commander"
                            background={true}
                            backgroundColor="#fff"
                            textColor="var(--Grey-2)"
                            to="signUp"
                            />
              </form>
              <div className="tags center">
              <Tag 
                icon={true}
                cosmoIcon="check-cicle"
                for="Qualité de service"
                background="var(--Green)"
                textColor="#fff"
             />
             <Tag 
                icon={true}
                cosmoIcon="check-cicle"
                for="Livraison en 24 heures"
                background="var(--Green)"
                textColor="#fff"
             />
             <Tag 
                icon={true}
                cosmoIcon="check-cicle"
                for="Service disponible 24/7J"
                background="var(--Green)"
                textColor="#fff"
             />
             </div>

              </div>
            </div>
          </div>

          <div className="cosmos-section   padded-128">
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
              Votre service de blanchisserie en un clic.
              </h1>
              </div>
              <ul className="clarify three">
                <li>
                  <Illustration
                    illustration="illustration-1"
                  />
                  
                  <h2>
                    Suivi sécurisé de votre linge
                   </h2>
                  <p>
                  Vous enregistrer votre linge sans vous déplacer et en toute sécurité et vous avez la possibilité de suivre l’exécution de votre commande de bout en bout  jusqu’à la livraison.
                  </p>
                </li>
                <li>
                <Illustration
                    illustration="illustration-2"
                  />
                  <h2>
                      Statistiques en temps réel
                  </h2>
                  <p>
                  Instantanément après l’enregistrement et la validation de votre commande vous recevez votre facture numérique dans votre interface client et vous avez la possibilité de les consulter  à tout moment et d’avoir le suivi de votre consommation.
                  </p>
                </li>
                <li>
                <Illustration
                    illustration="illustration-3"
                  />
                  <h2>
                    Soins spécialisés à la demande
                  </h2>
                  <p>
                  Vous avez la possibilité de choisir le traitement que vous souhaitez que l’on fasse à votre linge : amidonnage, nettoyage à sec, éclat, etc.
                  </p>
                </li>
              </ul>
            </div>
          <div className="clearfix-128"></div>
            <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                Ma commande en 60 secondes chronos!
              </h1>
              </div>
              <ul className="clarify text-center three">
                <li>
                <SquaredButton
                    size="x3 no-padding"
                    cosmoIcon="true"
                    icon="car-time-colored"
                    secondColor="#E2C4FF"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                    1.  Dépôt de linge dans un <br/>point de rammassage
                   </h2>
                  <p>
                  Dans votre espace de commande, sélectionnez les différents articles et indiquez leur nombre.
                  </p>
                </li>
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    cosmoIcon="true"
                    icon="car-time-colored"
                    secondColor="#E2C4FF"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                    2. Traitement de ma <br/>commande
                  </h2>
                  <p>
                  Une fois votre commande validée et les différents services sollicités renseignés, votre linge est récupéré et directement acheminé à l’usine pour traitement.</p>
                </li>
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    icon="towel-colored"
                    cosmoIcon="true"
                    secondColor="#A4FCC4"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                  3.  Livraison au point de vente <br/>
                  ou à domicile
                  </h2>
                  <p>
                  En 24H votre linge est prêt à être récupéré dans nos points de vente ou directement livrés chez vous.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="cosmos-section   linear">
            <div className="cosmos-grid-container home-card large">
                <div className ="card-group">
                  <h1 className="mega">
                  Passez votre commande sans un pas en 1 minute!
                  </h1>
                  <p>
                  Créez votre comte, confiez nous votre linge, souscrivez à nos packages, suivez votre commande en toute sécurité, et bénéficiez de nombreuses réductions grâce à votre espace Kremlin Pressing ! 
                  </p>
                  <TextButton
                    
                    text="Créer votre compte"
                    background={true}
                    backgroundColor="var(--Green)"
                    textColor="#fff"
                  />
                </div>
            </div>
          </div>

          {/* <div className="cosmos-section   padded-128">
         <div className="clearfix-128"></div>

            
            </div> */}

          </Layout>
      </>
      )
    }
  }
// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiProject {
//       edges {
//         node {
//           id
//           ProjectTitle
//           ProjectDescription
//         }
//       }
//     }
//   }
// `

