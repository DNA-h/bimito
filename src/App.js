import './App.css';
import logo from './logo.png';
import back from './back.png';
import heart from './heart.png';
import omr from './omr.png';
import mosaferati from './mosaferati.png';
import zelzele from './zelzele.png';
import atash from './atash.png';
import masoliyat from './masoliyat.png';
import sales from './shakhse-sales.png';
import badane from './badane.png';
import sakhteman from './sakhteman.png';
import phone from './24.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from 'react';



function App() {
  const [currentItem, updateCurrentItem] = useState(0);

  function renderMenuItems(img, title) {
    return (
      <div
        onClick={() => updateCurrentItem(1)}
        style={{
          cursor: 'pointer',
          marginLeft: '4vw',
          marginRight: '4vw',
          height: '8vw',
          width: '8vw',
          borderRadius: '4vw',
          borderStyle: 'solid',
          borderWidth: 3,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'rgb(76,135,129)'
        }}
      >
        <img
          style={{
            height: '4vw',
            width: '4vw'
          }}
          src={img}
        />
        <p style={{ fontSize: 16 }}>
          {title}
        </p>
      </div>
    )
  }

  return (
    <div className="App">
      <div
        style={{
          flexDirection: 'row',
          background: 'rgb(247,241,207)'
        }}
      >
        <img
          src={logo}
        />
        <div
          style={{
            flex: 1,
          }}
        >
          <p
            style={{
              textAlign: 'right',
              fontSize: 25,
              fontWeight: 'bold',
              marginRight: 15
            }}>
            بیمه نداری؟ با هم میهن هنوزم دیر نشده
          </p>
          <div
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <span style={{ fontWeight: 'bold' }} />
            <span style={{ fontWeight: 'bold' }}>
              بیمه وسایل نقلیه
            </span>
            <span style={{ fontWeight: 'bold' }}>
              بیمه اشخاص
            </span>
            <span style={{ fontWeight: 'bold' }}>
              بیمه اموال
            </span>
            <span style={{ fontWeight: 'bold' }}>
              خسارت آنلاین
            </span>
            <span style={{ fontWeight: 'bold' }}>
              بیمه های من
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: '100vw 39vw',
          height: '39vw',
          flexDirection: 'row'
        }}
      >

        <Carousel showArrows={false} selectedItem={currentItem}>
          <div style={{ flexDirection: 'row', height: '39vw', }}>
            <div
              style={{ flex: 1, height: '39vw', justifyContent: 'flex-end' }}
            >
              <img
                style={{
                  height: '20vw',
                  width: '20vw',
                  marginBottom: '7vw',
                  marginLeft: '6vw'
                }}
                src={sakhteman}
              />
            </div>
            <div
              style={{
                flex: 3,
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 350,
                  paddingTop: '7vw',
                  paddingLeft: '8vw',
                  paddingBottom: '8vw',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                }}
              >
                {renderMenuItems(heart, 'درمان و کرونا')}
                {renderMenuItems(omr, 'عمر')}
                {renderMenuItems(badane, 'بدنه')}
                {renderMenuItems(sales, 'شخص ثالث')}
                {renderMenuItems(mosaferati, 'مسافرتی')}
                {renderMenuItems(masoliyat, 'مسئولیت و مهندسی')}
                {renderMenuItems(zelzele, 'زلزله')}
                {renderMenuItems(atash, 'آتش سوزی')}
              </div>
            </div>
          </div>
          <div style={{ flexDirection: 'row' }}>
            <div
              style={{ flex: 1 }}
            >

            </div>
            <div
              style={{
                flex: 3,
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 350,
                  justifyContent: 'center',
                  alignItems:'center'
                }}
              >
                <p>
                  نوع و کاربری وسیله نقلیه خود را انتخاب کنید
                </p>
                <input
                  style={{ width: '60%' }}
                  type={'text'}
                />
              </div>
            </div>
          </div>
        </Carousel>

        <img
          src={phone}
          style={{
            height: '8vw',
            width: '8vw',
            borderRadius: '4vw',
            position: 'absolute',
            bottom: '3vw',
            left: '3vw',
            background: '#fff',
            zIndexL: 1000
          }}
        />
      </div>
    </div >
  );
}

export default App;
