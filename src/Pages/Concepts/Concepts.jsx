import React from 'react'
import "./Concepts.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
export default function Concepts() {
  return (
    <div className = 'Concepts'>
      <Navbar1 />
      <div className = "ConceptWaterProofing">
        <div className="ConceptWaterProofingInfo">
          <h1>Concept of waterproofing</h1>
          <p>Waterproofing is the combination of materials of system that prevent the water intrusion into structural member of building as its finished of portion. The basic of waterproofing to prevent the structure from water/moisture and make it water tight. Water is very harmful to structure and it can give damages more than any natural disasters.</p>
        </div>
        <div className="ConceptWaterProofingImage">
            <img src="/images/coverpage.jpg" alt="conceptwaterproofing" />
        </div>
      </div>
      <div className = "Recommendations">
        <h2 style={{textAlign:"center", margin:"2rem"}} >RECOMMENDATION</h2>
        <div className="RecommendationCards">
          <a  href='#WaterSources' style={{gridRow:"1/2",gridColumn:"1/2"}} className="RecommendationCard">
            WATER SOURCES
          </a>
          <a href='#WaterProofingIndia' className="RecommendationCard">
            WATERPROOFING IN INDIA
          </a>
          <a href='#waterProofingProducts' style={{gridRow:"2/3",gridColumn:"1/2"}} className="RecommendationCard">
            WATERPROOFING PRODUCTS
          </a>
          <a href='#selectProduct' className="RecommendationCard">
            HOW TO SELECT RIGHT PRODUCTS  
          </a>
        </div>
      </div>
      <div id = "WaterSources" className='ConceptCard' >
        <h2 style={{ textAlign: "center" }} >WATER SOURCES</h2>
          Generally water intrusion into any structure due to
          <ol>
          <li>Rain water for above ground waterproofing.</li>
          <li>Below ground waterproofing water sources may be ground water and high hydrostatic pressure of water present in soil.</li>
          </ol>
          The availability of water into the structure is due to numerous sources that includes:
          <ol>
          <li>Natural gravity</li>
          <li>Surface tension</li>
          <li>Wind on air currants</li>
          <li>Capillary action</li>
          <li>Hydrostatic Pressure</li>
          <li>Encounter to first problem eloping of roof shall &frac14; in/ft instead of that roof 80% of waterproofing problem may be reduce by dreaming away from structure.</li>
          <li>Surface tension is the momentum that occurs when water is being moved by gravity approaches in change building plane. Example : Brick face to lintel. This problem occurs at mortar joints. To prevent this situation drip edges, flashing stop water intrusion.</li>
          <li>If there is wind present in rain storm water is docilely affected by wind current. Flashing will prevent wind and water to penetrate inside the structure.</li>
          <li>Capillary action occurs in a situation where water is absorbed into envelops substrate by wicking action. This situation is most likely to occurs with masonry on concrete portion of envelop on below ground levels. May be during construction it may have high voids, specs within composition.</li>
          </ol>
          <ol>
          <li>High hydrostatic pressure most commonly affects the below ground portion of the structure, it may depends on subject to waterproofing. This pressure can be significant, particularly below ground areas where the water table is near the surface or rises near the surfaces during the heavy rain falls. Water under this significant pressure will sealed out any jointures&rsquo; in the envelope especially the areas of weakness e.g. terminations and transition between the envelope component. That is why below grade system have to be better protected against water infiltration then those above grade. For example concrete above grade is only protection by water repellants, whereas below grade same concrete must be protected with a waterproofing material to prevent any leakages into the structure.</li>
          </ol>
      </div>
      <div id="WaterProofingIndia" className='ConceptCard' >
        <h2 style={{ textAlign: "center",  }} >	Waterproofing in India</h2>
        The concept of waterproofing started with building construction activities in India. People in the very primitive age were aware of waterproofing.
          Activities:
        In India the Conventional Waterproofing methods were being used. Mudfuska &amp; clay were used in conventional waterproofing method. Bitumen uses of Waterproofing had a very long history.
        Why Bitumen accepted:
        Bitumen available in a cold state at room temperature on heating state bitumen becomes thin liquid which goes in pours and seals the substrate, which helps to stop the water seepage through substrate. Bitumen available in a cold state at room temperature, on heating state bitumen becomes thin liquid which goes in pours and seals the substrate which helps to stop the water seepage through substrate
        Draw backs of Bitumen:
        <ol>
        <li>Low Softening Point of 50 to 60<sup>0</sup>C</li>
        <li>Bitumen become soft in summer and it stats dripping through walls</li>
        <li>Cold flexibility in bitumen is not there , it start crack during cold weather.</li>
        </ol>
        Hence there was the need of Bitumen with higher softening point which gives idea of Oxidizing Bitumen.

        Oxidized Bitumen Felt:
        <p>Oxidized bitumen was being used for waterproofing purpose and later on the concept of reinforcing the Bitumen was developed with different layers of Oxidized Bitumen. Hessian cloth for reinforcement was used.This system was named as Hot mop system and it has been defined as Built-up roofing system. Tarfelt was first time introduced in India in 1956 later on the reinforcement was replaced by glass fabric and this has given the new waterproofing system as&rdquo; Tarfelt&rdquo;.</p>
        <p><strong>The various treatment of Tarfelt Mop-up roofing is given below;</strong></p>
        <ol>
        <li>Five course treatment.</li>
        <li>Seven course treatment.</li>
        <li>Nine course treatment.</li>
        </ol>
        Thickness of Tarfelt membrane 1.0 mm -1.5 mm. Oxidized Membrane thickness up to 5.0 mm. But still the problem of cold flexibility remain as it. Although there was a slight improvement but still membrane were tends to crack even a temperature of 10<sup>0</sup>C. Moreover the 100<sup>0</sup>C softening point was not enough during peck hour andsurface temperature go beyond 80<sup>0</sup>C. This results in soften, melting bleeding of oxidized membrane.
        As time passes various products and modern construction techniques are implemented. Some of common products are used for waterproofing are given below;
      </div>
      <div id="waterProofingProducts" className='ConceptCard'>
        <h2 style={{ textAlign: "center" }} > Waterproofing Products </h2>
        <table>
          <tr>
            <td>Plastic </td>
            <td>PVC / TPO /HDPE</td>
          </tr>
          <tr>
            <td>Rubber </td>
            <td>EPDM</td>
          </tr>
          <tr>
            <td>Bituminous </td>
            <td>Oxidised and Modified Membrane</td>
          </tr>
          <tr>
            <td>Liquid Applied</td>
            <td>Polyurethane, Polyurea, PUMA, Epoxies, EMB, Acrylic</td>
          </tr>
          <tr>
            <td>Minerals</td>
            <td>Cementitious, Modified Elastomeric Coatings</td>
          </tr>
          <tr>
            <td>Integral WP</td>
            <td>Crystalline System, Integral (additive) WP</td>
          </tr>
          <tr>
            <td>Conventional WP</td>
            <td>Brick Bat Coba, Mudfuska, Acrylic Cementitious slurry, Kota/Madrana Stone</td>
          </tr>
          <tr>
            <td>Liquid Applied</td>
            <td>Polyurethane, Polyurea, PUMA, Epoxies, EMB, Acryliclining, grouting with cement slurry.</td>
          </tr>
          </table>
          <ol>
            <li><strong>APP Membrane:</strong></li>
            <p >Scientist technologist modified the bitumen with Attactic Polypropylene. This development causes revolutionary changes in concept of waterproofing. Physical characteristics of bitumen with this modification has change drastically. The Softening point goes more then 150<sup>0</sup>C and Cold flexibility increases up to -15<sup>0</sup>C.</p>
            <ul>
            <li>Gives higher softening point&nbsp;</li>
            <li>Hiegher cold flexibility.</li>
            <li>Glass fiber / polyester reinforcement improve mechanical properties. i.e. tensile strength, tearing resistance poperties.</li>
            <li>Improve puncture resistance.</li>
            <li>Improve the weathering properties.</li>
            <li>Higher elongation.</li>
            </ul>
            <li><strong>SBS Membranes:</strong></li>
            <p  >SBS Membranes are composed of a proprietary formulation of elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen.The Softening point 120<sup>0</sup>C and Cold flexibility increases up to -30<sup>0</sup>C.</p>
            <ul>
            <li>Gives higher softening point</li>
            <li>Hiegher cold flexibility.</li>
            <li>Glass fiber / polyester reinforcement improve mechanical properties. i.e. tensile strength, tearing resistance poperties.</li>
            <li>Improve puncture resistance.</li>
            <li>Improve the weathering properties.</li>
            <li>Higher elongation.</li>
            </ul>
            <ol>
            <li><strong>Torch Applied SBS Membrane:</strong></li>

            <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and is reinforced with tough, dimensionally stable non-woven polyester mat. The topside is surfaced with ceramic coated granules and the underside is surfaced with polyolefin burn-off film to facilitate heat welding.</p>
            <li><strong>Self-Adhesive, HDPE Plain/HDPE Cross laminated:</strong></li>
            <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and top layer embedded with HDPE plain or cross laminated surface and under side with special cold applied adhesive protected with silicon relesing paper.</p>
          </ol>
          
            <li><strong>PVC Mmembrane:</strong></li>
            <p >PVC membrane is used mainly for waterproofing of tunnels, water reservoirs, residential and commercial buildings and industrial roofs. Since this material is quite easy to install, strong enough (is of great tensile strength), has long service life, all this puts the PVC membrane to a higher level comparing to bituminous roofing materials, especially considering that such materials need constant maintenance and repair.</p>
          <p  >Due to its structure, the PVC membrane is very strong and simultaneously flexible material which is resistant to precipitation, ultra-violet radiation, capable to withstand heavy surface and tensile loads. Normally the life cycle of PVC is 30 to 40 years.</p>
          
            <li><strong>TPO Membrane:</strong></li>
          <p  >There are many choices for TPO membranes. Only TPO offers excellent performance over &ldquo;standard&rdquo; TPO membranes and the industry's best guarantee: up to 35 years! Specifically, this patent-pending technology delivers next-generation performance against heat aging and UV degradation (the two key performance characteristics directly related to roof system longevity),and also exceeds all key ASTM standards for TPO membranes. Don&rsquo;t settle for standard TPO when you can get the advanced protection of TPO for your property.</p>
          
            <li><strong>EPDM Membrane:</strong></li>
          <p  >Ethylene Propylene Diene Monomer, commonly known, as EPDM was earlier developed as a substitute of natural rubber. But due to its superior performance in certain specific conditions like resistant to weather, climate, ageing, ozone, temperature &amp; ageing, it is now being preferred over natural rubber at areas which are more prone to such conditions. They are widely used all over the world for waterproofing application.EPDM Sheets are highly recommended for both indoor and outdoor use. it has an operating temperature range -30&deg;C to +120&deg;C. It is also suitable for insulation purposes and offers resistance to corrosive chemicals like acids, bases & mild solvents.</p>
          
            <li><strong>Polyurethane Membranes:</strong></li>
          <p  >Polyurethanes are liquid-applied, highly permanent elastic, cold applied / cold curing, one component / two component, polyurethane membrane used for long-lasting roof waterproofing. A solvent based, polyurethane roof waterproofing coating is based on pure elastomeric hydrophobic polyurethane resins. This unique method delivers superb mechanical, chemical, thermal, UV, and natural element resistance properties.</p>
          
            <li><strong>PUMA Technology: </strong></li>
          <p >PUMAunique waterproofing system based on a polyurethane modified methylmethacrylate. This combination assures that the finished system is rapidly ready for use and can also be applied during the winter period at a very low temperatures. The different products that make up the product cure to form a highly elastic foot trafficable waterproof system on old or new concrete, tiles, metal, wood, epoxy and methylmethacrylate existing deck coatings.</p>
          
            <li><strong>Polyurea:</strong></li>
            <p >The latest coating technology is polyurea. Developed in the late 1980s for the automotive industry, this material is now used in a wide array of applications. Use of this material as industrial waterproofing has skyrocketed in popularity in the past decade due to its fast-curing, corrosion- and abrasion-resistant characteristics.</p>
            <p>Hybrid polyurea is also avilabe for the wateproofing treatment.</p>
            <ol >
            <li><strong>Elastomeric Coatings ( EMB/Acrylic):</strong></li>
            <li><strong> Rubber Based: </strong></li>
            </ol>
            <p>Liquid applied bituminous coatings are highly flexible, high elongation and low permeability to water. The products are widely used in waterproofing of foundations, balconies,wet area and re-coat over the APP/SBS bituminous membrane.</p>
            <ol >
            <li><strong> Acrylic Based Flexible Coating:</strong></li>
            </ol>
            <p>Liquid applied acrylic coatings are highly flexible, high elongation, heat resistance, UV protective and low permeability to water. The products are widely used in waterproofing of terrace, slopping roofs, top coat over EMB coating, balconies,wet area etc.</p>
            <ol start="10">
            <li><strong>Cemetitious WP Coating:</strong></li>
            <li>Acrylic/SBR polymer modified cementitious waterproofing slurry coating.</li>
            <li>Two component flexible modified waterproofing coating.</li>
            <li><strong>Crystalline WP System:</strong></li>
            </ol>
            <p >Vandex invented crystalline waterproofing technology in 1943  founding a whole new industry and gaining Worldwide recognition for its performance and unparalleled high quality in waterproofing and protection. In 1943 the Danish chemist Lauritz Jensen patented the new crystalline active concrete waterproofing method. In 1946 he founded his first company and called it VANDEX (water out). Chemical reaction between hydration product of cement and crystalline active ingredients with resulting crystal formation in concrete. The crystalline system includes;</p>
            <ol >
            <li>Crystalline Coating: Cementitious crystalline slurry applied with brush/broom/spray system on concrete masonary.</li>
            <li>Crystalline Admix: Crystalline active reagent added during the concrete mixing plant or during the pouring.</li>
            <li>Crystalline Mortar: Crystalline active reagent added in cement mortar mix.</li>
            <li><strong> Conventional WP System:</strong></li>
            </ol>
          <p>Lot of people even today use the conventional method of waterproofing. Few of them are common and being used in residential roofing, basements and wet areas. Brick bat Coba, Kota stone, acrylic polymeric cement slurry coating and grouting with non-shrink cement grout is common. However these system are depends on labour skills. These systems are not designed for the expansion contruction of building and very rigid in nature. Integral waterproofing compound used in cement mortar to fill the gaps.</p>
           </ol>
      </div>
      <div id="selectProduct" className='ConceptCard'>
          <h2 style={{ textAlign: "center"  }}> HOW TO SELECT RIGHT PRODUCT?</h2>
            <p >All manufacturer recommonds their products for various applications. The designer and project consultant are refering to product selection based on design speculations, climate, temerature etc. The product slection shall consider the following;</p>
            <ul >
            <li>Climate</li>
            <li>Exterior Temperature  Humidity</li>
            <li>Building Size, functional purpose</li>
            <li>Basements: Single/Double Basements</li>
            <li>Underground structure as per design loads</li>
            <li>Environmental Conditions</li>
            <li>Thermal Requirements</li>
            <li>Building Type/ Car Parking/Landscaping areas</li>
            <li>Bridge Deck</li>
            <li>Terrace Gardens</li>
            </ul>
            <p><strong>Installation of Waterproofing Products:</strong></p>
            <p >Before waterproofing pre-installation meeting of installer with consultant and contractor is required. They should discuss shedule of construction, waterproofing activities, system and specifications. It Installation need following:</p>
          <ul>
            <li>Roofing Contractor: Authorized  Experienced</li>
            <li>Pre-Installation Meetings with Client/Main Contractor</li>
            <li>Specification as per manufacturer/ outline specification</li>
            <li>Site Clearance</li>
            <li>Sound surface as per recommendations</li>
            <li>Installation procedure</li>
          </ul>
      </div>
      <Footer/>
    </div>
  )
}
