export default function Registration() {
  return (
    <>
      <div className="flex justify-center h-screen items-center gap-4">
        <form className="flex flex-col gap-4">
            <div className="flex text-3xl text-white justify-center font-bold font-serif tracking-wide">Register</div>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-xl border-2 border-amber-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-xl border-2 border-amber-400"
            />
          </div>
          <input
            type="text"
            placeholder="College ID"
            className="p-2 rounded-xl border-2 border-amber-400"
          />
          <textarea
            name="about"
            rows="4"
            cols="50"
            placeholder="About"
            className="p-2 rounded-xl border-2 border-amber-400 resize-none"
          ></textarea>
          <input
            type="text"
            placeholder="Hobbies"
            className="p-2 rounded-xl border-2 border-amber-400"
          />
          <input
            type="text"
            placeholder="Intrests"
            className="p-2 rounded-xl border-2 border-amber-400"
          />
          <input
            type="text"
            placeholder="LinkedIn profile URL (if any)"
            className="p-2 rounded-xl border-2 border-amber-400"
          />
          <button className="bg-[#34b48d] p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
