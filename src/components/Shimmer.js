const Shimmer = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent animate-shimmer"></div>
    </div>
  );
};

export default Shimmer;
