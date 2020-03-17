import React from "react";
import { render, fireEvent, getByLabelText, act } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NewContactComponent from "components/NewContact";

describe("Given <NewContactComponent />", () => {
  let defaultProps;
  let component;
  let Component;

  defaultProps = {
    addContact: () => {},
    routePush: () => {}
  };

  beforeAll(() => {
    Component = props => (
      <MemoryRouter>
        <NewContactComponent {...defaultProps} {...props} />
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
