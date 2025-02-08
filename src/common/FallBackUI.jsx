import React from "react";

const FallBackUI = () => {
  const handleGoToHome = () => window.location.replace("/");

  return (
    <div className="text-center p-2 flex flex-col items-center justify-center bg-slate-500 text-white h-screen">
      <h1 className="h-10 -mt-40 text-3xl font-bold">
        Oops! Something went wrong.
      </h1>
      <p className="h-10 texl-xl font-semibold">
        We're working to fix this issue. Please try again later.
      </p>
      <button onClick={handleGoToHome} className="cursor-pointer font-semibold px-4 py-2 rounded-md bg-blue-500 backdrop:blur-md ">
        Go to <span className="font-bold hover:underline">Home</span>
      </button>
    </div>
  );
};

export default FallBackUI;
