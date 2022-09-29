function seatParse(type) {
    fetch(`http://ergast.com/api/f1/2020/1/driverstandings.json`)
        .then((res) => res.json())
        .then((responseData) => seatParse(responseData, type))
}


let racerSponsor = i.Constructors[0]['constructorId']
function racerFunc(data, type) {
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)

    for (i of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
            if (i.type == type || type == '') {

                let racerPosition = i.position
                let racerName = i.Driver.driverId
                let racerNationality = i.Driver.nationality
                let racerSponsor = i.Constructors[0]['constructorId']
                let racerPoints = i.points

                let clone = myTemplate.content.cloneNode(true); 
                let td = clone.querySelectorAll('td') 

                td[0].textContent = racerPosition
                td[1].textContent = racerName
                td[2].textContent = racerNationality
                td[3].textContent = racerSponsor
                td[4].textContent = racerPoints

                tableBody.appendChild(clone);
            }
        } 
    }