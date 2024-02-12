

export default function Tape({children, styles}) {
  return (
    <div className="sm:mb-8 sm:flex sm:justify-center">
      <div className={`flex gap-1 items-center relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ${styles}`}>
        {children}
      </div>
    </div>
  );
}
