const CSVToJSON = require('csvtojson')
const path =  require('path')

const csvFilePath = path.join(__dirname, '../Automation-System/backup_file/preset.csv')
const convertCsvToJson = async () => {
  try {
    const results = await CSVToJSON().fromFile(csvFilePath)

    return results;

  } catch (error) {
    console.log(error)

  }
}


module.exports = {
  convertCsvToJson,
}
