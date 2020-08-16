import { render } from "@testing-library/react";

export const checkBasicRendering = (component) => {
  it("Expect to render", () => {
    const { container } = render(component);
    expect(container.firstChild).toBeDefined();
  });
};

export const checkRequiredProps = (component) => {
  it("Expect to have all required propTypes", () => {
    const spy = jest.spyOn(global.console, "error");
    render(component);
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();
  });
};
