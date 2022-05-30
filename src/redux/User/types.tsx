import React from 'react';

export const initialStateUser: User = {
  allergiess: [],
  uid: null,
  error: null,
  isLoading: false,
};

export interface User {
  allergiess: Allergy[] | null;
  uid: number | null;
  error: any;
  isLoading: boolean;
}

export type Allergy = {
  id: number;
  u_id: number;
  allergy_name: string;
};
