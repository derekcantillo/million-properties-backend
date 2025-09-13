#!/bin/bash

echo "Iniciando script de construcción y subida de imágenes de Docker a ECR ..."
set -e  # Detiene el script si algún comando falla
# Verificar que se hayan pasado todos los parámetros necesarios
if [ "$#" -ne 5 ]; then
    echo "Uso: $0 <NAME_SERVICE> <CODEBUILD_RESOLVED_SOURCE_VERSION> <AWS_ACCOUNT_ID> <AWS_DEFAULT_REGION> <IMAGE_REPO_NAME>"
    exit 1
fi

# Asignación de parámetros a variables
NAME_SERVICE=$1
CODEBUILD_RESOLVED_SOURCE_VERSION=$2
AWS_ACCOUNT_ID=$3
AWS_DEFAULT_REGION=$4
IMAGE_REPO_NAME=$5

# Construir la imagen de Docker sin caché
echo "Construyendo la imagen de Docker service ..."

docker build --no-cache -t ${NAME_SERVICE}:${CODEBUILD_RESOLVED_SOURCE_VERSION} .

docker tag ${NAME_SERVICE}:${CODEBUILD_RESOLVED_SOURCE_VERSION} $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/${IMAGE_REPO_NAME}:${CODEBUILD_RESOLVED_SOURCE_VERSION}

docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/${IMAGE_REPO_NAME}:${CODEBUILD_RESOLVED_SOURCE_VERSION}

echo "Imagen de Docker construida y subida a ECR."
