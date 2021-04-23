function formatCsv(rawData){
    header = rawData[0];
    rawData.splice(0,1);
    var formattedData = [];
    for (var i = 0; i < rawData.length; i++){
        var pushedObj = {};
        for (var j = 0; j < header.length; j++){
            pushedObj[header[j]] = rawData[i][j];
        }
        formattedData.push(pushedObj);
    }
    return formattedData;
}
