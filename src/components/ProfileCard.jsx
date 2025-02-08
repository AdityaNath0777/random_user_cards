const ProfileCard = ({ user }) => {
  if (!user || Object.keys(user).length === 0) return (
    <p>User not found</p>
  );

  return (
    <div
     className="flex h-full profile-card text-slate-100 cursor-pointer hover:scale-105 duration-200 bg-blue-400/80 col-span-12 sm:col-span-9 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full min-w-30 max-w-80  aspect-[3/2] backdrop:blur-sm justify-center items-center gap-1 sm:gap-2 lg:gap-4 border border-slate-100 rounded-lg px-6 py-4">
      <div className="w-[30%]">
        <img
          src={user.picture.large}
          alt={`Profile pic of ${user.name?.first} ${user.name?.last || ""}`}
          loading="lazy"
          className="rounded-lg border-3 border-slate-400 min-w-5 w-full max-w-20 mx-auto sm:max-w-36  md:max-w-28 object-contain"
        />
      </div>
      <div className="w-[70%] flex-1 shrink-0">
        <p className="name-container text-slate-50 text-base xl:text-lg font-bold">
          <span>{user.name?.first}</span> <span>{user.name?.last}</span>
        </p>
        <p className="gender-container text-slate-100 text-sm xl:text-base capitalize">
          <span>{user.gender || "N/A"}</span>
        </p>
        <p className="contact-number-container text-slate-100 text-sm xl:text-base">
          <span>{user.phone || "N/A"}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
