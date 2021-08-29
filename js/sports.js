
document.getElementById('input-button').addEventListener('click', function(){
    const inputNumber = document.getElementById('input-number');
    const inputValue = inputNumber.value;
    console.log(inputValue);
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => timDetails(data.teams[0]))
});
const timDetails = data =>{
    console.log(data);
    const add = document.getElementById('add');
    add.innerHTML = '';
    const {strAlternate, strCountry, strStadium, strStadiumLocation, strStadiumThumb, strDescriptionDE, strLeague, strTeamBadge, strTeamBanner, strTeamFanart1, strTeamJersey, strTeamLogo, strFacebook, strTwitter, strYoutube, strWebsite} = data;
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>Club Name: ${strAlternate}</h2>
    <h1>Country: ${strCountry}</h1>
    <h3>Stadium: ${strStadium}</h3>
    <h4>Stadium location: ${strStadiumLocation}</h4>
    <div>
        <img class="img-fluid" src="${strStadiumThumb}" alt="">
    </div>
    <p>Description: ${strDescriptionDE}</p>
    <h4>League ${strLeague}</h4>
    <h3>location</h3>

    <div>
        <div class="row">
            <div class="col-4">
                <img class="img-fluid" src="${strTeamBadge}" alt="">
                <h4 class="text-center">Team Badge</h4>
            </div>
            <div class="col-4">
                <img class="img-fluid" src="${strTeamBanner}" alt="">
                <h4 class="text-center">Team Banner</h4>
            </div>
            <div class="col-4">
                <img class="img-fluid" src="${strTeamFanart1}" alt="">
                <h4 class="text-center">Team Faner</h4>
            </div>
            <div class="col-4">
                <img class="img-fluid" src="${strTeamJersey}" alt="">
                <h4 class="text-center">Team Jersy</h4>
            </div>
            <div class="col-4">
                <img class="img-fluid" src="${strTeamLogo}" alt="">
                <h4 class="text-center">Team Logo</h4>
            </div>
        </div>
    </div>

    <footer class="bg-dark">
       <div class="text-center p-5">
          <h2 class="text-center text-danger">Connect us!</h2>
          <a href="${strFacebook}"><i class="fab fa-facebook text-white p-3"></i></a>
          <a href="${strTwitter}"><i class="fab fa-twitter text-white p-3"></i></a>
          <a href="${strYoutube}"><i class="fab fa-youtube text-white p-3"></i></a>
          <a href="${strWebsite}"><i class="fas fa-search text-white p-3"></i></a>
       </div>
    </footer>
    `
    add.appendChild(div)
}