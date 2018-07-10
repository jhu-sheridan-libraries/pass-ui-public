  $(document).ready(function() {
    $.ajax({
      url: "/app/",
      cache: false,
      success: function(data) {
        if (data.indexOf("<title>PASS</title>")>0) {
          var ul = document.getElementsByClassName("navbar-nav")[0].getElementsByTagName("li")[0];
          $(ul).after('<li class="nav-item"><a href="/app/submissions" class="nav-link ember-view">Submissions</a></li>');
          $(ul).after('<li class="nav-item"><a href="/app/grants" class="nav-link ember-view">Grants</a></li>');
          var loginbtn = document.getElementById('login-button');
          loginbtn.style.visibility = 'hidden';
        } else {
          timestampLoginLink();
        }
      },
      error: function() {
        timestampLoginLink();
      }
    });
  });
  
  function timestampLoginLink()  {
    if ($('#login-link')) {
      $('#login-link').attr('href',"/app/?_=" + new Date().getTime());
    }
    if ($('#get-started-link')) {
      $('#get-started-link').attr('href',"/app/?_=" + new Date().getTime());
    }
  }