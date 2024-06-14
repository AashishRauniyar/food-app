import styled from "styled-components";
import { useState,useEffect } from "react";
import SearchResult from "./Components/SearchResult/SearchResult";


export const BASE_URL = "http://localhost:9000";

const App = () => {
  
  const [filteredData, setFilteredData] = useState(null);


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all"); 
  
  
  useEffect(() => {
      const fecthFoodData = async () => {
        setLoading(true);
    
        try {
          const response = await fetch(BASE_URL);
          const json =await response.json();
          
          setData(json);
          setFilteredData(json);

          setLoading(false);
    
        } catch (error) {
          setError("unable to fetch data");
        }
        };
      fecthFoodData();
    }, [])
    
  
    const searchFood = (e) => {
      const searchValue = e.target.value;
      
      if(searchValue === ""){
        setFilteredData(null);
        
      }

      const filer = data.filter((food) => {
        return food.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      setFilteredData(filer);

    }

    const filteredFood = (type) =>{
      if(type== "all"){
        setFilteredData(data);
        setSelectedButton("all");
        return;
      }

      const filter = data.filter((food) => {
        return food.type.toLowerCase().includes(type.toLowerCase());
      
      })
      setFilteredData(filter);
      setSelectedButton(type);


    };

    const filterBtns = [
      {
        name: "All",
        type: "all"
      },
      {
        name: "Breakfast",
        type: "breakfast"
      },
      {
        name: "Lunch",
        type: "lunch"
      },
      {
        name: "Dinner",
        type: "dinner"
      }
    ]

    if(error) return <div>{error}</div>;
    if(loading) return <div>loading...</div>;
    
  return <>
  <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input onChange={searchFood} type="text" placeholder="search food" />
      </div>
    </TopContainer>

    <FilterContainer>
      {
        filterBtns.map((btn) => (
          <Button
          
          isSelected={selectedButton === btn.type}

          key={btn.name}
          onClick={() => filteredFood(btn.type)}
          >{btn.name}</Button>
        ))
      }
     
    </FilterContainer>

    
  </Container>
    <SearchResult data={filteredData}/>
  </>
};

export default App;

export const Container = styled.div`
max-width: 1220px;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;

justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{
    padding: 8px;
    border-radius: 5px;
    border: 1px solid red;
    background-color: transparent;
    color: #fff;
    height: 40px;
    font-size: 16px;
  }

   @media (max-width: 600px) {
    
    flex-direction: column;
    height: 120px;
  }
`;



const FilterContainer = styled.section`

display: flex;
justify-content: center;
gap: 12px;
color: #fff;
padding-bottom: 40px;`;

export const Button = styled.section`
background-color: ${({ isSelected }) => (isSelected ? "#ff0000" : "#ff4343")};
border-radius: 5px;
padding: 6px 12px;
border:none;
display: inline-block;
cursor: pointer;
&:hover{
  background-color: #ff0000;
}

        font-size: 12px;
    
`;


