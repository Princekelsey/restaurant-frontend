export type State = {
  prompt: string;
  title: string;
  isOpen: boolean;
  proceed: (value: boolean | PromiseLike<boolean>) => void;
};

export type Action = State;
