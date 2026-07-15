import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      white: string;

      background: string;
      surface: string;
      surfaceLight: string;

      text: string;
      textSecondary: string;

      border: string;
      error:string;

    success: string;
      warning : string;
      danger: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    }; 

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}