import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">

      <nav className="bg-white">
        <div className="py-4 px-6">
          <img src="/images/logo.png" alt="Logo" className="w-32 h-auto" />
        </div>
      </nav>

      <div className="flex flex-grow w-full">
        <div className="w-1/2 flex flex-col items-center justify-start flex-grow mt-16">

          <div className="w-[844px] h-[475px]">
            <img
              src="/images/workout 1.png"
              alt="Workout"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="relative w-1/2 flex justify-center items-center bg-white">
          <div className="max-w-sm w-full p-8">
            <h2 className="text-3xl font-bold text-left mb-1">Sign In</h2>
            <p className="font-inter text-[14px] font-extralight text-left leading-6 text-black/30" >Please login to continue to your account.</p>
            <div className="mt-5">
              <form action="">
                <div className="relative mt-6">
                  <input
                    type="email"
                    className="peer w-full h-14 px-6 placeholder-transparent rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 border border-gray-300 hover:border-blue-600 transition duration-200"
                    placeholder="name"
                  />
                  <label
                    htmlFor="email"
                    className="font-inter font-thin absolute left-3 top-4 ml-1 -translate-y-3 bg-white px-1 text-gray-400 text-sm transition-all duration-200 ease-linear peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:text-gray-400 peer-focus:top-1 
                     peer-focus:-translate-y-3 
                    peer-focus:text-blue-600 peer-focus:text-xs"
                  >
                    Email
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="email"
                    className="peer w-full h-14 px-6 placeholder-transparent rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 border border-gray-300 hover:border-blue-600 transition duration-200"
                    placeholder="name"
                  />
                  <label
                    htmlFor="email"
                    className="font-inter font-thin absolute left-3 top-4 ml-1 -translate-y-3 bg-white px-1 text-gray-400 text-sm transition-all duration-200 ease-linear peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:text-gray-400 peer-focus:top-1 
                     peer-focus:-translate-y-3 
                    peer-focus:text-blue-600 peer-focus:text-xs"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="keep-logged-in"
                    className="w-4 h-4 border-8 border-black focus:ring-blue-600 focus:ring-2 rounded"
                  />
                  <label
                    htmlFor="keep-logged-in"
                    className="text-black text-sm font-medium font-inter"
                  >
                    Keep me logged in
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200 mt-4"
                >
                  Sign in
                </button>

                <div className="flex items-center mt-4 w-full">
                  <hr className="w-full border-gray-300"/>
                  <span className="px-4 text-gray-500 text-md">or</span>
                  <hr className="w-full border-gray-300"/>
                </div>
                
                <button className="flex items-center justify-center w-full max-w-sm py-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-sm transition duration-200 mt-4">
                  <span className="text-gray-800 text-sm font-semibold">Sign in with Google</span>
                  <img 
                  src="/images/Group.png"
                  alt="Google Logo"
                  className="w-5 h-5 ml-2"
                  />
                </button>

                  <div className="flex items-center justify-center mt-6 text-sm text-gray-600 gap-1">
                    Need a account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Create one
                    </a>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
