const branches = [
    {
        name: "Sigma Cairo",
        city: "Cairo",
        address: "Dokki",
        employees: 8
    },
    {
        name: "Sigma Giza",
        city: "Giza",
        address: "Faisal",
        employees: 5
    },
    {
        name: "Sigma Alexandria",
        city: "Alexandria",
        address: "Smouha",
        employees: 6
    },
    {
        name: "Sigma Mansoura",
        city: "Mansoura",
        address: "University Street",
        employees: 4
    },
    {
        name: "Sigma Tanta",
        city: "Tanta",
        address: "El Geish Street",
        employees: 3
    },
    {
        name: "Sigma Nasr City",
        city: "Cairo",
        address: "Nasr City",
        employees: 7
    }
];

const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");
const sortNameButton = document.getElementById("sortName");
const sortEmployeesButton = document.getElementById("sortEmployees");
const tableMessage = document.getElementById("tableMessage");

let currentBranches = [...branches];

function displayBranches(data) {
    tableBody.replaceChildren();

    if (data.length === 0) {
        tableMessage.textContent = "No matching branches found.";
        return;
    }

    tableMessage.textContent = "";

    data.forEach(function (branch) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const cityCell = document.createElement("td");
        const addressCell = document.createElement("td");
        const employeesCell = document.createElement("td");

        nameCell.textContent = branch.name;
        cityCell.textContent = branch.city;
        addressCell.textContent = branch.address;
        employeesCell.textContent = branch.employees;

        row.append(
            nameCell,
            cityCell,
            addressCell,
            employeesCell
        );

        tableBody.appendChild(row);
    });
}

function searchBranches() {
    const query = searchInput.value.trim().toLowerCase();

    currentBranches = branches.filter(function (branch) {
        return (
            branch.name.toLowerCase().includes(query) ||
            branch.city.toLowerCase().includes(query) ||
            branch.address.toLowerCase().includes(query) ||
            String(branch.employees).includes(query)
        );
    });

    displayBranches(currentBranches);
}

searchInput.addEventListener("input", searchBranches);

sortNameButton.addEventListener("click", function () {
    currentBranches.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    displayBranches(currentBranches);
});

sortEmployeesButton.addEventListener("click", function () {
    currentBranches.sort(function (a, b) {
        return a.employees - b.employees;
    });

    displayBranches(currentBranches);
});

displayBranches(currentBranches);