// theme.ts
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray: string;
      green: string;
      red: string;
      white: string;
      black: string;
    };
    text: {
      title: {
        fontSize: string;
        lineHeight: string;
      };
      content: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}

const theme: Theme = {
  colors: { 
    gray: '#8E8E8E',
    green: '#A0E9BC',
    red: '#F59D9D',
    white: '#FFFFFF',
    black: '#2E2E2E',
  },
  text: { 
    title: {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
    },
    content: {
      fontSize: '0.8rem',
      lineHeight: '0.8rem',
    },
  },
};

export default theme;
