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
    },
    packFamily :{
      packName : "Pack Family",
      description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 30 jours",
      price : "5 000 FCFA par mois",
      specialPricing : [
        "séchage +1 000 Fcfa",
        "repassage +1 000 Fcfa"
      ],
      data:[
        "Statut: particulier/ménage",
        "Nombre minimal d’articles: 5",
        "Livraison sous 48 heures",
        "Inscription gratuite",
        "Ramassage et livraison gratuite ",

      ]
    },
    kilo :{
      packName : "Kremlin Service au Kilo",
      // description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 30 jours",
      price : "1 000FCFA/kilo",
      specialPricing : [
        "Séchage +1 000 Fcfa",
        "Repassage + 1 000 Fcfa"
      ],
      data:[
       "Service adapté pour les ménages",
      "Pour des vêtements du quotidien ne nécessitant pas un traitement spécifique",
      "Détachage absent",
      "Lavage essorage en machine",
      "L’ensemble de la commande est reconditionné dans un seul sac ",
      "Livraison au point de vente sous 48 heures",
      ]
    },
    asec :{
      packName : "Kremlin Service à sec",
      // description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 30 jours",
      price : "Prix variable en fonction du vêtement",
      specialPricing : [
        "Séchage +1 000 Fcfa",
        "Repassage + 1 000 Fcfa"
      ],
      data:[
      "Service adapté pour les vetements aux tissus délicats (smoking, robe de marriage, etc.)",
      "Pour des vêtements du quotidien ne nécessitant pas un traitement spécifique",
      "Détachage, lavage à la machine ou à la main",
      "Traitement specifique en fonction du linge",
      "Défroissage, conditionnement à la piece",
      "Livraison au point de vente sous 48 heures",
      ]
    }
    ,
    alapiece :{
      packName : "Kremlin Service à la piece",
      // description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 90 jours",
      price : "12 000 FCFA/3 mois",
      specialPricing : [
        "séchage +1 000 Fcfa",
        "repassage + 1 000 Fcfa"
      ],
      data:[
        "Service adequaté pour des vêtements aux de valeur",
        "Détachage, lavage à la machine",
        "sechage, repassage",
        "conditionement à la piece",
        "livraison sous 48 heures",
        "inscription au poin de vente sous 48 heure"
      ]
    },
    packFamilyTrim :{
      packName : "Pack Family Trimestriel",
      description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 90 jours",
      price : "12 000 FCFA/3 mois",
      data:[
        "statut: particulier/ménage",
        "nombre minimal d’articles: 5",
        "livraison sous 48 heures",
        "inscription gratuite",
        "ramassage et livraison gratuite",
      ]
    },
    packFamilyAn :{
      packName:"Pack Family Annuel",
      price : "48 000 FCFA par an",
      description :"Confiez nous votre linge ainsi que ceux de vos proches et gagnez jusqu’à 20% de réduction sur toutes vos factures pendant 30 jours",
      data:[
        "statut: particulier/ménage",
        "nombre minimal d’articles: 5",
        "livraison sous 48 heures",
        "inscription gratuite",
        "ramassage et livraison gratuite",
      ]
    },

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
            <div className="cosmos-grid-container home-slider align-center semi-height">
              <div className="home-text center">

              <h1 className="supra">
                Profitez de nos tarifs a des prix imbattables !
              </h1>

              </div>
            </div>
          </div>

          <div className="cosmos-section  padded-128">
          <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
                <h1 className="mega">
                  Nos services
                </h1>
                <p>
                  Profitez de nos Tarifs pressing & linge et d'une livraison en 24h chrono à des prix imbattables
                </p>
              </div>
              <div className="gridx4">
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
                  name={this.state.kilo.packName}
                  price={this.state.kilo.price}
                  currency=""
                  // description={this.state.kilo.description}
                  timing=""
                  Purposes={this.state.kilo.data}
                  Specials={this.state.kilo.specialPricing}
                  backgroundColor="#fff"
                  textColor=""
                  data = {this.state.kilo}
                />
                <PricingCard 
                  name={this.state.asec.packName}
                  price={this.state.asec.price}
                  currency=""
                  // description={this.state.asec.description}
                  timing=""
                  Purposes={this.state.asec.data}
                  Specials={this.state.asec.specialPricing}
                  backgroundColor="#fff"
                  textColor=""
                  data = {this.state.asec}
                />
                <PricingCard 
                  name={this.state.alapiece.packName}
                  price={this.state.alapiece.price}
                  currency=""
                  // description={this.state.alapiece.description}
                  timing=""
                  Purposes={this.state.alapiece.data}
                  Specials={this.state.alapiece.specialPricing}
                  backgroundColor="#fff"
                  textColor=""
                  data = {this.state.alapiece}
                />
                </div>
            </div> 
          
            <div className="cosmos-grid-container home-slider center">
              <div className="home-slider-header">
              <h1 className="mega">
                  Nos packages
              </h1>
              <p>
              Profitez de nos Tarifs pressing & linge et d'une livraison en 24h chrono à des prix imbattables
              </p>
              </div>
              <div className="clarify three">
              <PricingCard 
                  name={this.state.packFamily.packName}
                  price={this.state.packFamily.price}
                  currency=""
                  description={this.state.packFamily.description}
                  timing=""
                  Purposes={this.state.packFamily.data}
                  backgroundColor="#fff"
                  textColor=""
                  bordered={true}
                />
                <PricingCard 
                  name={this.state.packFamilyTrim.packName}
                  price={this.state.packFamilyTrim.price}
                  currency=""
                  description={this.state.packFamilyTrim.description}
                  timing=""
                  Purposes={this.state.packFamilyTrim.data}
                  backgroundColor="#fff"
                  textColor=""
                  bordered={true}
                />
                <PricingCard 
                  name={this.state.packFamilyAn.packName}
                  price={this.state.packFamilyAn.price}
                  currency=""
                  description={this.state.packFamilyAn.description}
                  timing=""
                  Purposes={this.state.packFamilyAn.data}
                  backgroundColor="#fff"
                  textColor=""
                  bordered={true}
                />
                
                
                </div>
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

