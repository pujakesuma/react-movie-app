

const DetailSkeleton = () => {
  return (
    <>
      <div className="relative h-[55vh] md:h-[78vh]">
        <div className="h-full w-full animate-pulse bg-gray-400 object-cover object-center" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
        <div className="flex absolute -bottom-20 w-full justify-center z-40">
          <div className="w-20 h-[150px] md:w-40 md:h-[200px] animate-pulse bg-gray-500" />
          <div className="w-3/4 md:w-1/2 flex flex-col px-4 md:px-6">
            <h5
              className="mb-4 w-3/4 h-4 animate-pulse bg-gray-500">
            </h5>
            <p className="bg-gray-400 animate-pulse h-3 w-1/3 mb-8"></p>
            <p className="bg-gray-400 animate-pulse h-3 w-full mb-1"></p>
            <p className="bg-gray-400 animate-pulse h-3 w-full mb-1"></p>
            <p className="bg-gray-400 animate-pulse h-3 w-full mb-1"></p>
            <p className="bg-gray-400 animate-pulse h-3 w-full mb-1"></p>
            <p className="bg-gray-400 animate-pulse h-3 w-1/2"></p>

          </div>
        </div>
      </div>

    </>
  )
}

export default DetailSkeleton