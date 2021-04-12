import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {

    it("renders correctly", () => {
        const img = {
            title: "The Statue of Liberty's torch heads to new museum",
            image: {
                _url: 'https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg',
            },
        }
        const { container } = render(<ArticleImage url={img.image._url} title={img.title} />);
        expect(container).toMatchSnapshot();
    });
});