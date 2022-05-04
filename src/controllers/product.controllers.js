const queries = require("../models/product.model");
const pool = require("../config/database");



const createProduct=(req,res)=>{ 
	const {productname,quantity,price}=req.body; 
	pool.query(queries.addproduct,[productname,quantity,price],(error,results)=>{ 
		if(!error){ 
			console.log("Product Id :"+JSON.stringify(results.rows));
			 res.status(201).json({message:"Product information created successfully!"});
	 } 
			  else{ console.log(error); res.status(404).json(error)
	}
 });
 };


 const getProduct = (request, response) => {
	pool.query(queries.displayproducts, (error, results) => {
	  if (error) {
		console.log(error); 
	  }
	  response.status(200).json(results.rows)
	})
  }

  const getProductById = (request, response) => {
	const id = parseInt(request.params.id)
  
	pool.query(queries.productbyid, [id], (error, results) => {
	  if (error) {
		throw error
	  }
	  response.status(200).json(results.rows)
	})
  }


  const updateProductById = (request, response) => {
	const id = parseInt(request.params.id)
	const { productname,quantity,price } = request.body
  
	pool.query(queries.updateproducts,[productname,quantity,price,id],(error, results) => {
		if (error) {
		  throw error
		}
		response.status(200).send(`product modified with ID: ${id}`)
	  }
	)
  }

  const deleteProductById = (request, response) => {
	const id = parseInt(request.params.id)
  
	pool.query(queries.deleteproducts, [id], (error, results) => {
	  if (error) {
		throw error
	  }
	  response.status(200).send(`User deleted with ID: ${id}`)
	})
  }

module.exports = { createProduct, getProduct, getProductById, updateProductById, deleteProductById };
