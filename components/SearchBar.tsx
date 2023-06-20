"use client"

import { useState } from "react"
import SearchManufacture from "./SearchManufacture"

const SearchBar = () => {
    const [selected, setSelected] = useState("")
const handleSearch =()=>{

}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item" >
            <SearchManufacture selected={selected} setSelected={setSelected} />
        </div>
    </form>
  )
}

export default SearchBar