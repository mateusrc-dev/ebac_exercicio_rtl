import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe("testes para o componente principal", () => {
  test("deve renderizar o componente Post corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("deve ser possível adicionar dois comentários no componente", () => {
    const { debug } = render(<Post />);

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "sou lindo",
      },
    });

    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));

    // expect(screen.getByText("sou lindo")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "sou fofo",
      },
    });

    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "sou foda",
      },
    });

    fireEvent.click(screen.getByTestId("btn-adicionar-comentario"));

    debug();

    expect(
      screen.getByTestId("comentarios").getElementsByTagName("li")
    ).toHaveLength(3);
  });
});
