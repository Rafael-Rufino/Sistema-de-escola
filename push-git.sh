#!/bin/bash


git add .
read message
echo "Atualizando o repositorio"
git commit -am "$message"
git push
