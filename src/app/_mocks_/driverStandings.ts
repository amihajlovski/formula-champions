export const driverStandings = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.4',
    series: 'f1',
    url: 'http://ergast.com/api/f1/2015/driverstandings/1.json',
    limit: '30',
    offset: '0',
    total: '1',
    StandingsTable: {
      season: '2015',
      driverStandings: '1',
      StandingsLists: [
        {
          season: '2015',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '381',
              wins: '10',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British',
              },
              Constructors: [
                {
                  constructorId: 'mercedes',
                  url:
                    'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                  name: 'Mercedes',
                  nationality: 'German',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
