import Airtable from "airtable";

// Configuração do Airtable
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID);

// Nome das tabelas
const REACT_APP_AIRTABLE_TABLE_CLIENTS = "Clients"; // Tabela de Clientes
const REACT_APP_AIRTABLE_TABLE_PRODUCTS = "Products"; // Tabela de Produtos
const REACT_APP_AIRTABLE_TABLE_CONTACT = "Contact"; // Tabela de Contato

// Função para buscar os dados do cliente pelo nome
export const fetchClientByLogin = async (clientLogin) => {
  console.log("Fetching client by clientLogin:", clientLogin);
  try {
    const records = await base(REACT_APP_AIRTABLE_TABLE_CLIENTS)
      .select({
        filterByFormula: `{Login} = '${clientLogin}'`,
      })
      .all();

    if (records.length === 0) {
      throw new Error("Client not found");
    }

    // console.log("Client found:", records);
    // Retorna o primeiro cliente encontrado
    return {
      id: records[0].id,
      name: records[0].fields.Name,
      login: records[0].fields.Login,
      products: records[0].fields.Products, // IDs dos produtos relacionados
    };
  } catch (error) {
    console.error("Error fetching client by name:", error);
    throw error;
  }
};

// Função para buscar produtos associados a um cliente
export const fetchProductsByClient = async (productIds) => {
  try {
    if (!productIds || productIds.length === 0) {
      throw new Error("No products found for this client.");
    }

    const records = await base(REACT_APP_AIRTABLE_TABLE_PRODUCTS)
      .select({
        filterByFormula: `OR(${productIds
          .map((id) => `RECORD_ID() = '${id}'`)
          .join(",")})`, // Filtra os produtos pelos IDs
      })
      .all();

    const products = records.map((record) => ({
      id: record.id,
      productName: record.fields["Product Name"] || "No product name", // Verifique o nome da coluna
      howToUse: record.fields["How to Use"] || "No instructions available",
      whereToBuy: record.fields["Where to Buy"] || "No link available",
      morningRoutine: Array.isArray(record.fields["Morning Routine"])
        ? record.fields["Morning Routine"]
        : [], // Verifica se é um array
      nightRoutine: Array.isArray(record.fields["Night Routine"])
        ? record.fields["Night Routine"]
        : [], // Verifica se é um array
    }));
    console.log("records", records);
    console.log("Products found:", products); // Log para verificar os dados retornados

    return products;
  } catch (error) {
    console.error("Error fetching products by client:", error);
    throw error;
  }
};

// Função para buscar dados completos (cliente e produtos)
export const fetchClientAndProducts = async (clientLogin) => {
  try {
    // Busca o cliente pelo nome
    const client = await fetchClientByLogin(clientLogin);
    // console.log("Client airtable service:", client);
    // Busca os produtos associados ao cliente
    const products = await fetchProductsByClient(client.products);
    //buscar todos os dados da tabela de produtos

    return { client, products };
  } catch (error) {
    console.error("Error fetching client and products:", error);
    throw error;
  }
};

export const addRecordToAirtable = async (record) => {
  console.log("Data being sent to Airtable:", record);

  try {
    const createdRecord = await base(REACT_APP_AIRTABLE_TABLE_PRODUCTS).create([
      {
        fields: record,
      },
    ]);
    console.log("Record added successfully:", createdRecord);
    return createdRecord;
  } catch (error) {
    console.error("Error adding record to Airtable:", error);
    throw error;
  }
};

export const sendContactFormToAirtable = async (record) => {
  console.log("Data being sent to Airtable:", record);
  console.log("Table name:", process.env.REACT_APP_AIRTABLE_TABLE_CONTACT);

  try {
    const createdRecord = await base(
      process.env.REACT_APP_AIRTABLE_TABLE_CONTACT
    ).create([
      {
        fields: {
          Name: record.name,
          Email: record.email,
          Phone: record.phone,
          Message: record.message,
        },
      },
    ]);
    console.log("Record added successfully:", createdRecord);
    return createdRecord;
  } catch (error) {
    console.error("Error adding record to Airtable:", error);
    throw error;
  }
};
