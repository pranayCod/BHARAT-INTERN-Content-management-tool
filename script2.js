function addNewProject() {
    const projectName = document.getElementById('projectName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    const projectsTable = document.getElementById('projects');
    const row = projectsTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = projectName;
    cell2.textContent = userName;
    cell3.textContent = password;

    const progressSelect = document.createElement('select');
    progressSelect.innerHTML = '<option value="Pending">Pending</option><option value="Completed">Completed</option><option value="Cancelled">Cancelled</option><option value="InProgress">In Progress</option>';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      const currentText = cell4.textContent.trim();
      cell4.innerHTML = '';
      progressSelect.value = currentText;
      cell4.appendChild(progressSelect);
    });

    progressSelect.addEventListener('change', function() {
      cell4.textContent = this.value;
    });

    cell4.appendChild(progressSelect);
    cell5.appendChild(editButton);

    document.getElementById('projectName').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('password').value = '';
  }
