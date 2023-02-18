const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '994bfeb674msh9c1033ff6c10432p15a35bjsnf27427bc1fd6',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
    .then(response => response.json())
    .then(response => {
        const list = response.d;
        list.map((item) => {
             const name=item.l;
             const poster=item.i.imageUrl;
             const movie=`<li><img src="${poster}"> <h2>${name}</h2></li>`
             document.querySelector('.movies').innerHTML+=movie;
        })
    })
    .catch(err => console.error(err));