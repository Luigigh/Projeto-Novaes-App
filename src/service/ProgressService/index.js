export async function addStage(){
    if (indiceEtapaEditando !== null) {
        // Atualiza a etapa existente
        const etapasAtualizadas = [...etapas];
        etapasAtualizadas[indiceEtapaEditando] = { titulo, descricao, dataHora };
        setEtapas(etapasAtualizadas);
      } else {
        // Adiciona a nova etapa ao estado
        setEtapas([...etapas, { titulo, descricao, dataHora }]);
      }
      // Limpa os estados
      setIndiceEtapaEditando(null);
      setEtapaSelecionada(null);
      setModalVisible(false);
}