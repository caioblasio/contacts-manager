import React from "react";
import { render, queryByText } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ContactDetailsComponent from "components/ContactDetails";
import { data } from "__mocks__/api";

describe("Given <ContactDetailsComponent />", () => {
  let defaultProps;
  let component;
  let Component;

  defaultProps = {
    contact: data[0]
  };

  beforeAll(() => {
    Component = props => (
      <MemoryRouter>
        <ContactDetailsComponent {...defaultProps} {...props} />
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

    it("Then should contain contact data", () => {
      expect(queryByText(component, data[0].name)).toBeInTheDocument();
      expect(queryByText(component, data[0].username)).toBeInTheDocument();
      expect(queryByText(component, data[0].email)).toBeInTheDocument();
      expect(queryByText(component, data[0].website)).toBeInTheDocument();
      expect(queryByText(component, data[0].phone)).toBeInTheDocument();
    });
  });
});
