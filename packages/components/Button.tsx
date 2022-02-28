import { ReactNode } from 'react';

export const Button = (props: { children: ReactNode }) => <button style={{ color: "red" }} aria-label="button">{props.children}</button>
