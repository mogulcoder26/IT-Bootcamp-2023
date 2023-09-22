export default function Registration() {
  return (
    <>
      <div className="flex justify-center h-screen items-center gap-4">
        <form className="flex flex-col gap-4">
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold font-serif text-transparent flex justify-center">Register</h1>
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
          <button className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
