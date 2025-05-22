const fs = require("fs/promises");
const path = require("path");
const XLSX = require("xlsx");

async function listarArquivosEDividirColunas() {
  const pasta = path.join(
    "c:/",
    "Users",
    "Delarue",
    "Desktop",
    "AcompanhametoSp"
  );

  // Array de cabeçalho personalizável
  const headers = [
    "Veículo",
    "Motorista",
    "Observação",
    "Data",
    "Hora",
    "Código",
    "Tipo de Arquivo",
  ];

  try {
    const files = await fs.readdir(pasta);

    // Filtrar arquivos por extensão
    const arquivoFiltrado = files.filter(
      (file) => file.endsWith(".mp4") || file.endsWith(".avi")
    );

    // Criar um array com apenas as partes divididas do nome do arquivo
    let result = arquivoFiltrado.map((file) => file.split("_"));

    // Adicionar o cabeçalho como primeira linha
    result.unshift(headers);

    // Criar e salvar a planilha Excel
    const ws = XLSX.utils.aoa_to_sheet(result); // Usa `aoa_to_sheet` para um array de arrays
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Arquivos");
    XLSX.writeFile(wb, path.join(pasta, "arquivos.xlsx"));

    console.log("Planilha gerada com sucesso!");
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
  }
}

// Executar a função
listarArquivosEDividirColunas();
