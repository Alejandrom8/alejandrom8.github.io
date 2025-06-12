import {useRouter} from "next/router";

export const useRouteHandler = () => {
  const router = useRouter();

  const handleRouteChange = (path) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(path);
    }
  }

  return handleRouteChange;
};