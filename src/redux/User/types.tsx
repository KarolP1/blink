import React from 'react';

export const initialStateUser: User = {
  allergiess: [],
  recipes: [],
  uid: null,
  error: null,
  isLoading: false,
  userSubscription: null,
};

export interface User {
  allergiess: Allergy[] | null;
  uid: number | null;
  recipes: any;
  error: any;
  isLoading: boolean;
  userSubscription: string | null;
}

export type Recopie = {};

export type Allergy = {
  id: number;
  u_id: number;
  allergy_name: string;
};
