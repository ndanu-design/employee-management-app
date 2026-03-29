function toggleDashboard() {
    const dashboard = document.querySelector(".dashboard");
    const home = document.querySelector(".home-content");

    if (dashboard.classList.contains("show")) {
        dashboard.classList.remove("show");
        home.classList.remove("hide");
    } else {
        dashboard.classList.add("show");
        home.classList.add("hide");
    }
}

function viewdetails(id, dob, postal, gender) {
    alert(
        "ID: " + id +
        "\nDOB: " + dob +
        "\nPostal Code: " + postal +
        "\nGender: " + gender
    );
}

function editdetails(No) {
    alert("Edit contact with No: " + No);
}

function deletedetails(button) {
    if (confirm("Are you sure you want to delete this contact?")) {
        let row = button.parentElement.parentElement;
        row.remove();
        updateNumbers();
    }
}

function updateNumbers() {
    let rows = document.querySelectorAll("table tr");

    for (let i = 1; i < rows.length; i++) {
        rows[i].children[0].textContent = i;
    }
}

