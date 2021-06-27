import './App.css';
import logo from './logo.png';
import back from './back.png';
import heart from './heart.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function renderMenuItems(img, title) {
  return (
    <div
      style={{
        marginLeft: '3vw',
        marginRight: '3vw',
        height: '10vw',
        width: '10vw',
        borderRadius: '5vw',
        borderStyle: 'solid',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(76,135,129)'
      }}
    >
      <img
        style={{
          height: '5vw',
          width: '5vw'
        }}
        src={img}
      />
      <p>
        {title}
      </p>
    </div>
  )
}

function App() {
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
          <p>
            بیمه نداری؟ با هم میهن هنوزم دیر نشده
          </p>
          <div
            style={{
              flexDirection: 'row'
            }}
          >
            <span>
              بیمه وسایل نقلیه
            </span>
            <span>
              بیمه اشخاص
            </span>
            <span>
              بیمه اموال
            </span>
            <span>
              خسارت آنلاین
            </span>
            <span>
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
        <div
          style={{ flex: 1 }}
        >

        </div>
        <div
          style={{
            flex: 3,
          }}
        >
          <Carousel showArrows={true}>
            <div 
              style={{
                flex: 1,
                height: 350,
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
            </div>
            <div 
              style={{
                flex: 1,
                height: 350,
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
              {renderMenuItems(heart, 'درمان و کرونا')}
            </div>
          </Carousel>
        </div>
      </div>
    </div >
  );
}

export default App;
