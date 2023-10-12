import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class S3CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.CfnBucket(this, "cdk-typescript-ap-south-1-829293625760", {
      bucketName: "cdk-typescript-ap-south-1-829293625760",
    });
  }
}
