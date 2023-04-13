import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  url  = "https://jsonplaceholder.typicode.com";
  posts:any = [];
  users:any = [];
  getPosts(){
    //methods for getting data
    //subscribe here is used because i want to treat this returned data as a stream
    return this.http.get(this.url + '/posts');
  }
  getUsers(){
    return this.http.get(this.url + '/users');
  }

   //method for posting data
  //subscribe here is used as a monitor over the stream, to see if there are any changes.
  createPost(input: string){
    const post ={ title: input,id:""}
    return this.http.post(this.url + '/posts', post);
  }

  //method for updating data
  //subscribe here is also used for monitoring
  updateUser(updateUser:any,inputUser:any){
    const user = {id:updateUser.id, name:inputUser ,phone:"01029278191"};
    return this.http.put(this.url + '/users/' + updateUser.id, user);
  }
  deleteUser(user:any,userlist:any[]){
    return this.http.delete(this.url + '/users/'+ user.id);
  }
}
