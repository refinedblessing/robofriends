import * as React from "react";

type Props = {
  children?: JSX.Element
}

const Scroll = ({ children }: Props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '600px'}}>
      {children}
    </div>
  )
}

export default Scroll;
