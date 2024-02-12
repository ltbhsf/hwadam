import Tape from "./tape";

export default function Container({ id, title, isFocused, onFocusChanged, content }) {
  return (
    <section className="text-gray-600 mb-12">
      <h2 className={`text-base lg:text-lg mb-4 ${isFocused && "font-bold"}`}>{title}</h2>

      <div
        onClick={() => onFocusChanged(id)}
        className={`flex justify-center items-center h-[350px] w-[270px] lg:h-[500px] lg:w-[400px] bg-gray-300 hover:bg-gradient-to-tl from-indigo-600 to-pink-400 hover:scale-105 transition rounded-md ${
          isFocused && "scale-105 bg-gradient-to-tl"
        }`}
      >
        <div className=" h-[347px] w-[267px] lg:h-[497px] lg:w-[397px] bg-white hover:border-grad rounded-md flex flex-col justify-around ">
          <ol className="text-start list-decimal pl-8 pr-6 py-5 text-sm lg:text-base [&>li]:mb-4 [&_ul]:list-disc [&_ul]:pl-4">
            {content}
          </ol>
          <Tape styles="hidden lg:block border-solid hover:bg-gradient-to-tr from-indigo-400 to-pink-300 text-black">
            의뢰하기
          </Tape>
        </div>
      </div>
    </section>
  );
}
