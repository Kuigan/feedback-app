# Lambda Function Code
resource "local_file" "lambda_zip" {
  filename = "${path.module}/lambda_function.zip"
  content  = <<-EOT
    exports.handler = async (event) => {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!'),
      };
      return response;
    };
  EOT
}

resource "aws_lambda_function" "hello_world_lambda" {
  function_name = "hello_world_lambda"
  role          = aws_iam_role.lambda_execution_role.arn
  handler       = "index.handler"
  runtime       = "nodejs14.x"

  filename      = local_file.lambda_zip.filename

  source_code_hash = filebase64sha256(local_file.lambda_zip.filename)
}

# Permission for API Gateway or other services to invoke Lambda
resource "aws_lambda_permission" "lambda_invoke" {
  statement_id  = "AllowExecutionFromApiGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hello_world_lambda.function_name
  principal     = "apigateway.amazonaws.com"
}
