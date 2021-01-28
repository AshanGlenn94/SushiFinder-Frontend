import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <div>We can add some top restaurant here based on the search location </div>*/}

        <div className='home__row'>
          <Product
            id='121212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9210.png'
            restaurant='the best restaurant of NY'
            rating={4}
          />
          <Product
            id='131212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9226.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='141212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9224.png'
            restaurant='the best restaurant of NY'
            rating={2}
          />
        </div>

        <div className='home__row'>
          <Product
            id='151212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9222.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='161212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9218.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='171212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9215.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='181212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9214.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='191212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9250.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='122212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9211.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
          <Product
            id='126212121'
            title='The best SUSHI of Japan'
            price={29.99}
            image='https://pngimg.com/uploads/sushi/sushi_PNG9212.png'
            restaurant='the best restaurant of NY'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
