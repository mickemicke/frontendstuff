import { ReactNode } from 'react';

export const Layout = (props: { children: ReactNode }) => 
    <div style={{ height: "200px", width: "200px", backgroundColor: "hotpink" }} aria-label="button">{props.children}</div>
