(function(){
  var webringEmbed = document.querySelector('#mech-keyboard-webring'),
  memberUrl = webringEmbed.dataset.memberUrl;
  console.log(memberUrl);

    webringEmbed.addEventListener('click', (e) => {
      const el = e.target.className;
      if (el.includes('webring-link')) {
        e.preventDefault();
      }
      if (el.includes('next webring-link')) {
        fetch(`/next?member=${memberUrl}`)
          .then(response => response.json())
          .then((response)=>{
            console.log(response);
            window.location.href = response;
          });

      }
      if (el.includes('prev webring-link')) {
        fetch(`/prev?${memberUrl}`)
          .then(response => response.json())
          .then((response)=>{
            window.location.href = response.page
          });

      }
      if (el.includes('list webring-link')) {

      }
      if (el.includes('random webring-link')) {
        fetch(`/random?${memberUrl}`)
          .then(response => response.json())
          .then((response)=>{
            window.location.href = response.page
          });

      }
    });

})()