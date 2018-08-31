const config = {
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  s3: {
    bucket: process.env.S3_BUCKET,
    filePath: process.env.S3_FILE_PATH
  }
}

export default config