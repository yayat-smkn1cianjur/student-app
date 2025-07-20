import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [nisn, setNISN] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi proses login
    setTimeout(() => {
      console.log("Login attempted with:", { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 animate-in fade-in duration-500">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">SMAKZIE</h2>
            <p className="text-gray-600 mt-2">Pengembangan Perangkat Lunak dan Gim</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="size-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="nisn"
                  placeholder="Nomer Induk Siswa Nasional"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-center"
                  value={nisn}
                  onChange={(e) => setNISN(e.target.value)}
                  required
                />
              </div>

             
            </div>

            <div className="flex items-center justify-between">
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-amber-500 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200 ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 size-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Cek Kelas"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Cek NISN kamu sesuai dengan pendaftaran ke SPMB Jabar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
