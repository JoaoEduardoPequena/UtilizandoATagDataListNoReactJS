import React,{useState,useEffect} from "react";
import {useFethProvincia} from "./Provincia/hooks/useFethProvincia";

export const TagDataList=()=>{

  let [provincia,setProvincia]= useState(""); // Estado/Variavel para Provincia

  let  [listProvincias] = useFethProvincia(); // Listar Todas Provincia que esta a vir do meu RepositÛrio de dados

  const handleInputChangeProvincia=(event)=>{
     setProvincia(event.target.value); // Guardar o nome da provincia seleccionado
  }

return(

<div className="card">

<div className="card-header text-center">Tag Data List Do Html 5</div>

<div className="card-body">

<form >

<div className="container-fluid">

<div className="row">
  <div className="col-md-4 col-xs-12">
      <label htmFor="Provincia">Lista de Prov√≠ncias</label>
      <input list="listaProvincias" name="provincia" id="Provincia" className="form-control" value={ provincia || "" } onChange={event=>handleInputChangeProvincia(event)} />
      <datalist   id="listaProvincias">
      {
        listProvincias.map( (item)=>
              <option  key={item.id_provincia} value={item.provincia}>{item.provincia}</option>
           )
       }
     </datalist>

  </div>
</div>

</div>

</form>


</div>


</div>


)

}