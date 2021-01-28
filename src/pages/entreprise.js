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
                Notre clientèles entreprise !
              </h1>

              </div>
            </div>
          </div>
        <div className="cosmos-section padded-128">
          <div className="cosmos-grid-container home-slider center ">
              <div className="home-slider-header">
                <h1 className="mega">
                  Hôtel/restaurant/ salle de fête/clinique ou toute autre entreprise ...
                </h1>
                <p>
                Nos services de pressing pour votre linge ou votre équipement de maison/bureau, Kremlin Pressing est désormais votre partenaire du propre!
                <br/>
                Nous disposons d’un service de traitement en masse pour votre linge en volume, du début à la fin de la chaîne d’usinage.

                </p>
              </div>
              <div className="gridx4">
              <MiniCard
                  title="Blanchissement"
                  backgroundColor="#EAF1FB"
                  cosmoIcon={true}
                  icon="t-shirt"
                  iconColor="#020288"
                  secondColor="#FFF59B"
                />
                <MiniCard
                  title="Amidonnage"
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
                  title="nettoyage de meubles/tapis"
                  backgroundColor="#FFE6E5"
                  cosmoIcon={true}
                  icon="shoes"
                  iconColor="#020288"
                  secondColor="#FFBDBC"
                />
              </div>
              <div className="home-slider-header">
                <p>
                Pour avoir plus d’informations sur notre fonctionnement et nos différents tarifs contactez nous directement via les canaux ci après:
                <br/>
                </p>
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

