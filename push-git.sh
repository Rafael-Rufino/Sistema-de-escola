#!/bin/bash

## npm run build

## automaizando processo de subir arquivo no repositorio
git add .

echo "Informe a message de commit: "
read message
git commit -am "$message"
git push


