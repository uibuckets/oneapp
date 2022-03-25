
import bg from './assets/bg.jpg';
import wifi from './assets/icons/wifi.svg';
import dnd from './assets/icons/dnd.svg';
import blue from './assets/icons/blue.svg';
import air from './assets/icons/air.svg';

import bright from './assets/icons/bright.svg';
import mirror from './assets/icons/mirror.svg';
import music from './assets/icons/music.svg';


import Background from './components/Background';
import ControlButton from './components/ControlButton';
import MiniControlButton from './components/MiniControlButton';
import Slider from './components/Slider';
import IconButton from './components/IconButton';

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className=' w-auto h-auto flex justify-end items-start p-0  '>
        <img src={bg} className={"top-0 right-1 absolute"} style={{ width: "1024px", height: "auto" }} />
        <Background className={"absolute right-20 top-28"} width={"304px"} height={"380px"}>
          <div className='pt-2.5 pr-2.5 pl-2.5 w-full h-full flex flex-wrap content-start'>
            <Background className={"flex flex-col py-2.5 justify-between"} width={"136px"} height={"138px"} >
              <ControlButton arrow={true} icon={wifi} title={"Wi-Fi"} subtitle={"Off"} subtitleselected={"My Phone"} />
              <ControlButton arrow={true} icon={blue} title={"Bluetooth"} subtitle={"Off"} subtitleselected={"On"} />
              <ControlButton arrow={true} icon={air} title={"AirDrop"} subtitle={"Off"} subtitleselected={"On"} />
            </Background>
            <div className='flex flex-col h-fit '>
              <Background className={"ml-2.5 flex justify-center items-center"} width={"136px"} height={"64px"} >
                <ControlButton alwaysselected={true} arrow={true} icon={dnd} title={"Do Not Disturb"} />
              </Background>
              <div className='flex h-fit w-full ml-2.5 mt-2.5'>
                <Background width={"64px"} height={"64px"} >
                  <MiniControlButton arrow={false} icon={bright} title={"Keyboard Brightness"} />
                </Background>
                <Background className={"ml-2"} width={"64px"} height={"64px"} >
                  <MiniControlButton arrow={false} icon={mirror} title={"Screen Mirroring"} />
                </Background>
              </div>
            </div>
            <Background className="mt-2.5 px-2.5 " width={"100%"} height={"64px"}>
              <div className='ml-0 py-1 h-full flex flex-col items-center justify-between'>
                <ControlButton className={"ml-0 h-5 pt-1"} alwaysselected={true} arrow={true} title={"Display"} />
                <Slider />
              </div>
            </Background>
            <Background className="mt-2.5 flex items-center " width={"100%"} height={"64px"}>
              <div className='w-11 h-11 ml-2.5 bg-rose-500 rounded-md flex justify-center items-center'>
                <img src={music} />
              </div>
              <div className='text-tiny font-medium ml-2.5 text-white'>
                The best songs of 2020
              </div>
              <div className='ml-2.5 flex w-12 justify-evenly items-center'>
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.68652 11.2998C1.94043 11.2998 2.15625 11.1982 2.41016 11.0522L9.81152 6.77393C10.3384 6.46289 10.5225 6.25977 10.5225 5.92334C10.5225 5.58691 10.3384 5.38379 9.81152 5.0791L2.41016 0.794434C2.15625 0.648438 1.94043 0.553223 1.68652 0.553223C1.2168 0.553223 0.924805 0.908691 0.924805 1.46094V10.3857C0.924805 10.938 1.2168 11.2998 1.68652 11.2998Z" fill="white" fill-opacity="0.55" />
                </svg>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.99512 11.8491C2.21533 11.8491 2.39795 11.7793 2.61279 11.6504L8.08594 8.42773C8.38135 8.25586 8.54248 8.0625 8.60156 7.83691V10.9307C8.60156 11.5269 8.95605 11.8491 9.375 11.8491C9.59521 11.8491 9.77783 11.7793 9.99268 11.6504L15.4712 8.42773C15.8472 8.20215 16.0137 7.93896 16.0137 7.62744C16.0137 7.32129 15.8472 7.05811 15.4712 6.83252L9.99268 3.60986C9.77783 3.48096 9.59521 3.41113 9.375 3.41113C8.95605 3.41113 8.60156 3.7334 8.60156 4.32959V7.42334C8.54248 7.19775 8.38135 7.00439 8.08594 6.83252L2.61279 3.60986C2.39258 3.48096 2.21533 3.41113 1.99512 3.41113C1.57617 3.41113 1.22168 3.7334 1.22168 4.32959V10.9307C1.22168 11.5269 1.57617 11.8491 1.99512 11.8491Z" fill="white" fill-opacity="0.26" />
                </svg>

              </div>
            </Background>
            <Background className="mt-2.5 px-2.5" width={"100%"} height={"64px"}>
              <div className='ml-0 py-1 h-full flex flex-col items-center justify-between'>
                <ControlButton className={"ml-0 h-5 pt-1"} alwaysselected={true} arrow={true} title={"Sound"} />
                <div className='ml-0 mt-1 flex w-full'  >
                  <Slider />
                  <IconButton className={"w-auto ml-2.5"} arrow={false} icon={air} />
                </div>
              </div>
            </Background>
          </div>
        </Background>
      </div>
    </div>
  );
}

export default App;
