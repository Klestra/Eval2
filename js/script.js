$(document).ready(function() {
  
  $('#a').on('click', function() {
    $.get("https://swapi.co/api/people/", function(perso) {
      if($('.ul-style').length > 0 ) {
        $('.ul-style').remove();
      };
      if($('.info>ul').length > 0) {
        $('.info>ul').remove();
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
      $('li').on('click', function() {
        $.get(this.dataset.url, function(perso) {
          if($('.info>ul').length > 0 ) {
            $('.info>ul').remove();
          }; 
          list.classList.add('ul-style');
          let detail = document.createElement('ul');
          let detailElement1 = document.createElement('li');
          let detailElement2 = document.createElement('li');
          let detailElement3 = document.createElement('li');
          let detailElement4 = document.createElement('li');
          let detailElement5 = document.createElement('li');
          detailElement1.innerHTML = "Taille : " + perso.height;
          detailElement2.innerHTML = "Poid : " + perso.mass;
          detailElement3.innerHTML = "Type : " + perso.gender;
          detailElement4.innerHTML = "Date de naissance : " + perso.birth_year;
          detailElement5.innerHTML = "Couleur de cheveux : " + perso.hair_color;
          detail.appendChild(detailElement1);
          detail.appendChild(detailElement2);
          detail.appendChild(detailElement3);
          detail.appendChild(detailElement4);
          detail.appendChild(detailElement5);
          document.querySelector('.perso').appendChild(detail);
         });
      });  
    });
  });
  $('#b').on('click', function() {
      $.get("https://swapi.co/api/planets/", function(planet) {
        if($('.ul-style').length > 0 ) {
          $('.ul-style').remove();
        };
        if($('.info>ul').length > 0) {
          $('.info>ul').remove();
        };
        let planetList = planet.results;
        let list = document.createElement('ul');
        list.classList.add('ul-style');
        for (let i = 0; i < planetList.length; i++) {
          let listElement = document.createElement('li');
          listElement.innerHTML = planetList[i].name;
          listElement.dataset.url = planetList[i].url;
          list.appendChild(listElement);
        };
        document.querySelector('.planete').appendChild(list);
        $('li').on('click', function() {
          $.get(this.dataset.url, function(planet) {
            if($('.ul-style').length > 0 ) {
              $('.ul-style').remove();
            }; 
            list.classList.add('ul-style');
            let detail = document.createElement('ul');
            let detailElement1 = document.createElement('li');
            let detailElement2 = document.createElement('li');
            let detailElement3 = document.createElement('li');
            let detailElement4 = document.createElement('li');
            let detailElement5 = document.createElement('li');
            detailElement1.innerHTML = "Climat : " + planet.climate;
            detailElement2.innerHTML = "Diametre : " + planet.diameter;
            detailElement3.innerHTML = "Population : " + planet.population;
            detailElement4.innerHTML = "Type de terrain : " + planet.terrain;
            detailElement5.innerHTML = "Periode orbital : " + planet.orbital_period;
            detail.appendChild(detailElement1);
            detail.appendChild(detailElement2);
            detail.appendChild(detailElement3);
            detail.appendChild(detailElement4);
            detail.appendChild(detailElement5);
            document.querySelector('.planete').appendChild(detail);
           });
        }); 
      });
    });
    $('#c').on('click', function() {
      $.get("https://swapi.co/api/starships/", function(starship) {
        if($('.ul-style').length > 0 ) {
          $('.ul-style').remove();
        };
        if($('.info>ul').length > 0) {
          $('.info>ul').remove();
        };
        let starshipList = starship.results;
        let list = document.createElement('ul');
        list.classList.add('ul-style');
        for (let i = 0; i < starshipList.length; i++) {
          let listElement = document.createElement('li');
          listElement.innerHTML = starshipList[i].name;
          listElement.dataset.url = starshipList[i].url;
          list.appendChild(listElement);
        };
        document.querySelector('.vaisseau').appendChild(list);
        $('li').on('click', function() {
          $.get(this.dataset.url, function(starship) {
            if($('.ul-style').length > 0 ) {
              $('.ul-style').remove();
            }; 
            list.classList.add('ul-style');
            let detail = document.createElement('ul');
            let detailElement1 = document.createElement('li');
            let detailElement2 = document.createElement('li');
            let detailElement3 = document.createElement('li');
            let detailElement4 = document.createElement('li');
            let detailElement5 = document.createElement('li');
            detailElement1.innerHTML = "Modele : " + starship.model;
            detailElement2.innerHTML = "Classe : " + starship.starship_class;
            detailElement3.innerHTML = "Cout en credit republicain : " + starship.cost_in_credits;
            detailElement4.innerHTML = "taille : " + starship.length;
            detailElement5.innerHTML = "Nombre de passagers : " + starship.passengers;
            detail.appendChild(detailElement1);
            detail.appendChild(detailElement2);
            detail.appendChild(detailElement3);
            detail.appendChild(detailElement4);
            detail.appendChild(detailElement5);
            document.querySelector('.vaisseau').appendChild(detail);
           });
        });  
     });
  });
})