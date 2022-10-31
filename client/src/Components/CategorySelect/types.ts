import React from "react";
import { ActionType, StateInterface } from "../../globalTypes";

export interface CategorySelectProps{
  content: string[];
  dispatch: React.Dispatch<ActionType>;
  to?: string;
  //onchange: Function;
  placeholder?: string;
}