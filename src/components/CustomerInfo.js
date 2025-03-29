import Airtable from "airtable";

// Configuração do Airtable
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY, // Chave de API do Airtable
});
const base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID); // ID da base

// Nome da tabela de Produtos
const REACT_APP_AIRTABLE_TABLE_PRODUCTS =
  process.env.REACT_APP_AIRTABLE_TABLE_PRODUCTS;

// Função para adicionar um produto ao Airtable
export const addProductToAirtable = async (productData) => {
  console.log("Product being sent to Airtable:", productData);

  try {
    const createdProduct = await base(REACT_APP_AIRTABLE_TABLE_PRODUCTS).create(
      [
        {
          fields: productData,
        },
      ]
    );
    console.log("Product added successfully:", createdProduct);
    return createdProduct; // Retorna o produto criado
  } catch (error) {
    console.error("Error adding product to Airtable:", error);
    throw error;
  }
};

// Função para buscar todos os produtos de um cliente
export const fetchProductsByClient = async (clientName) => {
  try {
    const records = await base(REACT_APP_AIRTABLE_TABLE_PRODUCTS)
      .select({
        filterByFormula: `{Client} = '${clientName}'`, // Filtra os produtos pelo cliente
      })
      .all();

    return records.map((record) => ({
      id: record.id,
      productName: record.fields["Product Name"],
      howToUse: record.fields["How to Use"],
      whereToBuy: record.fields["Where to Buy"],
      morningRoutine: record.fields["Morning Routine"],
      nightRoutine: record.fields["Night Routine"],
    }));
  } catch (error) {
    console.error("Error fetching products by client:", error);
    throw error;
  }
};

// Função para atualizar um produto no Airtable
export const updateProductInAirtable = async (productId, updatedData) => {
  console.log("Updating product in Airtable:", updatedData);

  try {
    const updatedProduct = await base(REACT_APP_AIRTABLE_TABLE_PRODUCTS).update(
      [
        {
          id: productId,
          fields: updatedData,
        },
      ]
    );
    console.log("Product updated successfully:", updatedProduct);
    return updatedProduct; // Retorna o produto atualizado
  } catch (error) {
    console.error("Error updating product in Airtable:", error);
    throw error;
  }
};

// Função para deletar um produto no Airtable
export const deleteProductFromAirtable = async (productId) => {
  console.log("Deleting product from Airtable:", productId);

  try {
    const deletedProduct = await base(
      REACT_APP_AIRTABLE_TABLE_PRODUCTS
    ).destroy([productId]);
    console.log("Product deleted successfully:", deletedProduct);
    return deletedProduct; // Retorna o produto deletado
  } catch (error) {
    console.error("Error deleting product from Airtable:", error);
    throw error;
  }
};
