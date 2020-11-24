import React, { Component } from 'react';

// Assets

// .CSS
import './Testimonials.css'

// import temporal_testimonios_1 from "../../assets/temporal_testimonios_1.png"
// import temporal_testimonios_2 from "../../assets/temporal_testimonios_2.png"

import temporal_testimosio_1 from "../../assets/temporal_testimosio_1.png";
import temporal_testimonios_2 from "../../assets/temporal_testimonios_2.png";


class Testimonials extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  
  render() {
    return (

        <div className="container-testimonials" >
            <div className="container-title-testimonial"> 
                <span> Historias detras de las estadisticas</span>
            </div>

            <div className="container-block-historys-testimonials">

                <div className="cont-history-block">
                    <div className="box-image">
                        <span> Nombre y Apellido </span>
                        <span> Amiga de victima de violencia de g&eacute;nero </span>
                        <img src={temporal_testimosio_1} alt="imagen de testing"/>
                    </div>
                    <div className="cont-text-box">
                        <span> by <b> Amnistía Internacional </b> </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                        </p>
                    </div>
                </div>
                
                <div className="cont-history-block">
                    <div className="cont-text-box">
                        <span> by <b> Violencia de G&eacute;nero </b> </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                        </p>
                    </div>
                    <div className="box-image">
                        <span> Nombre y Apellido </span>
                        <span> Amiga de victima de tranfeminicidio </span>
                        <img src={temporal_testimonios_2} alt="imagen de testing"/>
                    </div>
                </div>
                
                <div className="cont-history-block">
                    <div className="box-image">
                        <span> Nombre y Apellido </span>
                        <span> Amiga de victima de violencia de g&eacute;nero </span>
                        <img src="https://neu-cdn-amnesty-org-prd.azureedge.net/cache/7/c/2/8/e/d/7c28ed7cbf460ae24b84aa379ce0c20981c9ec6d.jpg" alt="imagen de testing"/>
                    </div>
                    <div className="cont-text-box">
                        <span> by <b> Amnistía Internacional </b> </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                        </p>
                    </div>
                </div>
                
                <div className="cont-history-block">
                    <div className="cont-text-box">
                        <span> by <b> Violencia de G&eacute;nero </b> </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic eos eaque voluptatum reprehenderit quae,
                            nobis dolorum, fuga a eius magni atque doloremque aliquam fugiat ducimus ipsam. Numquam, dolor deleniti? 
                        </p>
                    </div>
                    <div className="box-image">
                        <span> Nombre y Apellido </span>
                        <span> Amiga de victima de tranfeminicidio </span>
                        <img src="https://www.amnesty.org/remote.axd/aineupstrmediaprd.blob.core.windows.net/media/1818/whatwedo_2944x1224_header.jpg?center=0.5%2c0.5&preset=fixed_1472_42" alt="imagen de testing"/>
                    </div>
                </div>

            </div>

        </div>
    )
  }
}

export default Testimonials;
