import { Dispatch, SetStateAction } from "react";

export interface MessagePostContext {
  message: string,
  onPostChange: Dispatch<SetStateAction<string>>
}