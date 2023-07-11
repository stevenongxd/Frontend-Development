function Submit() {

  let error = false

  // Validate Name
  let name = document.getElementById('name')
  if(name.value.length <= 0) {
    error = true
    alert('Name Cannot Be Empty')
    return
  }

  // Validate Gender
  let male = document.getElementById('male')
  let female = document.getElementById('female')
  if(!male.checked && !female.checked) {
    error = true
    alert('Gender Cannot Be Empty')
    return
  }

  // Validate Phone
  let phone = document.getElementById('phone')
  if(isNaN(phone.value)) {
    error = true
    alert('Phone Must Be A Number')
    return
  } else if(phone.value.length < 12 || phone.value.length > 13) {
    error = true
    alert('Phone Number Invalid')
    return
  }

  // Validate Testimonial
  let testimoni = document.getElementById('testimonial')
  if(testimoni.value.length <= 0) {
    error = true
    alert('Testimonial Cannot Be Empty')
    return
  }

  if(error === false) {
    alert('Testimonial Submitted Sucessfully')
    window.location.href = 'testimoni.html'
  }
}

function Reset() {
  document.getElementById('name').value = ''
  document.getElementById('male').checked = false
  document.getElementById('female').checked = false
  document.getElementById('phone').value = ''
  document.getElementById('testimonial').value = ''
  
}