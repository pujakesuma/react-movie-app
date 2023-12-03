import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = {} as { [key: string]: string };

  for (const param of searchParams) {
    params[param[0]] = param[1];
  }

  return params;
}

export default useQueryParams