export function listarEtapas() {
var etapas = [
    {
      titulo: "Levantemento de Informações",
      descricao: "Coletar dados sobre o local do projeto, incluindo topografia, condições do solo, restrições ambientais, regulamentações locais e requisitos do cliente.",
      dataHora: new Date(2024, 2, 10, 8, 0)
    },
    {
      titulo: "Análise de viabilidade",
      descricao: "Estudar a viabilidade técnica, econômica e ambiental para determinar se o projeto é praticável e justificável.",
      dataHora: new Date(2024, 2, 20, 10, 30)
    },
    {
      titulo: "Concepção e planejamento inicial",
      descricao: "Desenvolver conceitos de design preliminares que atendam aos requisitos do cliente e às restrições do local.",
      dataHora: new Date(2024, 2, 30, 13, 0)
    },
    {
      titulo: "Projeto conceitual",
      descricao: "Desenhar modelos conceituais mais detalhados para comunicar visualmente a aparência e a funcionalidade do projeto.",
      dataHora: new Date(2024, 3, 10, 15, 30)
    },
    {
      titulo: "Projeto detalhado",
      descricao: "Elaborar desenhos técnicos detalhados e especificações que descrevem todos os aspectos do projeto.",
      dataHora: new Date(2024, 3, 20, 18, 0)
    },
    {
      titulo: "Licenciamento e aprovações",
      descricao: "Obter licenças e aprovações necessárias.",
      dataHora: new Date(2024, 3, 30, 18, 0)
    },
    {
      titulo: "Aquisição de materiais e contratação de serviços",
      descricao: "Adquirir os materiais necessários para a construção e os contratos.",
      dataHora: new Date(2024, 4, 10, 18, 0)
    },
    {
      titulo: "Construção",
      descricao: "O projeto é realmente construído de acordo com os planos .",
      dataHora: new Date(2024, 4, 20, 18, 0)
    },
    {
      titulo: "Testes e comissionamento",
      descricao: "Realizar testes para garantir que todos os sistemas estejam funcionando corretamente.",
      dataHora: new Date(2024, 4, 30, 18, 0)
    },
  ];
  return etapas;
}