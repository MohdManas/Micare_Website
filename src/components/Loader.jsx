const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <div className="loading w-16 h-12">
        <svg width="64" height="48">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            className="stroke-accent/30 fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round"
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            className="loading-front stroke-accent fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round"
          ></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
