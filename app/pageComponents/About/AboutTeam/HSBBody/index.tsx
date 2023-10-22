

import styles from "./style.module.css";
import { Team_data_list } from "@/app/data/Team";
import EmployeeCard from "../Employee";
const HSBBody = () => {
  return (
    <div className={`${styles.container}`}>
      
      {Team_data_list.map((Employee)=>{
      return(<EmployeeCard firstName={Employee.firstName} lastName={Employee.lastName} imgUrl={Employee.imgUrl} position={Employee.position}/>)
      })}
    </div>
  );
};
export default HSBBody;
