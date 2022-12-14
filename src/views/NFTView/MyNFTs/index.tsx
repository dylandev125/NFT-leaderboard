import { useState } from 'react';
import FuelPurchase from 'components/FuelPurchase';
import Button from "components/Button";
import FuelTank from "components/FuelTank";
import PieChart from "components/PieChart";
import TrophyBadge from "components/TrophyBadge";

const MyNFTs = () => {
  const [isFuelPurchase, setFuelPurchase] = useState<boolean>(false);

  return (
    <div className="flex flex-col border-[3px] border-theme border-t-0 w-full h-full">
      <FuelPurchase isOpen={isFuelPurchase} onClose={() => setFuelPurchase(false)}></FuelPurchase>
      <div className="flex w-full h-[calc(100vh-250px)]">
        <div className="flex flex-col items-center overflow-auto scrollbar shrink-0 w-[290px] border-r-[3px] bg-opacity-20 bg-secondary border-theme py-[50px]">
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest">Position</h1>
            <label className="text-theme text-2xl font-bold">7</label>
          </div>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest">Earnings</h1>
            <label className="text-theme text-2xl font-bold">165</label>
          </div>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest">Points</h1>
            <label className="text-theme text-2xl font-bold">3000</label>
          </div>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest">Peak Price</h1>
            <label className="text-theme text-2xl font-bold">1.255</label>
          </div>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest">Peak Position</h1>
            <label className="text-theme text-2xl font-bold">2</label>
          </div>
          <div className="flex flex-col justify-center items-center mb-[50px]">
            <h1 className="text-xl tracking-widest mb-3">Fuel</h1>
            <FuelTank quantity={2} capacity={4}>

            </FuelTank>
          </div>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h1 className="text-xl tracking-widest mb-3">Races</h1>
            <img alt="" src="assets/icons/flag.svg" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl tracking-widest mb-5">Trophies</h1>
            <TrophyBadge rank={2} />
          </div>
        </div>

        <div className="flex flex-col w-full bg-[#090314] bg-gradient-radial from-[#264189FF] via-[#090314] to-[#090314]">
          <div className="flex items-center px-[50px] justify-between w-full h-[80px] bg-theme">
            <div className="">
              <span className="font-bold text-4xl">#53</span>
              <span className="text-lg"> ID</span>
            </div>

            <div className="flex gap-x-[20px] items-center">
              <img alt="" src="assets/icons/token.svg" />
              <div>
                <label className="font-bold text-4xl">3.25 </label>
                <label className="text-lg">CRZ</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-full py-[40px] px-[100px]">
            <div className="grow"></div>
            <div className="w-full h-[3px] mb-5 bg-white shadow-[0_0_8px_1px_rgba(18,113,255,1)] rounded-full " />
            <div className="flex justify-between">
              <PieChart value={33} title={"Speed"} />
              <PieChart value={36} title={"Acceleration"} />
              <PieChart value={16} title={"Handling"} />
              <div className="relative flex flex-col gap-y-[2px]">
                <label className="text-xl tracking-widest text-center">
                  Rarity
                </label>
                <img alt="" className="w-[100px]" src="assets/icons/rarity.svg" />
                <label className="absolute top-[47px] left-[38px] font-bold text-4xl">
                  1
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full h-[100px] flex items-center pl-[60px] bg-theme">
        <Button width={170} height={70} className="flex gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF" onClick={() => setFuelPurchase(true)}>
          <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
          <div className="font-molot text-[#8840FF] text-2xl">
            <p>BUY</p>
            <p>FUEL</p>
          </div>
        </Button>

        <div className="w-full flex justify-center gap-x-[50px]">
          <Button width={170} height={70} className="flex gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF">
              <p className="font-molot text-[#8840FF] text-2xl">SELL</p>
          </Button>
          <Button width={250} height={70} className="flex gap-x-4 py-[10px]" bg1="#DC104F" bg2="#FF0B3B" onClick={() => {
            window.open(
              'http://3.237.103.239/CroozeNFT/',
              '_blank',
              'noopener,noreferrer'
          )}}>
              <p className="font-molot text-white text-2xl">LAUNCH GAME</p>
          </Button>
          <Button width={200} height={70} className="flex gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF">
              <p className="font-molot text-[#8840FF] text-2xl">TRANSFER</p>
          </Button>
          <Button width={80} height={70} className="flex gap-x-4 py-[10px]" bg1="#DC104F" bg2="#FFFFFF">
              <img alt="" src='assets/icons/fire.svg'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyNFTs;
