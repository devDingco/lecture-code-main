# 1. 운영체제 및 프로그램 설치
# FROM ubuntu:22.04

# RUN sudo apt install nodejs


# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm 등 모두 깔려있는 컴퓨터 설치하기)
FROM node:20

# 2. 내 컴퓨터의 폴더나 파일을 도커 컴퓨터 안에 복사하기
COPY ./package.json /mydockerfolder/
COPY ./package-lock.json /mydockerfolder/
WORKDIR /mydockerfolder/
RUN npm install

COPY . /mydockerfolder/
RUN npm run build

# 3. 도커 컴퓨터 안에서 next.js 실행시키기
CMD npm run start