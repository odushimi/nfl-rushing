export const cleanRushingData = (rushingData) => {

    rushingData.forEach(function(playerData, index) {
        playerData['Yds'] = parseInt(playerData['Yds'].toString().replace(',', '')) 
        rushingData[index] = playerData;
      });

    return rushingData
}

