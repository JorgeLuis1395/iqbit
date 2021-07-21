import { Injectable } from '@nestjs/common';
var fs=require('fs');
var data=fs.readFileSync('src/archivo/users.json', 'utf8');
var words=data;
var bodyparser=require('body-parser');
console.log(words);

@Injectable()
export class AppService {


  getHello(): string {
    return words;
  }

  getUserId(idUser: string){
      console.log(JSON.parse(words))
      let value = JSON.parse(words)
   let user= value.filter(word => word.id.toString() === idUser.toString())
      console.log(user)
      return user
  }/*

  getUserPosition(){

  }*/



}
