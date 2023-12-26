import {DataTable} from "../DataTable.jsx";
import {AdminParentColumns} from "./AdminParentColumns.jsx";
import {useEffect, useState} from "react";
import ParentApi from "../../../services/Api/ParentApi.js";

export default function AdminParentList() {
  const [data, setData] = useState([])
  useEffect(() => {
    ParentApi.all().then(({data}) => setData(data.data))
  }, []);
  return <>
    <DataTable columns={AdminParentColumns} data={data}/>
  </>
}
