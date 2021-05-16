import { useState } from "react";

export default function converter() {
  const [result, setResult] = useState("");

  //8CDCD40077B81ED7ABB291FFBEC68D35
  //8cdcd400-77b8-1ed7-abb2-91ffbec68d35
  //8cdcd400-77b8-ed7a-bb291ffbec68

  const toFrontendStyle = (uuid) => {
    const array = [
      uuid.slice(0, 8),
      "-",
      uuid.slice(8, 12),
      "-",
      uuid.slice(12, 16),
      "-",
      uuid.slice(16, 20),
      "-",
      uuid.slice(20, 32)
    ];
    return array.join("").toLowerCase();
  };

  const toBackendStyle = (uuid) => {
    return uuid.split("-").join("").toUpperCase();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (result.split("-").length > 1) {
      setResult(toBackendStyle(result));
    } else {
      setResult(toFrontendStyle(result));
    }
  };

  return (
    <form className="form my-6" onSubmit={handleSubmit}>
      <div className="flex flex-col text-sm mb-2">
        <label htmlFor="uuid" className="font-bold mb-2 text-gray-800 ">
          Enter UUID
        </label>
        <input
          type="text"
          name="uuid"
          value={result}
          placeholder="uuid"
          className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
          onChange={(event) => setResult(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className=" w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
      >
        Convert
      </button>
    </form>
  );
}
