import { State } from "../context/confirmation/types";
import {
  useConfirmation,
  useConfirmationDispatch,
} from "../context/confirmation/store";

const useConfirm = (): State & {
  handleConfirm: (message: string, title?: string) => Promise<boolean>;
} => {
  const confirmation = useConfirmation();
  const setConfirmation = useConfirmationDispatch();

  const handleConfirm = async (prompt: string, title?: string) => {
    const res = await new Promise<boolean>((resolve) => {
      setConfirmation({
        prompt,
        title: title ?? "Alert!",
        isOpen: true,
        proceed: resolve,
      });
    });

    setConfirmation({ ...confirmation, isOpen: false });
    return res;
  };
  return {
    ...confirmation,
    handleConfirm,
  };
};

export default useConfirm;
