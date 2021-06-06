import React from "react"
import { useEffect, useState  } from 'react'
import axios from "axios";

function RowData(){
    const [merchantsdata, setmerchantsdata] = useState([])
    useEffect(() => {
        async function loadData() {
          const result = await axios("https://intense-tor-76305.herokuapp.com/merchants");
          setmerchantsdata(result.data);
          console.log(merchantsdata)
         
        }
        loadData();
      }, []);
     var displydata = merchantsdata.map((item)=>{
         return(
             <div>
             {item.firstname}
             </div>
         )
     })
    return(
        <div>
         { displydata}
        </div>
    )
}
export default  RowData