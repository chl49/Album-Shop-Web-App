import React from "react";

export interface ChangeQuantityInterface{
  id: number;
  quantity: number
}

export interface RoutesInterface{
  current: string;
  history: string;
}

export interface ItemInterface{
  id: number;
  tracks: number;
  category: string;
  label: string;
  description: string;
  image: string;
  price: number;
  title: string;
  embed: string;
  quantity?: number;
  added?: boolean
}

export interface StateInterface{
  items: Array<ItemInterface>,
  filteredItems: Array<ItemInterface>,
  shoppingCart: Array<ItemInterface>,
  searching: string,
  categories: Array<string>,
  labels: Array<string>,
  current: string,
  history: string,
  isSearching: boolean,
  filterAt: string,
  categoryFilter: string,
  labelFilter: string,
  totalAmount: number,
  error: boolean,
  loading: boolean
}

export type ActionType = {
  type: string,
  payload?: 
    | ItemInterface[] 
    | string 
    | number 
    | ChangeQuantityInterface
    | RoutesInterface
}

export interface PageProps {
  state: StateInterface;
  dispatch?: React.Dispatch<ActionType>;
  ctx?: React.Context<StateInterface>
}