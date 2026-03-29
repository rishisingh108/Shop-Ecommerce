const ShimmerUI = () => {
    const dummyArr = Array(24).fill(0);

    return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 p-5">
      {/* Categories */}
        <div>
        <h2 className="text-center font-bold text-2xl mb-6 shimmer h-6 w-1/2 mx-auto rounded"></h2>
        <main className="flex flex-col gap-4">
            {
                dummyArr.map((ele, idx) => (
                <div className="shimmer h-10 p-2 rounded shadow" key={idx}>

                </div>
        ))}
        </main>
        </div>

      {/* Products */}
        <div>
        <h2 className="text-center font-bold text-2xl shimmer h-6 w-1/3 mx-auto rounded mb-4"></h2>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {
                dummyArr.map((ele, idx) => (
            <div key={idx} className="w-52 h-72 bg-white rounded-2xl p-4 shadow-lg flex flex-col justify-between space-y-3">
                <div className="shimmer h-32 w-full rounded"></div>
                <div className="shimmer h-4 w-3/4 rounded"></div>
                <div className="shimmer h-4 w-1/2 rounded"></div>
                <div className="shimmer h-4 w-1/3 rounded"></div>
            </div>
            ))}
        </main>
        </div>
    </div>
    );
};

export { ShimmerUI };
