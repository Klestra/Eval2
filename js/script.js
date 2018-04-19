$(document).ready(function() {
  
    $('#a').on('click', function() {
      $.get("https://swapi.co/api/people/", function(perso) {
        if($('.ul-style').length > 0 ) {
          $('.ul-style').remove();
      };
        let persoList = perso.results;
        let list = document.createElement('ul');
        list.classList.add('ul-style');
        for (let i = 0; i < persoList.length; i++) {
          let listElement = document.createElement('li');
          listElement.innerHTML = persoList[i].name;
          listElement.dataset.url = persoList[i].url;
          list.appendChild(listElement);
        };
        document.querySelector('.perso').appendChild(list);
        });
    });
})

/*$(document).ready(function() {
    $('#a').on('click', function() {
        $.get("https://swapi.co/api/people/", function(perso) {
            let persoList = perso.results;
            let list = document.createElement('ul');
            list.classList.add('ul-style');
                for (let i = 0; i < persoList.lenght; i++) {
                    let listElement = document.createElement('li');
                    listElement.innerHTML = persoList[i].name;
                    listElement.dataset.url = persoList[i].url;
                    list.appendChild(listElement);  
                };
                document.querySelector('.perso').appendChild(list);
        });
    });
})
*/