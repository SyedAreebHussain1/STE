import { getError, post, get, patch } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import { AppDispatch } from "../../../store";
import {
  createUserPayroll,
  createUserPayrollSuccess,
  createUserPayrollFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/createUserPayrollSlice";
import {
  getAllCompanyDepartment,
  getAllCompanyDepartmentSuccess,
  getAllCompanyDepartmentFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/getAllCompanyDepartmentSlice";
import {
  getAllCompanyUser,
  getAllCompanyUserSuccess,
  getAllCompanyUserFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/getAllCompanyUserSlice";
import {
  getAllUserPayroll,
  getAllUserPayrollSuccess,
  getAllUserPayrollFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/getAllUserPayrollSlice";
import {
  getPayrollByEmployeeId,
  getPayrollByEmployeeIdFailure,
  getPayrollByEmployeeIdSuccess,
} from "../../../slices/SalaryManagement/SalaryDetails/getPayrollByEmployeeIdSlice";
import {
  markAsPaid,
  markAsPaidSuccess,
  markAsPaidFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/markAsPaidSlice";
import {
  updateUserPayroll,
  updateUserPayrollSuccess,
  updateUserPayrollFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/updateUserPayrollSlice";
import {
  payrollDetailsByUserId,
  payrollDetailsByUserIdSuccess,
  payrollDetailsByUserIdFailure,
} from "../../../slices/SalaryManagement/SalaryDetails/payrollDetailsByUserIdSlice";
import { getFromStorage } from "../../../../utils/storage";
export const createUserPayrollApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(createUserPayroll());
  try {
    const response = await post<any>(
      ENDPOINT.salaryManagement.createUserPayroll,
      body
    );
    dispatch(createUserPayrollSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createUserPayrollFailure("Error"));
  }
};
export const markAsPaidApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(markAsPaid());
  try {
    const response = await patch<any>(
      ENDPOINT.salaryManagement.markAsPaid,
      body
    );
    dispatch(markAsPaidSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(markAsPaidFailure("Error"));
  }
};
export const updateUserPayrollApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: () => void
) => {
  dispatch(updateUserPayroll());
  try {
    const response = await patch<any>(
      `${ENDPOINT.salaryManagement.updateUserPayroll}/${id}`,
      body
    );
    dispatch(updateUserPayrollSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateUserPayrollFailure("Error"));
  }
};
export const getAllCompanyDepartmentApi = async (dispatch: AppDispatch) => {
  dispatch(getAllCompanyDepartment());
  try {
    const apiString = `${ENDPOINT.salaryManagement.getAllCompanyDepartment}?page=1&limit=100`;
    const response = await get<any>(apiString);
    dispatch(getAllCompanyDepartmentSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllCompanyDepartmentFailure("Error"));
  }
};
export const getAllCompanyUserApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getAllCompanyUser());
  try {
    const apiString = `${ENDPOINT.salaryManagement.getAllCompanyUser}/${id}?page=1&limit=10`;
    const response = await get<any>(apiString);
    dispatch(getAllCompanyUserSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllCompanyUserFailure("Error"));
  }
};
export const getAllUserPayrollApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  filteration: any
) => {
  const user = getFromStorage("user")?.companyUser?.companyRole.title;
  dispatch(getAllUserPayroll());
  try {
    const apiString = `${ENDPOINT.salaryManagement.getAllUserPayroll}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      filteration.name ? `&name=${filteration.name}` : ""
    }${
      filteration.empolyeeId ? `&companyUserId=${filteration.empolyeeId}` : ""
    }${
      filteration.department ? `&departmentId=${filteration.department}` : ""
    }${
      filteration.startDate && filteration.endDate
        ? `&startDate=${filteration.startDate}&endDate=${filteration.endDate}`
        : ""
    }
      
    `;
    const response = await get<any>(apiString);
    dispatch(getAllUserPayrollSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllUserPayrollFailure("Error"));
  }
};

export const getPayrollByEmployeeIdApi = async (
  dispatch: AppDispatch,
  employeeId: any,
  departmentId: any,
  payRolldate: any
) => {
  dispatch(getPayrollByEmployeeId());
  try {
    const apiString = `${ENDPOINT.salaryManagement.getPayrollByEmployeeId}?employeeId=${employeeId}&departmentId=${departmentId}&payRolldate=${payRolldate}`;
    const response = await get<any>(apiString);
    dispatch(getPayrollByEmployeeIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getPayrollByEmployeeIdFailure("Error"));
  }
};
export const payrollDetailsByUserIdApi = async (
  dispatch: AppDispatch,
  id: any,
  date: any
) => {
  dispatch(payrollDetailsByUserId());
  try {
    const apiString = `${ENDPOINT.salaryManagement.payrollDetailsByUserId}?employeeId=${id}&payrollMonth=${date}`;
    const response = await get<any>(apiString);
    dispatch(payrollDetailsByUserIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(payrollDetailsByUserIdFailure("Error"));
  }
};
