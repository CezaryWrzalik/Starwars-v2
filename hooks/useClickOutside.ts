import { RefObject, useEffect } from "react";

const useClickOutside = (
  content: RefObject<HTMLDivElement>,
  closeModal: () => void,
  background: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClickOuside = (e: MouseEvent) => {
      if (
        content.current &&
        !content?.current.contains(e.target as HTMLDivElement)
      ) {
        closeModal();
      }
    };

    background.current?.addEventListener("click", handleClickOuside);
    return () => {
      background.current?.removeEventListener("click", handleClickOuside);
    };
  }, [content]);
};

export default useClickOutside;
