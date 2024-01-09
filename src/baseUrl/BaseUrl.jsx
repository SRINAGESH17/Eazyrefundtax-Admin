const AdminBaseUrl= `${process.env.REACT_APP_BASEURL}/admin`;
// const AdminBaseUrl = `https://k3qw61dm-4000.inc1.devtunnels.ms/api/v1/admin`;
const AuthBaseUrl = `${process.env.REACT_APP_BASEURL}/auth`;

export const AdminAuthorURL = {
  employee: {
    getAllEmployees: (searchKey, page) =>
      `${AdminBaseUrl}/employee/fetch?searchKey=${searchKey}&limit=10&page=${page}&download=false`,
    getEmployeeById: (id) => `${AdminBaseUrl}/employee/fetch/${id}`,

    createEmployee: `${AdminBaseUrl}/employee/create`,

    updateEmployee: (id) => `${AdminBaseUrl}/employee/edit/${id}`,
    deleteEmployee: (id) => `${AdminBaseUrl}/employee/${id}`,
  },
  subAdmin: {
    fetchSubAdmin: (searchKey, page) =>
      `${AdminBaseUrl}/subadmin/fetch?searchKey=${searchKey}&limit=10&page=${page}&download=false`,
    createSubAdmin: `${AdminBaseUrl}/subadmin/create`,
    fetchSubAdminById: (id) => `${AdminBaseUrl}/subadmin/fetch/${id}`,
    updateSubAdmin: (id) => `${AdminBaseUrl}//subadmin/edit/${id}`,
    deleteSubAdmin: (id) => `${AdminBaseUrl}/subadmin/delete/${id}`,
  },

  callData: {
    fetchCallDataBySlot: `${AdminBaseUrl}/call/slot-wise`,
    fetchCallDataByEmployee: `${AdminBaseUrl}/call/employee-wise`,
    fetchActiveCallers:`${AdminBaseUrl}/caller/active`,
    assignCallToEmployee:`${AdminBaseUrl}/call/assign`,
    bulkUpload:`${AdminBaseUrl}/call/bulk-upload`,
    migrateCalls:`${AdminBaseUrl}/call/migrate`,
    migratePendingCalls:`${AdminBaseUrl}/call/migrate-pending`,
    fetchCalls:(searchKey,status,page) =>  `${AdminBaseUrl}/call/fetch?searchKey=${searchKey}&status=${status}&page=${page}&limit=10`
  },
  taxType:{
    getTaxYears:`${AdminBaseUrl}/tax-year/fetch`,
    addTaxYear: `${AdminBaseUrl}/tax-year/add`,

    addTaxDocument:`${AdminBaseUrl}/tax-doc-type/add`,
    getTaxDocuments:`${AdminBaseUrl}/tax-doc-type/fetch`,

    addTaxReturnDocument:`${AdminBaseUrl}/tax-return-doc-type/add`,
    getTaxReturnDocuments:`${AdminBaseUrl}/tax-return-doc-type/fetch`
  }
};

export const AuthURL = {
  role: {
    fetchRole: `${AuthBaseUrl}/role`,
  },
};
