import json 

def lambda_handler(event, context):
    return {
        "statusCode":200,
        'body': json.dumps('Hello from Lambda!')
    }

# For direct invocation and testing on the local machine
if __name__ == '__main__':
    print(lambda_handler(None,None))