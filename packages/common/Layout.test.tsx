import { Layout } from './Layout';
import { screen } from '@testing-library/react';
import { render, RenderOptions } from "@testing-library/react";


describe("it's a tgest", () => {
    test("testing layout", () => {
        render(<Layout><button>hej</button></Layout>);
        const element = screen.getByRole("button");

        expect(element).toBeInTheDocument();
    })
})