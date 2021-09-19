import React, {useState, useEffect} from 'react'
import Search from '../Components/Search';
import SpaceCards from '../Components/SpaceCards';

function NasaList() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=';
  const key = process.env.REACT_APP_API_KEY;
  const dateRange = '&start_date=2021-01-01&end_date=2021-02-10';
  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch(url + key + dateRange)
    .then((r) => r.json())
    .then((data) => setApiData(data))
  },[])

  const searchHandler = e => {
    setSearchValue(e.target.value)
  }

  const filteredData = () => {
    return apiData.filter(apiResult => (apiResult.title.toLowerCase().includes(searchValue.toLowerCase())))
  }

  const spaceCards = filteredData().map((api, idx) => (
    <SpaceCards
      key={idx}
      cardObj={api}
    />
  ))

  return (
    <>
      <Search searchHandler={searchHandler} searchValue={searchValue}/>
      <section className="cardContainer">
        {spaceCards}
      </section>
    </>
  )
}

export default NasaList
