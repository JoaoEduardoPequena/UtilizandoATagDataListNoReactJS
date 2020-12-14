
import React,{ useState,useEffect } from "react";
import DataProvincias from "./DataProvincias"


export const useFethProvincia = ( ) => {

    const [datas, setData] = useState([]);


 function fetchUrl() {

      setData(DataProvincias);

    }

    useEffect(() => {
      
      fetchUrl();
     
     return () => {
        // put unmount code here
     }

    }, [ ]);



    return [datas];
}
