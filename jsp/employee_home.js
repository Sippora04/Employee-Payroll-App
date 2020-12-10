/*  Template literals are string literals allowing embedded expressions.
    You can use multi-line strings and string interpolation features with them. */
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
    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="..//assets/profile-images/Ellipse -4.png"></td>
        <td>Sippora Toppo</td>
        <td>Female</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>400000</td>
        <td>10 Dec 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
};
