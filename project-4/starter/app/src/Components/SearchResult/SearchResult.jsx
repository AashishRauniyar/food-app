import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({data: foods}) => {
  return (
    <FoodCardContainer>

      <Container>
      <FoodCards>
        {foods?.map(({name, image, price, text}) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL +  image} alt={name} />
            </div>
            <div className="food_details">
              <h3>{name}</h3>
              <p>{text}</p>
                <Button>
                ${price.toFixed(2)}
                </Button>
            </div>
            
          </FoodCard>
        ))}
      </FoodCards>
      </Container>
    </FoodCardContainer>
  )
}

export default SearchResult


const FoodCardContainer = styled.section`
min-height: calc(100vh - 210px);
background-image: url("/bg.png");
background-size: cover;
`;
const FoodCards = styled.section`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 16px;

`;

const FoodCard = styled.section`
width: 340px;
height: 167px;


border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) ;







border-radius: 20px;
border: 0.659px solid #fafafa;
background: url(<path-to-image>) lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
padding: 8px;
display: flex;
.food_details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    h3{

    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    }
    p{
    font-size: 12px;
    margin-top: 4px;
    }
    
    }

`;