import styled from "styled-components";

export const FormSection = styled.div`
  padding: 40px 0 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efefef;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FormCard = styled.div`
  display: flex;
  background: #505050;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 60%;
  height: 475px;
  padding: 30px;
  text-decoration: none;
  border-radius: 4px;
  align-items: center;
  color: #fff;
  flex-direction: column;
`;

export const HeaderForm = styled.h3`
  margin: 15px 0;
  font-size: 24px;
`;

export const TextError = styled.h3`
  display: ${({ error }) => (error ? "flex" : "none")};
  font-size: 16px;
`;

export const FormContainerItem = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  margin: 10px 0;
`;
export const FormContainerText = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  padding: 0 20px;
  margin: 10px 0;
  color: #ff5733;
`;

export const FormContainerItemButton = styled.div`
  height: 40px;
  width: 100%;
  margin: 15px 0;
`;
