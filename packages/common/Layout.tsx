import { ReactNode } from 'react';

export const Layout = (props: { children: ReactNode }) => 
    <div style={{ height: "50px", width: "50px", backgroundColor: "hotpink" }} aria-label="button">{props.children}</div>
