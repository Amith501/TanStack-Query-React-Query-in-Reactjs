from fastapi import FastAPI,Request
from mockData import products
from dto import ProductDto
app= FastAPI()

@app.get("/")
def Home():
     return "first program"

#dynamic params or path params
@app.get("/product/{product_id}")
def get_singleproduct (product_id:int):
    for sigleProduct in products:
         if sigleProduct.get("id") == product_id:
            return sigleProduct
    return{
        "error":"Product not found for this ID"
    }

#query params

# @app.get("/greet")
# def greet_user (name:str):
#     return {
# "greet":f"Hello {name}, How are you "
#     }


@app.get("/greet")
def greet_user (request:Request):
    query_params= dict(request._query_params)
    # print(request._query_params)
    return {
"greet":f"Hello {query_params.get("name")}, and your age is {query_params.get("age")} "
    }



    #post method 
@app.post("/create_product")
def Create_product(product_data:ProductDto):
      product_data= product_data.model_dump() #this converts as dictionary
      products.append(product_data)
      return {"Status":"sucessfully Procuct created","data":products}



#put method
@app.put("/update_product/{product_id}")
def update_product(product_data:ProductDto,product_id:int):
     for index, Oneproduct in enumerate(products):
          if Oneproduct.get("id")== product_id:
               products[index]= product_data.model_dump()
               return{"status": "product updated sucessfully","data":products[index]}    
          
     return{
        "error":"Product not found for this ID"
    }