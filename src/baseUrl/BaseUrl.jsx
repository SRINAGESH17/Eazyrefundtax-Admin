const AdminBaseUrl= `${process.env.REACT_APP_BASEURL}/admin`;
const AuthBaseUrl= `${process.env.REACT_APP_BASEURL}/auth`;

export const AdminAuthorURL = {
  employee: {
    getAllEmployees: (searchKey, page) =>
      `${AdminBaseUrl}/employee/fetch?searchKey=${searchKey}&limit=10&page=${page}&download=false`,
    getEmployeeById: (id) => `${AdminBaseUrl}/employee/fetch/${id}`,

    createEmployee: `${AdminBaseUrl}/employee/create`,

    updateEmployee: (id) => `${AdminBaseUrl}/employee/${id}`,
  },
};

export const AuthURL={
    role:{
        fetchRole:`${AuthBaseUrl}/role`
    }
}