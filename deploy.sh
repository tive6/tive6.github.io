#!/bin/bash

path="/data/www/blog/"

#cd $path
#ls
#pwd
#echo $1

#cd ${path}blog

mkdir ${path}zip

unzip -O utf-8 -o ${path}$1 -d $path

mv ${path}*.zip ${path}zip/




