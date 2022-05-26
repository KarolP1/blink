import React from 'react';

export const initialStateUser: User = {
  allergiess: [],
  uid: null,
};

export interface User {
  allergiess: Allergy[] | null;
  uid: string | null;
}

export type Allergy = {
  id: number;
  u_id: number;
  allergy_name: string;
};
