import blogLogo from "../assets/blogLogo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] bg-slate-200 border-solid border-gray-300 inset-x-0 z-50 absolute bottom-0 text-sm text-gray-500 [&>section]:my-10 flex flex-col lg:flex-row justify-around items-center lg:py-6 lg:px-16 lg:[&>span]:after:content-['|']">
      <span>© 2024 화담 법무사 사무소, Inc. All rights reserved.</span>
      <span>사업자 등록번호</span> <span>대표자: 김형근</span>
      <span>전화: 010-5611-9720</span>
      <span>서울 강동구 고덕동 345-1 일화고덕비즈밸리사옥</span>
      <img src={blogLogo} alt="네이버 블로그" className="w-10" />
    </footer>
  );
}
