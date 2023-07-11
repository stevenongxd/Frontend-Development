function Reserve() {

  let error = false;

  // Validate Name
  let name = document.getElementById('name');
  if (name.value.length <= 0) {
    error = true;
    alert('Name Cannot Be Empty!');
    return;
  }

  // Validate Branch
  let branch = document.getElementById('branch');
  if (branch.value === '') {
    error = true;
    alert('Please Select an Option!');
    return;
  }


  // Validate Type
  let reguler = document.getElementById('reguler');
  let exclusive = document.getElementById('exclusive');

  if(!reguler.checked && !exclusive.checked) {
    error = true;
    alert('Choose a Reservation Type');
    return;
  }

  // Validate Contact
  let contact = document.getElementById('contact');

  if(isNaN(contact.value)) {
    error = true;
    alert('Phone Number Must Be Numeric');
    return;
  } else if(contact.value == '') {
    error = true;
    alert('Phone Number Cannot Be Empty');
    return;
  } else if(contact.value.length < 12 || contact.value.length > 13) {
    error = true;
    alert('Phone Number Invalid');
    return;
  }

  // Validate Checkbox
  let agree = document.getElementById('agree');
  if(!agree.checked) {
    error = true;
    alert('You must agree before reserving')
  }

  if(error === false) {
    alert('Reservation Successful');
    window.location.href = 'index.html';
  }

}

function Delete() {
  // Refresh Page
  // window.location.href = 'index.html';

  // Reset the form fields
  document.getElementById('name').value = '';
  document.getElementById('branch').selectedIndex = 0;
  document.getElementById('reguler').checked = false;
  document.getElementById('exclusive').checked = false;
  document.getElementById('contact').value = '';
  document.getElementById('agree').checked = false;
}