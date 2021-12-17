import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

function CarouselComponent() {
    const [itens, setItens] = useState([
        {
            img: "https://i.imgur.com/lPEtJIq.png",
            titulo: "Titulo 1",
        },
        {
            img: "https://i.imgur.com/MyiXz3a.png",
            titulo: "Titulo 1",

        },
        {
            img: "https://i.imgur.com/bm4V1TF.png",
            titulo: "Titulo 1",
        },
        {
            img: "https://i.imgur.com/dQuVTd1.png",
            titulo: "Titulo 1",
        },
    ])
    return (
        <div>
            <Carousel>
                {
                    itens.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))
                }


            </Carousel>
        </div>
    )
}

export default CarouselComponent