export function listarEtapas() {
var etapas = [
    {
      titulo: "Análise do local",
      descricao: "conhecer dados e aspectos do terreno e seus arredores.",
      dataHora: new Date(2024, 2, 18, 8, 0)
    },
    {
      titulo: "Elaboração dos desenhos",
      descricao: "Desenhar a execução da edificação",
      dataHora: new Date(2024, 2, 18, 10, 30)
    },
    {
      titulo: "Revisão",
      descricao: "Retirada de dúvidas e correção de erros.",
      dataHora: new Date(2024, 2, 18, 13, 0)
    },
    {
      titulo: "Orçamento",
      descricao: "Levantamento de gastos.",
      dataHora: new Date(2024, 2, 18, 15, 30)
    },
    {
      titulo: "Execução",
      descricao: "Momento em que o projeto sai do papel.",
      dataHora: new Date(2024, 2, 18, 18, 0)
    }
  ];
  return etapas;
}