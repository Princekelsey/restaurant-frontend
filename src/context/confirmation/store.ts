import makeStore from "../../store/makeStore";
import reducer from "./reducer";
import { State } from "./types";

const inittialState: State = {
  prompt: "",
  title: "",
  isOpen: false,
  proceed: () => {},
};

const [ConfirmationProvider, useConfirmationDispatch, useConfirmation] =
  makeStore(reducer, inittialState);

export { ConfirmationProvider, useConfirmationDispatch, useConfirmation };
