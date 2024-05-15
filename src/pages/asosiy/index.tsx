import CountUp from 'react-countup';

import "./style.scss";

const index = () => {
  return (
    <>
      <div className="">
        <h1 className="text-[24px] font-bold mb-5">Asosiy</h1>
        <div className="flex items-center justify-between flex-wrap gap-y-4 ">
          <div className="flex flex-col items-center justify-center w-[280px] h-[300px] rounded-[50px] shadow-lg">
            <h1 className="text-[50px] text-[#2389DA] font-semibold text-center"><CountUp end={423} duration={2}/> ta</h1>
            <p className="text-[30px] font-semibold text-center">Foydalanuvchi</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[280px] h-[300px] rounded-[50px] shadow-lg">
            <h1 className="text-[50px] text-[#2389DA] font-semibold text-center"><CountUp end={978} duration={2}/> ta</h1>
            <p className="text-[30px] font-semibold text-center">Buyurtma</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[280px] h-[300px] rounded-[50px] shadow-lg">
            <h1 className="text-[50px] text-[#2389DA] font-semibold text-center"><CountUp end={342} duration={2}/> ta</h1>
            <p className="text-[30px] font-semibold text-center">SMS jo‘natildi</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[280px] h-[300px] rounded-[50px] shadow-lg">
            <h1 className="text-[50px] text-[#2389DA] font-semibold text-center"><CountUp end={4} duration={2}/> xil</h1>
            <p className="text-[30px] font-semibold text-center">Xizmat</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
