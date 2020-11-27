import React from 'react'
import { graphql, Img, Link } from 'gatsby'
import Layout from '../components/layout'
import {TestimonyCard, PricingCard , MiniCard, TextButton, Notification, Para, socialButton, SquaredButton} from '../components/molecule'
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
            <div className="cosmos-grid-container home-slider align-center">
              <div className="home-text">

              <h1 className="supra">
                Votre pressing Kremlin livré à domicile dans Douala
              </h1>
              <form className="type-search">
                        <div className="icon-cacher"><CosmoIcon icon="location" iconColor="#fff"/></div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Je veux être livrer chez moi à ..."
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                        <TextButton 
                            cosmoIcon={false}
                            text="Demarrer"
                            background={true}
                            backgroundColor="#fff"
                            textColor="var(--Grey-2)"
                            to="signUp"
                            />
              </form>
             

              </div>
            </div>
          </div>

          <div className="cosmos-section semi-height  padded-128">
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
              La qualité d’un nettoyage professionnel, repassé et livré en moto et triporteur.
              </h1>
              </div>
              <ul className="clarify three">
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    cosmoIcon="true"
                    icon="route"
                    secondColor="#FFBDBC"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                    Ramassage de vos commandes programmé et/ou flexible.
                   </h2>
                  <p>
                    Nous recuperons les commadesselon votre emplacement, a la maison, au bureau, ou dans nos points de dépot, selon votre programme attribué ou  lorsque vous l’avez decidé
                  </p>
                </li>
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    cosmoIcon="true"
                    icon="laundry-machine-colored"
                    secondColor="#FFBDBC"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                  Nettoyage à sec traditionnel et<br/> de haute qualité.                  </h2>
                  <p>
                  Nous nettoyons à sec, à la main professionnel  et repassons pour tous vos vêtements délicats, sur cintre ou pliés.
                  Livré chez vous en 2 jours
                  </p>
                </li>
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    icon="iron-colored"
                    cosmoIcon="true"
                    secondColor="#FFBDBC"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                  Votre linge du quotidien lavé,<br/> séché et plié.
                  </h2>
                  <p>
                  Nous nettoyons à sec, à la main professionnel  et repassons pour tous vos vêtements délicats.                        </p>
                </li>
              </ul>
            </div>
          
            <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
              Votre commande reservé en 2 minutes, comment ca marche ?
              </h1>
              </div>
              <ul className="clarify text-center three">
                <li>
                  <SquaredButton
                    size="x3 no-padding"
                    cosmoIcon="true"
                    icon="ecommerce-colored"
                    secondColor="#FFF59B"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2 className="giga">
                    1. Planfier
                   </h2>
                  <p>
                    Dans votre espace, réservez vos créneaux de retrait et de livraison, selon le programme de votre compte
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
                  <h2 className="giga">
                    2. Confiez
                  </h2>
                  <p>
                  Confiez votre commande à nos l’un de nos collectionneurs, devant chez vous ou au bureau et recuperer votre code                  </p>
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
                  <h2 className="giga">
                  3. Rangez
                  </h2>
                  <p>
                  Vos linges sont prets a etre recuperer dans un point de retrait ou livrer chez-vous
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="cosmos-section semi-height  linear">
            <div className="cosmos-grid-container home-card large">
                <div className ="card-group">
                  <h1 className="mega">
                    Inscrivez-vous et passer votre commande 
                    en moins de 2 minutes.
                  </h1>
                  <p>
                  Creez votre de compte, programmez vos commades, achetez vos packages, suivez vos commandes, et bien d’autre fonctionalités grace a votre espace.
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

          <div className="cosmos-section semi-height  padded-128">
          <div className="cosmos-container-no-mmargin-auto home-slider center">
              <div className="home-slider-header">
                <h1 className="mega">
                  Nos services
                </h1>
              </div>
              <div className="horizontal-marquee">
              <MiniCard
                  title="Blanchiserie"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Blanchiserie"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Cordonerie"
                  backgroundColor="#FFE6E5"
                  cosmoIcon={true}
                  icon="shoes"
                  iconColor="#020288"
                  secondColor="#FFBDBC"
                />
                <MiniCard
                  title="Service express"
                  backgroundColor="#F2E5FF"
                  cosmoIcon={true}
                  icon="timer"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Livraison et collecte
                  à domicile"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="gift"
                  iconColor="#020288"
                  secondColor="#00C67E"
                />
                <MiniCard
                  title="Blanchisserie"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
              </div>
          </div>
          
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                  Nos tarifs pressing & linge
              </h1>
              <p>
              Profitez de nos Tarifs pressing & linge et d'une livraison en 24h chrono à des prix imbattables
              </p>
              </div>
              <div className="clarify four">
                <PricingCard 
                  name="Standard"
                  price="12000"
                  currency="FCFA"
                  description="Compte standard"
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="#fff"
                  textColor=""
                  bordered={true}
                />
                <PricingCard 
                  name="Kilo"
                  price="25000"
                  currency="FCFA"
                  description="Compte standard"
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="rgba(40,100,190,1)"
                  textColor="#fff"
                  bordered={true}
                />
                <PricingCard 
                  name="Mega"
                  price="45000"
                  currency="FCFA"
                  description="Compte standard"
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="rgba(0,198,126,1)"
                  textColor="#fff"
                  bordered={true}
                />
                <PricingCard 
                  name="Giga"
                  price="65000"
                  currency="FCFA"
                  description="Compte standard"
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="rgba(140,26,255,1)"
                  textColor="#fff"
                  bordered={true}
                />
                </div>
            </div>
            <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                Ils ont apprecié nos services, et ils en parlent.
              </h1>
              <p>
                Ils donnent leurs avis sur la qualité et le professionalisme de nos sevices
              </p>
              </div>
              <div className="clarify two">
                <TestimonyCard
                  TestimonierUserProfilPic=""
                  TestimonierName="André Noumangué"
                  Testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor luctus venenatis, lectus magna fringilla urna, porttitor."
                  TestimonierDescription="37 ans, investisseur dans immobilier locatif."
                  facebook="https://www.facebook.com/kremlinpressing"
                  twitter="https://www.twitter.com/kremlinpressing"
                  // linkedIn="https://www.linkedIn.com/kremlinpressing"
                  instagram="https://www.instagram.com/kremlinpressing"
                />
                <TestimonyCard
                  TestimonierUserProfilPic=""
                  TestimonierName="André Noumangué"
                  Testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor luctus venenatis, lectus magna fringilla urna, porttitor."
                  TestimonierDescription="37 ans, investisseur dans immobilier locatif."
                  facebook="https://www.facebook.com/kremlinpressing"
                  twitter="https://www.twitter.com/kremlinpressing"
                  // linkedIn="https://www.linkedIn.com/kremlinpressing"
                  instagram="https://www.instagram.com/kremlinpressing"
                />
              </div>
              </div>
            </div>

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

