const fTimeSete = async (id) => {
    try {
        const responseApi = await fetch(`https://narutodb.xyz/api/character/${id}`);
        const dataApiJson = await responseApi.json();
        return dataApiJson;
    } catch (erro) {
        console.error('Erro ao acessar a API:', erro);
        throw erro;
    }
};
  
export const fetchCharactersData = async (characterIds) => {
    const dataPromises = characterIds.map(item => fTimeSete(item));
    return Promise.all(dataPromises);
};