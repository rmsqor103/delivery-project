import styled, { css } from "styled-components";
import StarRatings from "react-star-ratings";
import { MOBILE_LAYOUT, PC_LAYOUT } from "../../data/layout";

const CardWapper = styled.div`
  width: 18rem;
  height: 21rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid white;
  margin: 10px;
  &::before {
    content: "${(props) => props.rank}";
    position: absolute;
    font-size: 25px;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 1600px) {
    width: 14rem;
    height: 16rem;
  }
  @media screen and (max-width: ${PC_LAYOUT}px) {
    width: 18rem;
    height: 21rem;
  }
  @media screen and (max-width: ${MOBILE_LAYOUT}px) {
    width: 14rem;
    height: 16rem;
  }
`;

const ImgArea = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 3.7rem;
  background-color: white;
  margin: 10px;
  cursor: pointer;
  ${(props) =>
    props.bg &&
    css`
      background: url(${props.bg}) no-repeat;
      background-size: cover;
      background-position: center;
    `}
  @media screen and (max-width: 1600px) {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin: 5px;
  }
`;
const TextArea = styled.div`
  width: 100%;
  font-size: 22px;
  text-align: center;
  @media screen and (max-width: 1600px) {
    font-size: 18px;
  }
`;

const StarArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OrderLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

function ResultCard({
  rank,
  name,
  categories,
  address,
  logoUrl,
  reviewAvg,
  sid,
}) {
  const url = logoUrl ? `https://www.yogiyo.co.kr/${logoUrl}` : "";
  const linkHandle = (link) => {
    window.open(link);
  };
  return (
    <CardWapper rank={rank}>
      <ImgArea
        bg={url}
        onClick={() => linkHandle(`https://www.yogiyo.co.kr/mobile/#/${sid}/`)}
      />
      <StarArea>
        <StarRatings
          rating={parseFloat(reviewAvg)}
          starDimension="30px"
          starSpacing="0"
          starRatedColor="#ffe066"
          starEmptyColor="white"
        />
      </StarArea>
      <TextArea>
        <p>{name}</p>
        <p>{categories.split(" ").join(",")}</p>
        <p>{address}</p>
        <OrderLink
          href={`https://www.yogiyo.co.kr/mobile/#/${sid}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          주문하러가기
        </OrderLink>
      </TextArea>
    </CardWapper>
  );
}

export default ResultCard;
