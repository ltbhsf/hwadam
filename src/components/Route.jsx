import { useEffect } from "react";
import naverMapIcon from "../assets/Map_Service_Icon.png";
import Tape from "./tape";

function renderMap() {
  var mapOptions = {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
  };

  var map = new window.naver.maps.Map("map", mapOptions);
}

const Link_to_map = { name: "naverMap", src: naverMapIcon, href: "#" };

export default function Route({ id }) {
  useEffect(() => {
    // 컴포넌트가 마운트되면 지도를 렌더링합니다.
    renderMap();
  }, []);
  return (
    <>
      <h1
        id={id}
        className="text-3xl font-bold text-gray-900 sm:text-[2.3rem] mb-10"
      >
        오시는 길
      </h1>
      <section className="flex flex-col lg:flex-row lg:justify-around mb-48">
        <div id="map" className="lg:w-2/5 h-96 rounded-md"></div>

        <div className="lg:w-2/5 lg:h-96 text-start text-[13px] lg:text-base text-gray-600 flex flex-col justify-center items-start gap-4">
          <p className="underline underline-offset-8">
            서울 강동구 고덕동 345-1 일화고덕비즈밸리사옥
          </p>
          <p>평일 9:00 ~ 18:00</p>
          <p>
            <div className="bg-[#8b50a4] rounded-full text-white text-sm w-5 h-5 inline-block text-center">
              5
            </div>{" "}
            고덕역 도보 7분
          </p>
          <p>
            <div className="bg-[#00A84D] rounded-full text-white text-sm w-5 h-5 inline-block lg:mb-8 text-center">
              2
            </div>{" "}
            상일동역 도보 15분
          </p>

          <Tape>
            <div className="flex flex-row ">
              <a key={Link_to_map.name} href={Link_to_map.href}>
                <img className="border-black w-8" src={Link_to_map.src} />
              </a>
            </div>
            지도 바로가기
            <span aria-hidden="true" className="font-semibold text-indigo-600">
              &rarr;
            </span>
          </Tape>
        </div>
      </section>
    </>
  );
}
