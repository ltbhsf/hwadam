import "./App.css";
import { useEffect, useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from "./components/Header";
import Balloon from "./components/Balloon";
import Main from "./components/Main";
import Route from "./components/Route";
import Introduce from "./components/Introduce";
import Sigoto from "./components/Sigoto";
import Footer from "./components/Footer";

const navigation = [
  { name: "법무사 소개", id: "introduce" },
  {
    name: "민사일반",
    id: "msss",
    content: (
      <>
        <li>
          민사소송
          <ul>
            <li>지급명령, 대여금 등 각종 민사 청구</li>
            <li>소장, 답변서, 준비서면, 증거자료 제출 </li>
            <li>변제공탁, 집행공탁, 담보공탁</li>
          </ul>
        </li>
        <li>
          민사집행
          <ul>
            <li>가압류, 가처분 등 보전집행</li>
            <li>압류, 경매 등 강제집행</li>
          </ul>
        </li>
        <li>
          가족관계 및 가사사건
          <ul>
            <li>출생, 혼인, 입양, 개명, 국적취득 </li>
            <li>친권, 후견</li>
            <li>이혼, 재산분할</li>
          </ul>
        </li>
      </>
    ),
  },
  {
    name: "등기(부동산•상업•법인)",
    id: "dg",
    content: (
      <>
        <li>
          부동산 등기
          <ul>
            <li>부동산매매, 임대차 등</li>
            <li>상속, 증여 재건축, 재개발 </li>
            <li>신탁, 저당권 등</li>
          </ul>
        </li>

        <li>
          상업등기
          <ul>
            <li>주식회사</li>
            <li>유한회사, 유한책임회사</li>
            <li>합명회사, 합자회사 소상공인</li>
          </ul>
        </li>

        <li>
          법인등기
          <ul>
            <li>비영리사단법인</li>
            <li>비영리재단법인 </li>
            <li>사회적기업, 협동조합 </li>
            <li>특수법인 등</li>
          </ul>
        </li>
      </>
    ),
  },
  {
    name: "회생/파산",
    id: "hsps",
    content: (
      <>
        <li>
          법원에 제출할 모든 서류 작성 대행
          <ul>
            <li>파산, 면책, 회생 신청서</li>
            <li>중지명령, 금지명령 신청</li>
            <li>재산목록 작성</li>
            <li>진술서 작성</li>
            <li>변제계획 작성 등</li>
          </ul>
        </li>
        <li>파산선고, 회생개시결정 이후의 사후관리</li>
      </>
    ),
  },
  { name: "오시는 길", id: "route" },
];

export default function App() {
  const [currLoc, setCurrLoc] = useState("main");
  const [pathPosition, setPathPosition] = useState([]);

  const screenHandler = (loc) => {
    setCurrLoc(loc);
    setPathPosition({
      main: 0,
      introduce: document.getElementById("introduce").offsetTop - 180,
      route: document.getElementById("route").offsetTop - 100,
      sigoto: document.getElementById("sigoto").offsetTop - 100,
    });
  };

  useEffect(() => {
    let loc = currLoc;
    if (currLoc == "msss" || currLoc == "dg" || currLoc == "hsps") {
      loc = "sigoto";
    }
    window.scrollTo({
      top: pathPosition[loc],
      behavior: "smooth",
    });
  }, [currLoc, pathPosition]);

  return (
    <>
      <Header onClick={screenHandler} navigation={navigation} />

      <div className=" bg-white isolate px-6 pt-14 lg:px-8">
        <Balloon />
        <Main />
        <Introduce id="introduce" />
        <Sigoto
          id="sigoto"
          focusedWork={currLoc}
          workList={navigation.slice(1, 4)}
          onFocusChanged={screenHandler}
        />
        <Route id="route" />
      </div>

      

      <Footer />
    </>
  );
}
