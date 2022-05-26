import React from 'react';

export const initialStateUser: User = {
  allergiess: [],
};

export interface User {
  allergiess: string[] | null;
}
