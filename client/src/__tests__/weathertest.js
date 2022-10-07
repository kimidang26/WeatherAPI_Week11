import { render, screen, cleanup } from "@testing-library/react";
import Display from "../components/weatherdisplay.js";
import Search from "../components/searchbar.js";
import Recent_Search from "../components/recentsearch.js";

afterEach(() => {
    cleanup();
});


describe ("Display", ()=> {
    test("Gets Display", ()=> {
        render(<Display />)
    });
});

describe ("Search Bar", ()=> {
    test("Gets Search Bar", ()=> {
        render(<Search />)
    });
});

describe("Render Recent Search", () =>{
    render(<Recent_Search />);
    expect(screen.getByText(/Recent Searches/));
});