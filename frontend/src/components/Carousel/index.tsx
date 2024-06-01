import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from './styles';
import { GrNext, GrPrevious } from "react-icons/gr";
import Console from "../../assets/Console.webp"
import { Button } from '../Button';

export default class Carousel extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={6}
          visibleSlides={4}
          infinite={true}
          isIntrinsicHeight={true}
          className='provider'
        >
          <Slider className='slider'>
            <Slide index={0}>
              <div className='slide'><img src={Console} alt="" /></div>
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>

            <Slide index={1}>
              <div className='slide'> <img src={Console} alt="" /> </div>
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>

            <Slide index={2}>
              <div className='slide'> <img src={Console} alt="" /></div>
              
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>

            <Slide index={3}>
              <div className='slide'> <img src={Console} alt="" /> </div>
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>

            <Slide index={4}>
              <div className='slide'> <img src={Console} alt="" /> </div>
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>
            
            <Slide index={5}>
              <div className='slide'> <img src={Console} alt="" /> </div>
              <div className='desc'>
                <span>Headset L503</span>
                <span>R$ 134,99</span>
                <Button title='Adicionar' />
              </div>
            </Slide>
          </Slider>

          <div className='navigation'>
            <ButtonBack className='back buttonArrow' children={<GrPrevious size={40} />} />
            <ButtonNext className='next buttonArrow' children={<GrNext size={40} />} />
          </div>
        </CarouselProvider>
      </Container>
    );
  }
}