import React, { useState, useEffect } from "react";
import { Button, FormInput } from "../ComponentsElements";
import { useHistory, useLocation } from "react-router-dom";
import {
  FormContainer,
  FormCard,
  HeaderForm,
  FormContainerItem,
  FormContainerText,
  FormContainerItemButton,
  FormSection,
  TextError,
} from "./elements";

function DataInputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ci, setCi] = useState("");
  const [phone, setPhone] = useState("");

  const [enableError, setEnableError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [labelButton, setLabelButton] = useState("Registrar Usuario");
  const [title, setTitle] = useState("Crear Usuario");
  const [fun, setFun] = useState(1);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!!location.state) {
      setCi(location.state.ci);
      setName(location.state.name);
      setEmail(location.state.email);
      setPhone(location.state.phone);
      setLabelButton("Actualizar Datos");
      setTitle("Actualizar Usuario");
      setFun(2);
    }
  }, []);

  const validarUsuario = () => {
    setEnableError(false);
    if (
      name.length === 0 ||
      email.length === 0 ||
      ci.length === 0 ||
      phone.length === 0
    ) {
      setErrorMessage("Llena todos los campos");
      setEnableError(true);
    } else {
      if (name.match(/[0-9]/g) != null) {
        setErrorMessage("Ingrese un nombre valido");
        setEnableError(true);
      } else {
        if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
          setErrorMessage("Ingrese un email valido");
          setEnableError(true);
        } else {
          if (phone.match(/[0-9]/g) === null) {
            setErrorMessage("Ingrese un telefono valido");
            setEnableError(true);
          } else {
            if (ci.match(/[0-9]/g) === null || ci.length === 10) {
              setErrorMessage("Ingrese una cedula valida");
              setEnableError(true);
            } else {
              setEnableError(false);
              if (fun === 1) {
                registerNewUser();
              } else {
                updateUser();
              }
            }
          }
        }
      }
    }
  };

  const registerNewUser = async () => {
    try {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          ci: ci.trim(),
          phone: phone.trim(),
        }),
      };
      const req = await fetch(`/api/create`, request);
      const response = await req.json();
      console.log(response);
      if (response.code === 1) {
        history.push("/users");
      } else if (response.code === -1) {
        setErrorMessage("Este correo ya se encuentra enlazado a otro usuario");
        setEnableError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      const request = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, ci, phone }),
      };
      const req = await fetch(`/api/update/${location.state.id}`, request);
      const response = await req.json();
      if (response.code === 1) {
        history.push("/users");
      } else if (response.code === -1) {
        setErrorMessage("Este correo ya se encuentra enlazado a otro usuario");
        setEnableError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormSection>
      <FormContainer>
        <FormCard>
          <HeaderForm>{title}</HeaderForm>
          <FormContainerItem>
            <FormInput
              name="name"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormContainerItem>
          <FormContainerItem>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormContainerItem>
          <FormContainerItem>
            <FormInput
              name="phone"
              placeholder="Telefono"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </FormContainerItem>
          <FormContainerItem>
            <FormInput
              name="ci"
              placeholder="Cédula"
              onChange={(e) => setCi(e.target.value)}
              value={ci}
            />
          </FormContainerItem>
          <FormContainerText>
            <TextError error={enableError}>{errorMessage}</TextError>
          </FormContainerText>
          <FormContainerItemButton>
            <Button primary onClick={validarUsuario}>
              {labelButton}
            </Button>
          </FormContainerItemButton>
        </FormCard>
      </FormContainer>
    </FormSection>
  );
}
export default DataInputForm;
