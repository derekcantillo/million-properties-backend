import sys

import boto3


def update_parameter(param_name, param_value, aws_region):
    ssm = boto3.client(
        "ssm",
        region_name=aws_region,
    )

    try:
        response = ssm.put_parameter(
            Name=param_name, Value=param_value, Type="String", Overwrite=True
        )
        print(f"Parameter {param_name} updated successfully.")
    except Exception as e:
        print(f"Error updating parameter {param_name}: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print(sys.argv)
        print("Usage: python param_update.py {param_update} {value}")
        sys.exit(1)

    param_name = sys.argv[1]
    param_value = sys.argv[2]
    aws_region = sys.argv[3]
    update_parameter(param_name, param_value, aws_region)
