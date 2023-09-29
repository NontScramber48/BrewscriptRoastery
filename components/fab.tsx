export default function Fab() {
  const PhoneButton = () => (
    <button className="bg-white border-2 border-[#00CD00] text-white  hover:border-green-900 font-bold w-16 h-16  rounded-full mb-4 ml-12">
      <a href="https://line.me/R/ti/p/%40ccy8003v">
        <img
          src="/assets/images/fabim/line.png"
          alt="Message"
          className="  inline-block   "
        />
      </a>
    </button>
  );

  const MessengerButton = () => (
    <button className="bg-white text-white border-2 border-[#db256f] font-bold  hover:border-red-900  w-16 h-16  rounded-full mb-4 ml-2">
      <a href="https://www.facebook.com/page.smlsoft/?locale=th_TH">
        {/* <img
          src="/assets/images/messenger.webp"
          alt="Message"
          className="w-16 h-16 inline-block mr-2"
        /> */}
        <img
          src="/assets/images/fabim/chat.png"
          alt="chat"
          className="  inline-block   "
        />
      </a>
    </button>
  );
  const Contact = () => (
    <button className="bg-white text-white border-2 border-primary font-bold  hover:border-gray-900  w-16 h-16  rounded-full mb-4 ml-2">
      <a href="#section-id">
        {/* <img
          src="/assets/images/messenger.webp"
          alt="Message"
          className="w-16 h-16 inline-block mr-2"
        /> */}
        <img
          src="/assets/images/fabim/h2.png"
          alt="chat"
          className="  inline-block  w-10 h-10  "
        />
      </a>
    </button>
  );
  const AddButton = () => (
    <button className="bg-white border-2 border-[#00CD00]  hover:border-green-900 text-white font-bold w-16 h-16  rounded-full mb-4 ml-2">
      <a href="tel:0%9185%19655">
        <img
          src="/assets/images/fabim/phone.png"
          alt="phoneicon"
          className="  inline-block   "
        />
      </a>
    </button>
  );
  return (
    <>
      {" "}
      <div className="fixed bottom-0 right-0 flex flex-col justify-end mr-4 mb-2 z-10 justify-items-end">
        {/* text */}
        <div className="flex items-center mx-auto  group ml-32">
          <div className="bg-gray-100 px-3 py-2 rounded-full mr-24  mb-4 hidden group-hover:block hover:flex fixed">
            <p className="text-sm text-gray-700">ติดต่อเรา</p>
          </div>{" "}
          <div className="ml-24">
            {" "}
            <Contact />
          </div>
        </div>
        <div className="flex items-center mx-auto group ml-[5.5rem] ">
          <div className="bg-gray-100 px-3 py-2 rounded-full mr-24  mb-4 hidden group-hover:block hover:flex fixed">
            <p className="text-sm text-gray-700">พูดคุยผ่านLine</p>
          </div>
          <div className="ml-24">
            {" "}
            <PhoneButton />
          </div>
          {/* text */}
          {/* icon */}

          {/* icon */}
        </div>

        <div className="flex items-center mx-auto group ml-32 ">
          <div className="bg-gray-100 px-3 py-2 rounded-full mr-24  mb-4 hidden group-hover:block hover:flex fixed">
            <p className="text-sm text-gray-700">โทรหาเรา</p>
          </div>{" "}
          <div className="ml-24">
            {" "}
            <AddButton />
          </div>
        </div>

        <div className="flex items-center mx-auto  group ml-32">
          <div className="bg-gray-100 px-3 py-2 rounded-full mr-24  mb-4 hidden group-hover:block hover:flex fixed">
            <p className="text-sm text-gray-700">Power by NIPA!</p>
          </div>{" "}
          <div className="ml-24">
            {" "}
            <MessengerButton />
          </div>
        </div>
      </div>
    </>
  );
}
