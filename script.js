function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empid").value;
    let dept = document.getElementById("dept").value;

    if (name == "" || id == "" || dept == "") {
        alert("Please fill all fields");
    } else {
        alert("Employee Added Successfully!\nName: " + name +
              "\nID: " + id + "\nDepartment: " + dept);
    }
}