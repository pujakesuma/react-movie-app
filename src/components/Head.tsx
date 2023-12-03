import { useEffect } from "react";

interface Prop {
  title: string;
}

const Head = ({ title }: Prop): null => {
  useEffect(() => {
    document.title = `${title} - Neblix`
  }, [title])

  return null
}

export default Head