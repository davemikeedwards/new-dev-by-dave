export function BasicButton({ children, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      className="py-3 duration-500 shadow-md cursor-pointer bg-gradient-to-br hover:from-blue-100 hover:to-yellow-100 to-blue-100 from-yellow-100 bg-opacity-25 hover:bg-opacity-40 px-6 text-sm hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-xl hover:rounded-br-xl rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl border border-gray-400 w-max"
    >
      <div className="pb-0.5 text-gray-700 font-nunito">{children}</div>
    </div>
  );
}

export function AppLinkButton({ children, className, onClick }) {
  const style = className ? className : "";

  return (
    <div
      onClick={() => onClick()}
      className={`${style} w-full h-14 flex items-center justify-center border-gray-300 border rounded-lg shadow-md hover:shadow-xl hover:-mt-1 duration-300 cursor-pointer`}
    >
      {children}
    </div>
  );
}
