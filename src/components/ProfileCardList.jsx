import React from "react";
import { useUsers } from "../hooks/useUsers";
import ProfileCard from "./ProfileCard";
import Loader from "./Loader";

const ProfileCardList = () => {
  const { users, isLoading, error } = useUsers();

  if (isLoading) {
    return (
      <div className="h-[480px]" role="status" aria-live="polite">
        <Loader />;
      </div>
    );
  }

  if (!users || !users.length) {
    throw new Error("User list not found");
  }

  return (
    <div className="card-container bg-blue-200/40 rounded-lg backdrop:blur-sm py-10 grid justify-around grid-cols-1 sm:grid-cols-4 md:grid-cols-12 place-items-center gap-4 px-10 mx-auto text-slate-200">
      {users.map((user) => (
        <ProfileCard user={user} key={`${user.login.uuid}-${user.email}`} />
      ))}
      {error && (
        <p className="text-red-500 px-4 py-2 col-span-12 w-full rounded-md bg-blue-100/50 font-semibold text-center text-lg h-10">
          {error}
        </p>
      )}
    </div>
  );
};

export default ProfileCardList;
