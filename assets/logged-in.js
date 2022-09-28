  $(document).ready(function() {
    document.querySelector('.info-banner').setAttribute('href', `/app/submissions/new/basics/?_=${new Date().getTime()}&covid=true`);

    $.ajax({
      url: "/authenticated",
      cache: false,
      success: function() {
        var ul = document.getElementsByClassName("navbar-nav")[0].getElementsByTagName("li")[0];
        $(ul).after('<li class="nav-item"><a href="/app/submissions" class="nav-link ember-view">Submissions</a></li>');
        $(ul).after('<li class="nav-item"><a href="/app/grants" class="nav-link ember-view">Grants</a></li>');
        var loginbtn = document.getElementById('login-button');
        loginbtn.style.visibility = 'hidden';

        document.querySelector('.info-banner').setAttribute('href', `/app/submissions/new/basics/?_=${new Date().getTime()}&covid=true`);
      },
      error: function() {
        timestampLoginLink();
      }
    });
  });
  
  function timestampLoginLink()  {
    if ($('#login-link')) {
      $('#login-link').attr('href',"/login/jhu?_=" + new Date().getTime());
    }
    if ($('#get-started-link')) {
      $('#get-started-link').attr('href',"/login/jhu?_=" + new Date().getTime());
    }
  }