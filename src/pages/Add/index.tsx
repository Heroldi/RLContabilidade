import React from "react";
import Input from "../../components/Input";
import { AddContainer } from "./style";

export default  function Add() {
    return(
        <>
        <AddContainer>
            {/* <select  id="type">
                <option value="0">Lucro</option>
                <option value="1">Gasto</option>
            </select> */}
            <label >Data</label>
            <Input></Input>
            <label >Valor</label>
            <Input></Input>
            <label >Descrição</label>
            <Input></Input>
        </AddContainer>
        </>
    );
}
