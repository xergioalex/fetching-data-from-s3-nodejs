import * as aws from 'aws-sdk'
import config from './config'

aws.config.update({
  region: config.aws.region,
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  httpOptions: {
    timeout: 5000 // 5 seconds
  }
})


const s3 = new aws.S3()

const s3Params = {
    Bucket: config.s3.bucket,
    Key: config.s3.filePath
}

const awsHelper = {
    getS3Data: async () => {
        let jsonDataOutside = {}
        const response = s3.getObject(s3Params, (err, data) => {
            if (err) {
                console.log('----------- Error S3 --------------')
                console.log(err)
            }
        })

        await response.promise().then((data) => {
            const jsonData = JSON.parse(new Buffer(data.Body).toString("utf8"));
            jsonDataOutside = jsonData
        })

        return jsonDataOutside
    }
}

export default awsHelper;