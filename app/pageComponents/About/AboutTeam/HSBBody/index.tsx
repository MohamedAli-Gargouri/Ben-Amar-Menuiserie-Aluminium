

import styles from "./style.module.css";
import { Team_data_list } from "@/app/data/Team";
import EmployeeCard from "../Employee";
const HSBBody = () => {
  return (
    <div className={` grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center ${styles.container}`}>
      
      {Team_data_list.map((Employee)=>{
      return(<div className=" col-span-1"><EmployeeCard firstName={Employee.firstName} lastName={Employee.lastName} imgUrl={Employee.imgUrl} position={Employee.position}/></div>)
      })}
    </div>
  );
};
export default HSBBody;
