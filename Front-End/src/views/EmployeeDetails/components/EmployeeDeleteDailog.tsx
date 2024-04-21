import { useAppDispatch, useAppSelector } from "src/store/store";
import {
  deleteEmployee,
  fetchEmployee,
  setOpenDeleteDailog,
} from "src/store/slices/employeeDetailSlice";
import useToastify from "src/utils/hooks/useToastify";
import ConfirmDailoag from "src/components/ConfirmDailoag";

const EmployeeDeleteDialog = () => {
  const dispatch = useAppDispatch();
  const showToast = useToastify();

  const { openDeleteDailog, loading, deleteRow, pagination }: any =
    useAppSelector((state) => state.employeeDetail);

  const handleDelete = async () => {
    try {
      const res = await dispatch(deleteEmployee(deleteRow?._id));
      await dispatch(
        fetchEmployee({
          pageIndex: pagination?.pageIndex,
          pageSize: pagination?.pageSize,
        })
      );
      await dispatch(setOpenDeleteDailog(false));
      if (res.payload.status === 201) {
        showToast(res?.payload?.data?.message, "success");
      } else {
        showToast("Failed to delete employee", "error");
      }
    } catch (error) {
      showToast("Something went wrong please try later", "error");
    }
  };

  return (
    <ConfirmDailoag
      open={openDeleteDailog}
      onCancel={() => {
        dispatch(setOpenDeleteDailog(false));
      }}
      onDelete={handleDelete}
      loading={loading}
      title="Delete Employee"
    >
      <p>
        Are you sure you want to delete this employee{" "}
        <b>{`${deleteRow?.firstName} ${deleteRow?.lastName}`}?</b>
      </p>
    </ConfirmDailoag>
  );
};

export default EmployeeDeleteDialog;
