import React, { useState, useEffect } from "react";

// ====={ GET // Fetch the Data (returns the raw data) }=====
export function GetData() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return products
}

// ====={ DELETE // Removes given entry from data, returns nothing }=====
export function DeleteData(id) {
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'DELETE'
        }) 
    }, [])
}

// All of the following return nothing presently, but can be configured
// to return the given entry it affected 

// ====={ POST // Add a new entry to Data }=====
export function PostData(obj) {
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products', {
            method: 'POST', 
            headers: { // seems to be required to work
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj) // the given object is inserted and stringified here
        })
            // body: obj 
    }, [])
}

// ====={ PUT // Edit data of a given entry }=====
export function PutData(id, obj) { // <= takes an obj, will replace any properties shared between the 2 <<DOESN'T HAVE TO BE ALL PROPS>>
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'PUT', 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(obj)
        })
    }, [])
}

// ====={ Dummy Object I used to test POST // NEED THESE FIELDS!! }=====
export let testObj = {
    'title': "lorem ipsum",
    'price': 39,
    'description': "whatever",
    'categoryId': 1,
    'images': ['https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630']
  }
// ^^^ I'm fairly sure the keys don't have to be strings, since thats what stringify does, but this is how it was working for me just in case.