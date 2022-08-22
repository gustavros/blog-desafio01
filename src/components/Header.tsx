import { MagnifyingGlass } from "phosphor-react";

export const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#574AE8] to-[#3EA1DB] text-[#ffffff] max-w-full h-64">
        <div className="max-w-full w-[900px] m-auto p-5">
          <div className="flex justify-between items-center mb-20 pt-10">
            <h1 className="text-2xl cursor-pointer">Codelândia</h1>
            <h2 className="text-2xl cursor-pointer">Blog</h2>
          </div>
          <div className="flex relative">
            <input
              type="text"
              className="w-full bg-[#ffffff] bg-opacity-20 h-16 rounded-md text-[#ffffff] pl-12 placeholder:text-gray-300 focus:outline-blue-700"
              placeholder="Pesquisar no Blog"
            />
            <MagnifyingGlass
              size={30}
              className="absolute left-3 top-4  text-[#ffffff] "
            />
          </div>
        </div>
      </div>
    </>
  );
};
