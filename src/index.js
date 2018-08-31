import awsHelper from './aws'

async function getJsonData() {
  const jsonData = await awsHelper.getS3Data()
  console.log('------- Final Output ------');
  console.log(jsonData)
}


getJsonData()
