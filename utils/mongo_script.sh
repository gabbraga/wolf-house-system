#!/bin/bash
trap "kill 0" EXIT
mongod --dbpath /Users/gabrielabraga/data/db &
mongo &
wait