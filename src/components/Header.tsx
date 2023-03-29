import React from "react";

interface Props {
  title: string;
  subTitle: string;
}

function Header({ title, subTitle }: Props) {
  return (
    <h1 className="title">
      {title} <span>{subTitle}</span>
    </h1>
  );
}

export default Header;
