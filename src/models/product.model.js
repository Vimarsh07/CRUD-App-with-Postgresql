const addproduct = "INSERT INTO products(productname,quantity,price) VALUES ($1,$2,$3)"; 
const displayproducts = "SELECT * FROM products ORDER BY productname ASC";
const productbyid = "SELECT * FROM products WHERE productid = $1";
const updateproducts = "UPDATE products SET productname = $1, quantity = $2, price = $3 WHERE productid = $4";
const deleteproducts = "DELETE FROM products WHERE productid = $1";

module.exports = { addproduct, displayproducts,productbyid, updateproducts, deleteproducts };


