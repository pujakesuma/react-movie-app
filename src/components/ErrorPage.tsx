import { ErrorState } from "../common/types"

interface ErrorProps {
  error: ErrorState
}

const ErrorPage = ({ error }: ErrorProps) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="text-lg md:text-xl">
        {error.status_code} | {error.status_message}
      </h1>
    </div>
  )
}

export default ErrorPage