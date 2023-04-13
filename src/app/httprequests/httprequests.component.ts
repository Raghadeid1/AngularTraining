import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
@Component({
  selector: 'httprequests',
  templateUrl: './httprequests.component.html',
  styleUrls: ['./httprequests.component.css']
})
export class HttprequestsComponent implements OnInit {

  //if i implement OnInit then its better to use it to initalize object and operations
  //then using the constructor
  constructor(private PostServ: PostService){ }

  posts:any = [];
  users:any = [];
  ngOnInit(): void {
    this.posts = this.PostServ.getPosts().subscribe(
      res =>{
      this.posts = res;
    });
    this.users = this.PostServ.getUsers().subscribe(
      res =>{
      this.users = res;
    });
  }
  updateUser(user:any,updateUser:any){
    this.PostServ.updateUser(user,updateUser).subscribe(
      res =>{
      //update current view
      const index = this.users.indexOf(user);
      this.users[index] = res;
    });
  }
  createPost(post:HTMLInputElement){
    this.PostServ.createPost(post.value).subscribe(
      res => {
      //this.posts.splice(0,0,post) - used if i want to add an object to a list at position 0 ->
      //splice(0 - start at 0,0 - delete 0 object, post - add a new object)
      //i can also use push which will add my object at the end of the list
      // splice adds my object at the desired place in this example its the beginning
      this.posts.splice(0,0,res);
    });
  }
  deleteUser(user:any)
  {
    this.PostServ.deleteUser(user,this.users).subscribe(res => {
      const index = this.users.indexOf(user);
      this.users.splice(index,1);
      console.log(this.users);
    });
  }



}
