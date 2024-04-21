import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeActions from "./components/EmployeeActions";
import EmployeeDeleteDialog from "./components/EmployeeDeleteDailog";

const EmployeeDetailList = () => {
  return (
    <div className="mt-16">
      <EmployeeActions />
      <EmployeeForm />
      <EmployeeDeleteDialog />
      <EmployeeTable />
    </div>
  );
};

export default EmployeeDetailList;
