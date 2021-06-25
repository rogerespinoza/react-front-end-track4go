import styled from "styled-components";
import { FaTimes, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserCard = styled.div`
  display: flex;
  background: #505050;
  width: 40%;
  height: 200px;
  padding: 25px;
  margin: 15px 0;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;
  @media screen and (max-width: 1060px) {
    width: 55%;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`;

export const ContainerIcons = styled.div`
  display: flex;
  width: 10%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextError = styled.h3`
  display: ${({ error }) => (error ? "flex" : "none")};
  font-size: 16px;
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  margin: 5px 0;
`;

export const TextTitle = styled.h1`
  width: 30%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", areial, sans-serif;
  font-size: 16px;
`;

export const TextData = styled.p`
  display: flex;
  width: 70%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", areial, sans-serif;
  font-size: 16px;
`;

export const IconClose = styled(FaTimes)`
  color: #ff3b3f;
  font-size: 30px;
`;

export const IconEdit = styled(FaEdit)`
  font-size: 30px;
`;

export const Icon = styled(Link)`
  color: #fff;
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
