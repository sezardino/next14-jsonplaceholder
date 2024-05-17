import { FC, PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="p-4 container mx-auto">{children}</main>;
};

export default UsersLayout;
