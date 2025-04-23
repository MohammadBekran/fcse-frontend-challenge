import { PropsWithChildren } from "react";

export type TPropsWithChildren = PropsWithChildren;

export type TGraphqlErrorExtension = {
  exception: {
    data?: {
      message?: {
        messages: {
          message: string;
        }[];
      }[];
    };
  };
};
