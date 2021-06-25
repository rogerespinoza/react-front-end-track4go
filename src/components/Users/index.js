import React, { useEffect, useState } from "react";
import { HeaderForm, ListUsers, UsersContainer } from "./elements";

import CardUser from "../CardUser";

function Users() {
  const [DataAux, setDataAux] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("/api/getusers");
      const result = await response.json();
      setDataAux(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListUsers>
      <HeaderForm>Lista de Usuarios</HeaderForm>
      <UsersContainer>
        {DataAux.map((data, i) => (
          <CardUser
            name={data.nombre_usuario}
            id={data._id}
            email={data.mail_usuario}
            phone={data.telefono_usuario}
            ci={data.cedula_usuario}
            key={i}
          />
        ))}
      </UsersContainer>
    </ListUsers>
  );
}
export default Users;
