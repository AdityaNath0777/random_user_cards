import React, { useEffect, useState } from "react";

const Loader = () => {
  const [dot, setDot] = useState(".");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDot((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-40 text-center text-lg sm:text-xl xl:text-3xl text-slate-100 font-bold" >
      <span>Loading{dot}</span>
    </div>
  );
};

export default Loader;
