import * as React from 'react';

export interface CardPropsType {
  full?: boolean;
  style?: object;
  className?: string;
}

export interface CardHeaderPropsType {
  className?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
}

export interface CardBodyPropsType {
  className?: string;
  corner?: boolean;
}

export interface CardFooterPropsType {
  content?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  style?: object;
}
