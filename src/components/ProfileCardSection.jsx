import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import Button from "./Button";
import ProfileCardList from "./ProfileCardList";

const ProfileCardSection = () => {
  const {
    itemsPerPage,
    page,
    handleNextPage,
    handlePrevPage,
    handleSubmitItems,
  } = useUsers();
  const [itemsCount, setItemsCount] = useState(itemsPerPage);

  return (
    <div className="profile-cards-section max-w-[1300px] mx-auto">
      <ProfileCardList />
      <div className="options-container mt-10 text-slate-800 gap-4 flex items-center justify-end ml-auto w-[50%]">
        <Button
          className={` font-semibold px-4 py-2 rounded-md duration-200  ${
            page <= 1 ? "bg-gray-600/50 cursor-not-allowed  text-gray-50" : "bg-slate-100 active:translate-y-1 cursor-pointer"
          }`}
          handleClick={handlePrevPage}
          disabled={page <= 1}
           aria-label="Previous Page"
        >
          Prev
        </Button>
        <span className={`px-3 py-2 font-semibold border-2 bg-slate-100  border-gray-400 rounded `}>
          {page}
        </span>
        <Button
          className={`font-semibold px-4 py-2 rounded-md  duration-200  ${
            page >= 10 ? "bg-gray-600/50 cursor-not-allowed  text-gray-50" : "bg-slate-100 active:translate-y-1 cursor-pointer"
          }`}
          handleClick={handleNextPage}
          disabled={page === 10}
           aria-label="Next Page"
        >
          Next
        </Button>
        <form
          className="flex gap-2 ml-10 justify-evenly items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitItems(itemsCount);
          }}
        >
          <label>
            <input
              type="number"
              className="bg-slate-100 font-medium px-4 py-2 rounded-md cursor-pointer outline-none"
              value={itemsCount}
              min={1}
              max={10}
              onChange={(e) => setItemsCount(Number(e.target.value))}
            />
          </label>
          <Button
            type="submit"
            className="bg-slate-100 font-semibold px-4 py-2 rounded-md cursor-pointer duration-200 active:translate-y-1 "
          >
            Go
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCardSection;
