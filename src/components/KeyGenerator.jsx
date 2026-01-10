import { useEffect, useState, useCallback } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "../theme/ThemeToggler";

const KeyGenerator = () => {
  const { theme } = useTheme();
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });

  const generatePassword = useCallback(() => {
    let chars = "";
    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.number) chars += "0123456789";
    if (options.symbol) chars += "#$&!@^*()_+-=[]{}|;:,.<>?";

    if (!chars) return setPassword("");

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const getStrength = () => {
    const score = length + Object.values(options).filter(Boolean).length * 5;
    if (score >= 35) return { label: "Very strong", color: "bg-[#90EE33] text-black" };
    if (score >= 25) return { label: "Strong", color: "bg-green-500 text-white" };
    if (score >= 18) return { label: "Medium", color: "bg-yellow-400 text-black" };
    return { label: "Weak", color: "bg-red-500 text-white" };
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const strengthData = getStrength();

  return (
    <div className={`flex items-center justify-center p-4 md:p-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className={`w-full max-w-4xl rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-300 border ${
        theme === "dark" ? "bg-gray-900 border-gray-800 shadow-black" : "bg-gray-50 border-transparent shadow-gray-200"
      }`}>
        
        {/* Row 1: Display and Copy Button */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <div className={`flex-1 flex items-center justify-between border-[1.5px] rounded-full px-5 md:px-8 md:max-w-155 py-3 shadow-sm transition-colors ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <span className={`text-lg md:text-2xl font-medium tracking-tight font-sans truncate pr-2 md:pr-4 ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}>
              {password}
            </span>
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <span className={`text-[10px] md:text-sm font-bold px-3 md:px-4 py-1 rounded-full whitespace-nowrap ${strengthData.color}`}>
                {strengthData.label}
              </span>
              <button
                onClick={generatePassword}
                className={`transition-colors p-1 ${theme === "dark" ? "text-gray-500 hover:text-blue-400" : "text-gray-400 hover:text-gray-600"}`}
              >
                <FiRefreshCw size={20} className="md:w-6 md:h-6 stroke-[2.5px]" />
              </button>
            </div>
          </div>

          <button
            onClick={copyPassword}
            className="bg-[#0066FF] text-white px-8 md:px-12 py-3.5 md:py-3 rounded-full md:rounded-[30px] font-bold text-lg md:text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Row 2: Length Adjustment */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <span className={`text-lg md:text-2xl md:min-w-[220px] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Password length: <strong className={`${theme === "dark" ? "text-white" : "text-black"} ml-1`}>{length}</strong>
            </span>

            <div className="flex flex-1 items-center gap-4 md:gap-6">
              <button
                onClick={() => setLength((l) => Math.max(4, l - 1))}
                className={`w-10 h-10 md:w-14 md:h-14 border rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  theme === "dark" ? "border-gray-700 text-gray-400 hover:bg-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-50"
                }`}
              >
                <FaMinus size={14} className="md:text-lg" />
              </button>

              <div className="relative flex-1 flex items-center">
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(+e.target.value)}
                  className="custom-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0066FF 0%, #0066FF ${((length - 4) / 46) * 100}%, ${theme === "dark" ? "#374151" : "#f3f4f6"} ${((length - 4) / 46) * 100}%, ${theme === "dark" ? "#374151" : "#f3f4f6"} 100%)`,
                  }}
                />
              </div>

              <button
                onClick={() => setLength((l) => Math.min(50, l + 1))}
                className={`w-10 h-10 md:w-14 md:h-14 border rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  theme === "dark" ? "border-gray-700 text-gray-400 hover:bg-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-50"
                }`}
              >
                <FaPlus size={14} className="md:text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 3: Character Selection */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p className={`text-lg md:text-2xl md:min-w-[220px] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Characters used:
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 md:gap-8">
            {[
              ["upper", "ABC"],
              ["lower", "abc"],
              ["number", "123"],
              ["symbol", "#$&"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center gap-3 md:gap-4 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={() => setOptions({ ...options, [key]: !options[key] })}
                    className={`peer appearance-none w-7 h-7 md:w-9 md:h-9 border-2 rounded-lg md:rounded-xl transition-all ${
                      theme === "dark" ? "border-gray-700 checked:border-[#0066FF] bg-gray-800" : "border-gray-200 checked:border-[#0066FF] bg-white"
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center scale-0 peer-checked:scale-100 transition-transform">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" className="md:w-[18px] md:h-[15px]">
                      <path d="M1 7L4.5 10.5L13 1.5" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <span className={`text-lg md:text-2xl font-bold ${theme === "dark" ? "text-gray-200" : "text-[#0D1B2A]"}`}>
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 32px;
          height: 32px;
          background: ${theme === "dark" ? "#1f2937" : "white"};
          border: 2px solid #0066ff;
          border-radius: 50%;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230066FF' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E");
          background-size: 16px;
          background-repeat: no-repeat;
          background-position: center;
          box-shadow: 0 4px 10px rgba(0, 102, 255, ${theme === "dark" ? "0.3" : "0.15"});
        }
        @media (min-width: 768px) {
          .custom-slider::-webkit-slider-thumb {
            width: 50px;
            height: 50px;
            background-size: 24px;
          }
        }
        .custom-slider::-moz-range-thumb {
          width: 32px;
          height: 32px;
          background: ${theme === "dark" ? "#1f2937" : "white"};
          border: 2px solid #0066ff;
          border-radius: 50%;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230066FF' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E");
          background-size: 16px;
          background-repeat: no-repeat;
          background-position: center;
        }
        @media (min-width: 768px) {
          .custom-slider::-moz-range-thumb {
            width: 50px;
            height: 50px;
            background-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default KeyGenerator;