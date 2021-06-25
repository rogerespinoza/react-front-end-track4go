import React from "react";
import {
  UserCard,
  TextData,
  TextTitle,
  ContainerRow,
  ContainerData,
  ContainerIcons,
  IconClose,
  IconEdit,
  Icon,
} from "./elements";
import { useHistory } from "react-router-dom";

function CardUser({ id, name, phone, ci, email }) {
  const history = useHistory();

  const deleteUser = async () => {
    const request = {
      method: "DELETE",
    };

    try {
      const req = await fetch(`/api/delete/${id}`, request);
      const response = await req.json();
      console.log(response);
      history.push("/");
      history.push("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserCard>
      <ContainerData>
        <ContainerRow>
          <TextTitle>Id usuario</TextTitle>
          <TextData>{id}</TextData>
        </ContainerRow>
        <ContainerRow>
          <TextTitle>Nombre</TextTitle>
          <TextData>{name}</TextData>
        </ContainerRow>
        <ContainerRow>
          <TextTitle>Mail</TextTitle>
          <TextData>{email}</TextData>
        </ContainerRow>
        <ContainerRow>
          <TextTitle>Telefono</TextTitle>
          <TextData>{phone}</TextData>
        </ContainerRow>
        <ContainerRow>
          <TextTitle>Cedula</TextTitle>
          <TextData>{ci}</TextData>
        </ContainerRow>
      </ContainerData>
      <ContainerIcons>
        <IconClose onClick={deleteUser} />
        <Icon to={{ pathname: "/", state: { id, name, email, phone, ci } }}>
          <IconEdit />
        </Icon>
      </ContainerIcons>
    </UserCard>
  );
}
export default CardUser;
