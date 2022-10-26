import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: 'LIL7RPC3PGRKCD7NUDXY',
    secretAccessKey: 'WgvVjwhL5zcNuj2zu6JdiB8OFWSIpYg8G8hv8f5h',
    endpoint: 'https://s3gw.inet.co.th:8082'
})

const s3 = new AWS.S3();

export default s3;
