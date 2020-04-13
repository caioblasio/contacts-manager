import React from "react";
import { render, queryByText, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ContactListComponent from "components/ContactList";
import { data } from "__mocks__/api";

describe("Given <ContactListComponent />", () => {
  let defaultProps;
  let component;
  let Component;

  defaultProps = {
    data,
  };

  beforeAll(() => {
    Component = (props) => (
      <MemoryRouter>
        <ContactListComponent {...defaultProps} {...props} />
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

    it("Then should render 10 contact cards", () => {
      expect(component.querySelectorAll(".MuiCard-root")).toHaveLength(
        data.length
      );
    });
  });

  describe("When it initializes with shortView", () => {
    beforeEach(() => {
      const { container } = render(<Component shortView />);
      component = container;
    });

    it("Then should match the snapshot", () => {
      expect(component).toMatchSnapshot();
    });

    it("Then should not contain email or phone", () => {
      expect(queryByText(component, data[0].email)).toBeNull();
      expect(queryByText(component, data[0].phone)).toBeNull();
    });
  });

  describe("When click on delete contact icon", () => {
    let deleteContact = jest.fn();
    beforeEach(() => {
      const { container } = render(<Component deleteContact={deleteContact} />);
      component = container;
    });

    it("Should call deleteContact", () => {
      fireEvent.click(component.querySelector("button"));
      expect(deleteContact).toHaveBeenCalledWith(1);
    });
  });
});
