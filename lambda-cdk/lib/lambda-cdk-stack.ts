import * as cdk from 'aws-cdk-lib';
import  { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const function_name = 'cdklambdafunction';
    const lambda_handler = new lambda.Function(this, function_name, {
      functionName: function_name,
      runtime: lambda.Runtime.PYTHON_3_11, // You can change the runtime as needed
      handler: 'lambda_function.lambda_handler',
      code: lambda.Code.fromAsset('lambda'), // Assuming your Lambda code is in a 'lambda' directory
    });
  }
}



