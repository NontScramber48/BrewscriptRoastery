import Link from "next/link";
import Image, { ImageLoader } from "next/legacy/image";
import { CSSProperties } from "react";

const fabStyle: CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#B22222",
  color: "#ffffff",
  textAlign: "center",
  lineHeight: "60px",
  fontSize: "16px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  zIndex: 1000,
};
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Home() {
  return (
    <div className="bg-white ">
      <nav className="bg-orange-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold">Brewscript</div>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="text-white hover:text-gray-200">
                  about
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={fabStyle}>
        {" "}
        <Link href="#vission" passHref>
          {" "}
          Vission{" "}
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8  block 2xl:hidden sm:hidden md:hidden 2xl:hidden">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Brewscript Roastery
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-800">
            Type of Business
          </p> */}
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วอ่อน City raost
              </h3>
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2B)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                การคั่วอ่อนนั้นคือการให้เมล็ดกาแฟผ่านความร้อนไม่มาก
                เมล็ดกาแฟจะมีสีน้ำตาลอ่อนคล้ายอบเชยและไม่มีน้ำมันออกมามากเท่าไหร่
                กาแฟคั่วระดับอ่อน ส่วนใหญ่จะมีรสชาติเปรี้ยว กลิ่นหอมผลไม้
                ไม่เข้มจนเกินไป ทำให้รู้สึกสดชื่นเวลาดื่ม
                ซึ่งการคั่วอ่อนสามารถทำได้ทั้งกาแฟร้อนและเย็น
                แต่ถ้าจะทำในรูปแบบเย็นอาจจะต้องปริมาณน้ำตามความเหมาะสมของสายพันธุ์กาแฟ
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/light.webp"
              alt=""
              width={600}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วกลาง full city Roast
              </h3>{" "}
              <p className="mt-5  text-md leading-6 text-gray-800">
                เป็นการคั่วให้เมล็ดกาแฟมีสีที่เข้มขึ้นและทำให้ผิวของกาแฟเป็นมันเล็กน้อย
                รสชาติของกาแฟที่ได้จะมีความเข้มข้นปานกลางโดยจะให้รสชาติขมอมหวานและเปรี้ยวอยู่เล็กน้อย
                สามารถนำไปทำได้ทั้งเมนูแบบเย็นและร้อน
                ซึ่งเป็นระดับการคั่วกาแฟที่ได้รับความนิยมเป็นอย่างมาก
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/md.jpg"
              alt=""
              width={600}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วเข้ม vienna roast
              </h3>

              <p className="mt-5  text-md leading-6 text-gray-800">
                การคั่วอ่อนนั้นคือการให้เมล็ดกาแฟผ่านความร้อนไม่มาก
                เมล็ดกาแฟจะมีสีน้ำตาลอ่อนคล้ายอบเชยและไม่มีน้ำมันออกมามากเท่าไหร่
                กาแฟคั่วระดับอ่อน ส่วนใหญ่จะมีรสชาติเปรี้ยว กลิ่นหอมผลไม้
                ไม่เข้มจนเกินไป ทำให้รู้สึกสดชื่นเวลาดื่ม
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/dark.jpg"
              alt=""
              width={600}
              height={400}
            />
          </article>
        </div>
      </div>
      {/* mobile end start extra screen */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 hidden xl:block sm:block md:block 2xl:block">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Brewscript Roastery
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-800">
            Type of Business
          </p>
          <Link href="about" passHref>
            about
          </Link>
          <div>
            <div>
              <div>+</div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 grid max-w-xl grid-cols-1   border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <article className="flex max-w-xl flex-col col-span-2 items-start justify-between">
            <div className="group relative my-auto">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วอ่อน City raost
              </h3>
              {/* <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2B)</h1>
              </div> */}
              <p className="mt-5  text-md leading-6 text-gray-800">
                การคั่วอ่อนนั้นคือการให้เมล็ดกาแฟผ่านความร้อนไม่มาก
                เมล็ดกาแฟจะมีสีน้ำตาลอ่อนคล้ายอบเชยและไม่มีน้ำมันออกมามากเท่าไหร่
                กาแฟคั่วระดับอ่อน ส่วนใหญ่จะมีรสชาติเปรี้ยว กลิ่นหอมผลไม้
                ไม่เข้มจนเกินไป ทำให้รู้สึกสดชื่นเวลาดื่ม
              </p>
            </div>
          </article>
          <article className="w-12"></article>
          <article className="flex max-w-xl flex-col col-span-2 items-start justify-between ">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/light.webp"
              alt=""
              width={600}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <article className="flex max-w-xl flex-col items-start justify-between col-span-2">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/md.jpg"
              alt=""
              width={600}
              height={400}
            />
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>{" "}
          <article className="flex max-w-xl flex-col items-start justify-between col-span-2">
            <div className="group relative my-auto">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วกลาง full city Roast
              </h3>{" "}
              <p className="mt-5  text-md leading-6 text-gray-800">
                เป็นการคั่วให้เมล็ดกาแฟมีสีที่เข้มขึ้นและทำให้ผิวของกาแฟเป็นมันเล็กน้อย
                รสชาติของกาแฟที่ได้จะมีความเข้มข้นปานกลางโดยจะให้รสชาติขมอมหวานและเปรี้ยวอยู่เล็กน้อย
                สามารถนำไปทำได้ทั้งเมนูแบบเย็นและร้อน
              </p>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <article className="flex max-w-xl flex-col items-start justify-between col-span-2">
            <div className="group relative my-auto">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                คั่วเข้ม vienna roast
              </h3>

              <p className="mt-5  text-md leading-6 text-gray-800">
                การคั่วเข้มจะใช้เวลาในการคั่วนานที่สุด
                ทำให้เมล็ดกาแฟมีสีที่เข้มจนเกือบดำและมีน้ำมันกาแฟออกมาเคลือบบนผิวเมล็ดมาก
                รสชาติเปรี้ยวหวานจะหายไปทั้งหมด กลิ่นจะออกมีติดกลิ่นไหม้เล็กน้อย
                คาราเมลแบบสโมคๆ บอร์ดี้กาแฟจะหนักแน่น สีกาแฟจะออกมาชัด
                มีกลิ่นหอมชัดเจน
                จึงเหมาะคนที่ชอบกาแฟแบบเข้มและเมนูกาแฟที่ผสมนมเพราะจะได้กาแฟคั่วที่มีรสชาติเข้มข้น
                อร่อย หอมกลิ่นกาแฟแบบเต็มๆ
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between col-span-2">
            {" "}
            <img
              className="absolute inset-0 object-cover shadow-xl mx-auto mt-12"
              src="/assets/images/business/dark.jpg"
              alt=""
              width={600}
              height={400}
            />
          </article>
        </div>
      </div>
      <div id="vission"></div>
      <div className="mx-auto max-w-7xl px-6  lg:px-8 mb-64">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl mt-64 font-bold tracking-tight text-gray-900 sm:text-4xl">
            วิสัยทัศน์
          </h2>
        </div>{" "}
        <h2 className="text-xl mt-16 mb-16   text-gray-700 sm:text-xl  indent-28">
          เราเชื่อว่าการจัดการธุรกิจที่มีประสิทธิภาพนั้นเริ่มต้นจากการใช้เทคโนโลยีที่ทันสมัยและเข้าถึงข้อมูลได้รวดเร็ว
          ผลิตภัณฑ์ซอฟต์แวร์ของเราถูกออกแบบมาเพื่อทำให้ธุรกิจของคุณเข้าถึงข้อมูลอย่างรวดเร็ว
          วิเคราะห์ข้อมูลได้อย่างลึกซึ้ง
          สนับสนุนในการทำงานของพนักงานให้ง่ายและมีประสิทธิภาพยิ่งขึ้นผ่านระบบที่เป็นมิตรและมีประสิทธิภาพ
          และเราเปิดโอกาสให้ผู้บริโภคได้รับสินค้าที่มีคุณภาพ ราคาที่เหมาะสม
          และสามารถเข้าถึงได้ทั่วโลก
          พร้อมทั้งส่งเสริมการเติบโตของผู้ผลิตให้เข้าถึงผู้บริโภคอย่างมีประสิทธิภาพ
          ด้วยเทคโนโลยีที่ทันสมัย
          และทำให้ธุรกิจทั่วโลกสามารถแข่งขันได้ในยุคดิจิทัล
        </h2>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="group relative">
            <div className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <div className="mb-12">
                <span className="absolute inset-0 " />
                สิ่งที่เรามุ่งเน้นมีดังนี้
              </div>
            </div>

            <p className="mt-5  text-lg leading-6 text-gray-900">
              <b>
                {" "}
                1.เปิดโอกาสให้ผู้บริโภคได้รับสินค้าที่มีคุณภาพราคาเหมาะสม
                และสามารถเข้าถึงได้ทั่วโลก:
              </b>
              เน้นให้ผู้บริโภคสามารถซื้อสินค้าจากทั่วโลกได้โดยง่าย
              ในราคาที่เหมาะสม และมีคุณภาพ นั่นหมายความว่าโปรแกรม POS
              ของคุณจะต้องช่วยสนับสนุนการจัดการสินค้า การตั้งราคา
              และการจัดส่งที่มีประสิทธิภาพ
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              <b>
                {" "}
                2.ส่งเสริมการเติบโตของผู้ผลิตให้เข้าถึงผู้บริโภคอย่างมีประสิทธิภาพ:{" "}
              </b>
              ต้องทำให้ผู้ผลิตสามารถเข้าถึงตลาดที่กว้างขวางขึ้น
              และส่งเสริมการจัดจำหน่ายสินค้าอย่างมีประสิทธิภาพ เช่น
              การจัดการสต็อก การจัดการการส่งสินค้า และการจัดการการสั่งซื้อ
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              <b>3.ด้วยเทคโนโลยีที่ทันสมัย:</b> ในยุคดิจิทัลนี้
              เทคโนโลยีทำให้ทุกอย่างเป็นไปได้
              เราจึงต้องใช้เทคโนโลยีทันสมัยที่มีประสิทธิภาพ เช่น การใช้งาน cloud
              computing การวิเคราะห์ข้อมูลขนาดใหญ่ และการจัดการฐานข้อมูลแบบ
              real-time
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              <b> 4.ทำให้ธุรกิจทั่วโลกสามารถแข่งขันได้ในยุคดิจิทัล:</b>
              เราต้องการสร้างผลิตภัณฑ์ที่ช่วยให้ธุรกิจทั่วโลกสามารถแข่งขันในตลาดที่เปลี่ยนแปลงอย่างรวดเร็วนี้
              นั่นหมายความว่าโปรแกรม POS
              ของเราต้องสามารถปรับตัวได้ตามการเปลี่ยนแปลงของตลาด
              ปรับปรุงหรือปรับเปลี่ยนได้ง่าย
              และต้องทำให้ธุรกิจของลูกค้าของเราสามารถดำเนินการได้อย่างมีประสิทธิภาพและไม่มีปัญหาใด
              ๆ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
