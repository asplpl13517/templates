$(function () {
  //  Animations code
  $("input").focus(function(){
    $(this).siblings().addClass('active')
  })
  $("input").blur(function(){
    if ($(this)[0].value.length <=  0) {
      $(this).siblings().removeClass('active')
    }
  })


  //  Validation code
  var loginPage = $('.login')
  loginPage.find('button').on('click', function () {
    loginPage.find('.login-error').removeClass('success')
    if (loginPage.find('#signin_input')[0].value.length === 0 || loginPage.find('#signin_pass')[0].value.length === 0) {
      loginPage.find('.login-error').find('span')[0].innerText = 'Fields are empty'
      return
    } else {
      loginPage.find('.login-error').find('span')[0].innerText = ''
    }

    if (!validateCredentials()) {
      loginPage.find('.login-error').find('span')[0].innerText = 'Invalid Credentials'
    } else {
      loginPage.find('.login-error')
        .addClass('success')
        .find('span')[0].innerText = 'Login Sucessful'
      loginPage.find('#signin_input')[0].value = ''
      loginPage.find('#signin_pass')[0].value = ''
    }
  })

  var registerPage = $('.register')
  registerPage.find('button').on('click', function () {
    registerPage.find('.login-error').removeClass('success')
    if (registerPage.find('#register_input')[0].value.length === 0 || registerPage.find('#register_pass')[0].value.length === 0) {
      registerPage.find('.register-error').find('span')[0].innerText = 'Fields are empty'
    } else if (registerPage.find('#register_pass')[0].value !== registerPage.find('#register_confirmPass')[0].value) {
      registerPage.find('.register-error').find('span')[0].innerText = 'Password do not match'
    } else {
      database.push({
        username: registerPage.find('#register_input')[0].value,
        pass: registerPage.find('#register_pass')[0].value
      })
      registerPage.find('.register-error')
      .addClass('success')
      .find('span')[0].innerText = 'Registration successful'
      registerPage.find('#register_input')[0].value = ''
      registerPage.find('#register_pass')[0].value = ''
      registerPage.find('#register_confirmPass')[0].value = ''
    }
  })


  function validateCredentials() {
    var user = loginPage.find('#signin_input')[0].value
    var pass = loginPage.find('#signin_pass')[0].value
    var valid = false
    for (details of database) {
      if (details.username === user && details.pass === pass) {
        valid = true
        break
      }
    }
    return valid
  }
})



var database = [
  {
    username: 'john',
    pass: 'john'
  },
  {
    username: 'castle',
    pass: 'castle'
  },
  {
    username: 'crews',
    pass: 'crews'
  }
]
