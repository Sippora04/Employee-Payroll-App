window.addEventListener("DOMContentLoaded", () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date</th>" +
        "<th>Actions</th>";
    let employeePayrollLocalList = createEmployeePayrollJSON();
    let innerHtml = `${headerHtml}`;
    for (let employeePayrollData of employeePayrollLocalList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePicture}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDepartmentHtml(employeePayrollData._departments)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
    let employeePayrollLocalList = [{
            _name: 'Sippora Toppo',
            _gender: 'Female',
            _departments: [
                'HR'
            ],
            _salary: '400000',
            _startDate: '10 Dec 2020',
            _note: 'Trying 1st employee entry',
            _id: new Date().getTime(),
            _profilePicture: '../assets/profile-images/Ellipse -4.png'
        },
        {
            _name: 'Swati Singh',
            _gender: 'Female',
            _departments: [
                'HR', 'Finance', 'Others'
            ],
            _salary: '300000',
            _startDate: '26 Jan 2016',
            _note: 'Trying 2nd employee entry',
            _id: new Date().getTime() + 1,
            _profilePicture: '../assets/profile-images/Ellipse -10.png'
        }
    ];
    return employeePayrollLocalList;
}

const getDepartmentHtml = (departmentList) => {
    let departmentHtml = "";
    for (let department of departmentList) {
        departmentHtml = `${departmentHtml} <div class="dept-label">${department}</div>`;
    }
    return departmentHtml;
};