import people from "../assets/people.jpg";

export default function Introduce({id}) {
  const text =
    "99%의 보통사람에게 가장 합리적인 비용으로 법률관계에 도움을 주고 있는 법무사는 전문적인 법률지식과 120여년 역사 속의 오랜 실무 경험을 바탕으로 법률 자문, 민사소송, 민사집행, 부동산등기, 상업등기, 회생파산 등 다양한 법률 서비스를 제공하고 있습니다. 화담 법무사 사무소(대표 김형근)는 최고의 법률 전문가로서 고객이 만족하는 법률서비스 제공을 목표로 하며 이를 위하여 끊임 없이 고객의 소리에 귀를 기울이며 최적의 솔루션 제공에 최선을 다하고 있습니다.";

  return (
    <div id={id} className="flex lg:flex-row flex-col lg:justify-around mb-32">
      <img
        src={people}
        alt="법무사 김형근 소개 사진"
        className="lg:w-2/6 lg:h-1/2 rounded-md mb-2"
      />
      <span className="lg:w-2/5 lg:flex-1 lg:ml-14 flex flex-col justify-around text-justify gap-2">
        <p className="leading-8 whitespace-pre-line">{text}</p>
        <span className="text-end border-solid ">화담 법무사 사무소 대표 김형근</span>
      </span>
    </div>
  );
}
