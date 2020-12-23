export const resgataItens = key => {
    const value = localStorage.getItem(key); 
    
    const parsedJSON = JSON.parse(value);
    
    return parsedJSON && Array.isArray(parsedJSON) ? parsedJSON : [];
}
  
export const salvaItens = (key, data) => localStorage.setItem(key, JSON.stringify(data)); 