type Props = {
  cardToRender: number
}

const CardSkeleton = ({ cardToRender }: Props) => {
  return (
    <>
      {Array(cardToRender)
        .fill(1)
        .map((v, i) => (
          <div key={`${v}${i}`} className="my-1 px-1 w-1/3 lg:my-4 lg:px-4 md:w-1/5">
            <div className="block rounded-lg" >
              <div className="h-36 md:h-64 animate-pulse bg-gray-400 w-full object-cover object-center rounded-t-lg"></div>
              <div className="py-5">
                <h5
                  className="mb-4 w-3/4 h-4 animate-pulse bg-gray-500">
                </h5>
                <p className="bg-gray-400 animate-pulse h-3 w-1/3">
                </p>
              </div>
            </div >
          </div >
        ))
      }
    </>
  )
}

export default CardSkeleton