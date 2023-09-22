export default function ProfileCard() {
  return (
    <>
      <div className="relative w-72 h-72 m-2 flex rounded-xl overflow-hidden hover:scale-105">
        <img
          className="absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#a838a8]"
          src="heroImages/4.jpg"
        />
        <div className="w-full flex flex-col justify-between ml-4 mt-2 font-semibold text-2xl z-10">
          <div>
            <div className="font-bold text-white text-2xl z-10">ID</div>
            <div className="font-bold text-white text-2xl z-10">B422001</div>
          </div>
          <div className="font-bold text-white text-2xl mb-2 z-10">
            Souvik Sarkar
          </div>
        </div>
      </div>
    </>
  );
}
