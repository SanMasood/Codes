const posts = [{title: "First", body: "First body"},
 {title: "Second", body: "Second body"}];

 function getPosts(){
     setTimeout(() => {
         let output = '';

         posts.forEach((post,index) => {
             output += `${post.title}\n`;
             console.log(output);
         });

     }, 4000);
 }
 function createPost(post){
     setTimeout(() => {
         posts.push(post);
     }, 3000);
 }
getPosts();
createPost({title: "Post three", body: "Body three"});