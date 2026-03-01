const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-700 px-4 py-2 rounded-md outline-none"
      />
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default Navbar;
