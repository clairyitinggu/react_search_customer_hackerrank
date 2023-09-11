import React, { useState } from 'react'
import CustomerList from './CustomerList'
import List from '../List';
import customers from '../List';

function SearchCustomer() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState(customers)

  const handleInputChange = (e)=>{
    const value = e.target.value;
    setSearch(value);

    if(value){
      const filteredCustomers = customers.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().split(" ")[0].startsWith(search)
      )
    );
    setSuggestions(filteredCustomers)
    }else{
      setSuggestions([]);
    }
  
  }

  return (
    <>
    <div className='layout-row align-items-center justify-content-center mt-30'>
        <input className='large mx-20 w-20' data-testid='search-input' value={search} onChange={handleInputChange} placeholder='Enter search term (Eg: Phil)' />
    </div>
    <CustomerList customers={suggestions} />
    </>
  )
}

export default SearchCustomer
