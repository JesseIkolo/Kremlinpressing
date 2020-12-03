import React from 'react'
import { graphql, Img, Link } from 'gatsby'
import Layout from '../components/layout'
import {Tag, TestimonyCard, PricingCard , MiniCard, TextButton, Notification, Para, socialButton, SquaredButton} from '../components/molecule'
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
            <div className="cosmos-grid-container home-slider align-center">
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
                            text="Passer ma commande"
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

          <div className="cosmos-section semi-height  padded-128">
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
              Votre service de blanchisserie en un clic.
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
                    Suivi sécurisé de votre linge
                   </h2>
                  <p>
                  Vous enregistrer votre linge sans vous déplacer et en toute sécurité et vous avez la possibilité de suivre l’exécution de votre commande de bout en bout  jusqu’à la livraison.
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
                      Statistiques en temps réel
                  </h2>
                  <p>
                  Instantanément après l’enregistrement et la validation de votre commande vous recevez votre facture numérique dans votre interface client et vous avez la possibilité de les consulter  à tout moment et d’avoir le suivi de votre consommation.
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
                    icon="ecommerce-colored"
                    secondColor="#FFF59B"
                    iconColor="#020288"
                    backgroundColor="transparent"
                  />
                  <h2>
                    1. Dépôt du linge
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
                    2. Traitement de ma commande
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
                  3.  Livraison au point de vente/à domicile
                  </h2>
                  <p>
                  En 24H votre linge est prêt à être récupéré dans nos points de vente ou directement livrés chez vous.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="cosmos-section semi-height  linear">
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

          <div className="cosmos-section semi-height  padded-128">
          <div className="cosmos-container-no-mmargin-auto home-slider center">
              <div className="home-slider-header">
                <h1 className="mega">
                  Nos services
                </h1>
              </div>
              <div className="horizontal-marquee">
              <MiniCard
                  title="Lavage au kilo"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="service coorporate"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Repassage"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Ramassage et livraison à Domicile"
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
                  title="Lavage au kilo"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="gift"
                  iconColor="#020288"
                  secondColor="#00C67E"
                />
                <MiniCard
                  title="Nettoyage à sec"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
              </div>
          </div>
          <div className="clearfix-64"></div>
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                  Nos tarifs pressing & linge
              </h1>
              <p>
              Profitez de nos Tarifs pressing & linge et d'une livraison en 24h chrono à des prix imbattables
              </p>
              </div>
              <div className="clarify three">
                <PricingCard 
                  name="Pack FAMILY"
                  price="12000"
                  currency="FCFA"
                  description="Vous êtes plus de  2 membres d’une même famille, proches ou amis à être clients chez Kremlin Pressing, alors constituez  une FAMILLY et profitez jusqu’à 20% de réduction sur le montant total de votre facture !"
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="#fff"
                  textColor=""
                  bordered={true}
                />
                <PricingCard 
                  name="Pack DAILY"
                  price="25000"
                  currency="FCFA"
                  description="Vous êtes un hôtel/restaurant/ salle de fête et vous désirez que l’on entretient quotidiennement votre linge de service, souscrivez à notre Pack DAILY et profitez jusqu’à 50% de réduction sur votre commande."
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="rgba(40,100,190,1)"
                  textColor="#fff"
                  bordered={true}
                />
                <PricingCard 
                  name="Pack WEEKLY"
                  price="45000"
                  currency="FCFA"
                  description="Vous désignez le jour de la semaine qui vous convient, et notre ramasseur-livreur se chargera de récupérer votre linge et de vous livrer sous 24H et bénéficiez jusqu’à 10% réduction sur votre facture globale."
                  timing="Mois"
                  Purposes={this.state.Purpose.data}
                  backgroundColor="rgba(0,198,126,1)"
                  textColor="#fff"
                  bordered={true}
                />
                </div>
            </div>
          <div className="clearfix-128"></div>

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

