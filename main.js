$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });





const jazz = "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/26";
const standings = "https://site.api.espn.com/apis/v2/sports/basketball/nba/standings";

//=========================================================

//Get Jazz Game Details

async function getJSON() {
  let url = standings;
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderJSON() {
  let espn = await getJSON();
  let html = '';
  /* let htmlSegment = `<div class="user">
                          <i class="fa fa-user-circle fa-fw"></i>
                          <h2>${espn.team.displayName} - ${espn.team.record.items[0].summary}</h2>
                          <div>${espn.team.record.items[0].stats[0].name} - ${espn.team.record.items[0].stats[0].value}</div>
                      </div>`; */

  let htmlSegment = `<div class="user">
                          <i class="fa fa-user-circle fa-fw"></i>
                          <h2>1. ${espn.children[1].standings.entries[14].team.displayName}</h2>
                          <h2>2. ${espn.children[1].standings.entries[13].team.displayName}</h2>
                          <h2>3. ${espn.children[1].standings.entries[12].team.displayName}</h2>
                          <h2>4. ${espn.children[1].standings.entries[11].team.displayName}</h2>
                          <h2>5. ${espn.children[1].standings.entries[10].team.displayName}</h2>
                          <h2>6. ${espn.children[1].standings.entries[9].team.displayName}</h2>
                          <h2>7. ${espn.children[1].standings.entries[8].team.displayName}</h2>
                          <h2>8. ${espn.children[1].standings.entries[7].team.displayName}</h2>
                          <h2>9. ${espn.children[1].standings.entries[6].team.displayName}</h2>
                          <h2>10. ${espn.children[1].standings.entries[5].team.displayName}</h2>
                          <h2>11. ${espn.children[1].standings.entries[4].team.displayName}</h2>
                          <h2>12. ${espn.children[1].standings.entries[3].team.displayName}</h2>
                          <h2>13. ${espn.children[1].standings.entries[2].team.displayName}</h2>
                          <h2>14. ${espn.children[1].standings.entries[1].team.displayName}</h2>
                          <h2>15. ${espn.children[1].standings.entries[0].team.displayName}</h2>
                          <div></div>
                      </div>`;                    

      html += htmlSegment;
  

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderJSON();

//<h2>${espn[0].team[0].displayName} - ${espn.team[0].record["items"][0].summary}</h2>
//<div>${espn.team[0].home_team_score} - ${espn.team[0].visitor_team_score}</div>