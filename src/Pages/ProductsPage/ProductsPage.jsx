import React from 'react'
import "./ProductsPage.css"
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'

export default function ProductsPage() {
  return (
    <div className='ProductPage'>
      <Navbar1 />
       <div className='products-page-container'>
            <h3>Products we Offer</h3>

            <div className='row '>
                <a className='products-item col-md-2 col-sm-3' href='#pvcMembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className = "fa-solid fa-umbrella"></i>
                        </div>
                        <div className='products-item-heading'>
                            PVC Membrane
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-2 col-sm-3' href='#appMembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className = "fa-solid fa-paint-roller"></i>
                        </div>
                        <div className='products-item-heading'>
                        APP Membrane
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-2 col-sm-3' href='#sbsMembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className="fa-solid fa-wrench"></i>
                        </div>
                        <div className='products-item-heading'>
                        SBS Membrane
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-2 col-sm-3' href='#CrystallineWaterproofing'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                            <i className ="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                        Crystalline Waterproofing
                            
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-2 col-sm-3' href='#epdmMembrane'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                            <i className ="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                            EPDM Membrane
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-2 col-sm-3' href='#CementitiousWPCoating'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                        <i className="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                            Cementitious WP Coating
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-3 col-sm-3' href='#PolyureaCoating'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                            Polyurea Coating
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-3 col-sm-3' href='#polyurethaneCoating'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                        polyurethane Coating
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-3 col-sm-6' href='#TPOMembranes'>
                    <div className='products-item-inner product-last-two'>

                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                        TPO Membranes
                        </div>
                    </div>
                </a>
                <a className='products-item col-md-3 col-sm-6' href='#RubberBasedEMB&FlexibleAcrylicCoating'>
                    <div className='products-item-inner product-last-two'>

                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                        Rubber Based EMB & Flexible Acrylic Coating
                        </div>
                    </div>
                </a>

            </div>
        

            <div className='products-page-product-container' id='pvcMembrane'>
                <h3>PVC membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='../images/products/1.jpg' alt="" />
                    </div>

                    <div className='product-page-content-container'>
                        <p>PVC membrane is used mainly for waterproofing of tunnels, water reservoirs., residential and commercial buildings and industrial roofs. Since this material is quite easy to install, strong enough (is of great tensile strength), has long service life, all this puts the PVC membrane to a higher level comparing to bituminous roofing materials, especially considering that such materials need constant maintenance and repair.</p>
                        <p>Due to its structure, the PVC membrane is very strong and simultaneously flexible material which is resistant to precipitation, ultra-violet radiation, capable to withstand heavy surface and tensile loads.</p>
                    </div>
                </div>
            </div>

            <div className='products-page-product-container' id='appMembrane'>
                <h3>APP Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/2.jpeg' alt="" />
                    </div>

                    <div className='product-page-content-container'>                        
                  <p>
                    APP membranes are formulated with special distilled bitumen modified with Attactic Polypropylene (APP) for greater elasticity, flexibility, and further enhanced with a blend of&nbsp; Thermoplastic Polymer (TP) and Elastoplastic Copolymer (EPC) for high heat resistance, greater elongation and low temperature flexibility. The compound is then stabilized with opaque Mineral Stabilizers (MS) for impact resistance, UV resistance and durability.
              </p>
              <strong><span>FEATURES:</span></strong> 
              <ul>
                  <li>Total impermeability for total waterproofing</li>
                  <li>Excellent resistance to aging and weathering.</li>
                  <li> Outstanding bondability and seam integrity.</li>
                  <li>Flexibility at low temperature.</li>
                  <li>Stability at high temperature</li>
                  <li>Very high resistance to impact</li>
                  <li>Variety of finishes for exposed and covered applications</li>
                  <li> High tensile strength and tear resistance</li>
                  <li>Excellent for mechanical anchorage</li>
                  <li>Isotropic properties</li>
              </ul>
              
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='sbsMembrane'>
                <h3>SBS Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/3.jpg' alt="" />
                    </div>

                    <div className='product-page-content-container'>                        
                      <strong>Description</strong>
                      <p>SBS-modified bitumen cap ply for use in approved multi-ply membrane assemblies. SBS Membranes are composed of a proprietary formulation of elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen.</p>
                        <strong>i. Torch Applied SBS Membrane</strong>
              <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and is reinforced with tough, dimensionally stable non-woven polyester mat. The topside is surfaced with ceramic coated granules and the underside is surfaced with polyolefin burn-off film to facilitate heat welding.</p>
              <strong>ii. Self-Adhesive, HDPE Plain/HDPE Cross laminated</strong>
              <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and top layer embedded with HDPE plain or cross laminated surface and under side with special cold applied adhesive protected with silicon relesing paper.</p>
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='epdmMembrane'>
                <h3>EPDM Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/4.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Ethylene Propylene Diene Monomer, commonly known, as EPDM was earlier developed as a substitute of natural rubber. But due to its superior performance in certain specific conditions like resistant to weather, climate, ageing, ozone, temperature &amp; ageing, it is now being preferred over natural rubber at areas which are more prone to such conditions. They are widely used all over the world for waterproofing application.</p>
              <p>EPDM Sheets are highly recommended for both indoor and outdoor use. it has an operating temperature range -30&deg;C to +120&deg;C. It is also suitable for insulation purposes and offers resistance to corrosive chemicals like acids, bases &amp; mild solvents.</p>
              <strong>Applications :</strong>
              <ul>
                  <li>Linings for Tanks &amp; Vessels</li>
                  <li>Sealing &amp; Jointing</li>
                  <li>Water Proofing Membrane</li>
                  <li>Insulation Sheets in Construction Industry</li>
                  <li>Electrical Insulation</li>
                  <li>Gaskets for Automotive and Industrial Use</li>
              </ul>
                        
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='polyurethaneCoating'>
                <h3>Polyurethane Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/5.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Polyurethane Membranes are liquid-applied, highly permanent elastic, cold applied / cold curing, one component, polyurethane membrane used for long-lasting roof waterproofing. A solvent based, polyurethane roof waterproofing coating is based on pure elastomeric hydrophobic polyurethane resins. This unique method delivers superb mechanical, chemical, thermal, UV, and natural element resistance properties. Polyurethane liquid applied membrane cures by reaction with ground and air moisture</p>
              <strong>Applications: </strong>
              <ul style={{listStyleType:"disc"}}>
                  <li>Sloped Roof Waterproofing</li>
                  <li>Waterproofing of Balconies, Terraces, and Verandas</li>
                  <li>Waterproofing of Wet Areas (under-tile), such as Bathrooms, Kitchens, Balconies, and Auxiliary Rooms</li>
                  <li>Waterproofing of Pedestrian and Vehicular Traffic Decks, Podium and NTA area.</li>
                  <li>Waterproofing of Green Roofs, Flowerbeds, and Planter Boxes</li>
                  <li>Waterproofing of old Bitumen felts, Asphalt felts, EPDM and PVC Membranes, and old</li>
                  
              </ul>
                        
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='CementitiousWPCoating'>
                <h3>Cementitious WP Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/6.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <ul>
                <li>Acrylic/SBR polymer modified cementitious waterproofing slurry coating.</li>
                <li>Two component flexible modified waterproofing coating.</li>    
              </ul>
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='PolyureaCoating'>
                <h3>Polyurea Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/7.jpg' alt="" />
                    </div>

                <div className='product-page-content-container'>
                  <p>The latest coating technology is polyurea. Developed in the late 1980s for the automotive industry, this material is now used in a wide array of applications. Use of this material as industrial waterproofing has skyrocketed in popularity in the past decade due to its fast-curing, corrosion- and abrasion-resistant characteristics.</p>
                </div>
            </div>
            </div>
            <div className='products-page-product-container' id='CrystallineWaterproofing'>
                <h3>Crystalline Waterproofing </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/8.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Vandex invented crystalline waterproofing technology in 1943 &ndash; founding a whole new industry and gaining Worldwide recognition for its performance and unparalleled high quality in waterproofing and protection.In 1943 the Danish chemist Lauritz Jensen patented the new crystalline active concrete waterproofing method. In 1946 he founded his first company and called it VANDEX ("water out"). </p>
              <p>Chemical reaction between hydration product of cement and crystalline active ingredients with resulting crystal formation in concrete. The crystalline system includes :</p>
              <ul>
                <li>Crystalline Coating: Cementitious crystalline slurry applied with brush/broom/spray system on concrete masonary.</li>
                <li>Crystalline Admix: Crystalline active reagent added during the concrete mixing plant or during the pouring.</li>
                <li>Crystalline Mortar: Crystalline active reagent added in cement mortar mix.</li>
              </ul>
            </div>
                </div>
            </div>
            <div className='products-page-product-container' id='TPOMembranes'>
                <h3>TPO Membranes </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/9.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
             <p>There are many choices for TPO membranes. Only TPO offers excellent performance over &ldquo;standard&rdquo; TPO membranes and the industry&#39;s best guarantee: up to 35 years! Specifically, this patent-pending technology delivers next-generation performance against heat aging and UV degradation (the two key performance characteristics directly related to roof system longevity),and also exceeds all key ASTM standards for TPO membranes. Don't settle for standard TPO when you can get the advanced protection of TPO for your property.</p>
                    </div>
                </div>
            </div>
            <div className='products-page-product-container' id='RubberBasedEMB&FlexibleAcrylicCoating'>
                <h3>Rubber Based EMB & Flexible Acrylic Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/10.jpeg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <strong>1. Rubber Based:</strong>
             <p>Liquid applied bituminous coatings are highly flexible, high elongation and low permeability to water. The products are widely used in waterproofing of foundations, balconies,wet area and re-coat over the APP/SBS bituminous membrane.</p>
              <strong>2. Acrylic Based Flexible Coating:</strong>     
              <p>Liquid applied acrylic coatings are highly flexible, high elongation, heat resistance, UV protective and low permeability to water. The products are widely used in waterproofing of terrace, slopping roofs, top coat over EMB coating, balconies,wet area etc.</p>
            </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}
