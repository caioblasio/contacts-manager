import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Topbar from "components/Topbar";

describe("Given <Topbar />", () => {
  let component;
  let Component;

  beforeAll(() => {
    Component = props => (
      <MemoryRouter>
        <Topbar {...props} />
      </MemoryRouter>
    );
  });

  describe("When it initializes", () => {
    beforeEach(() => {
      const { container } = render(<Component />);
      component = container;
    });

    it("Then should match the snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
