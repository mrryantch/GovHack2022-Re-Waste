import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
`;

const ImageText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 12px;
`;

interface FoodImageInterface {
  text: string;
  src: string;
}
const FoodImage = ({ text, src }: FoodImageInterface) => {
  return (
    <ImageContainer>
      <img
        src={src}
        alt="landingImg"
        height="62px"
        width="62px"
        style={{ objectFit: "cover" }}
      />
      <ImageText>{text}</ImageText>
    </ImageContainer>
  );
};

export default FoodImage;
