document.addEventListener("DOMContentLoaded",function(){
const submit=document.getElementById('github-form')
submit.addEventListener('submit', handleSubmit )
})

function handleSubmit(event){
    event.preventDefault();
const inputName =document.getElementById('search');
let userName= inputName.value;
    
    fetch(`https://api.github.com/search/users?q=${userName}`,{
    
        headers: {
          Authorization: `Bearer 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`,
        },
      })
    .then(function (response){
    return response.json();
})
 .then(function(data){
    console.log(data);
    data.items.forEach(function(user){
        const displayList=document.getElementById('user-list');
        const list=document.createElement('li')
        list.innerHTML=`
        <a href="${user.repos_url}"><h2>${user.login}</h2></a>
         <img src="${user.avatar_url}" alt="Avatar" >           
        <a href="${user.html_url}" target="_blank">View Profile</a>
        <button id='clickButton'>SEE USER <button>
        
     `
     
     displayList.appendChild(list);
     
     const button=document.querySelector('#clickButton')
     button.addEventListener('click',function(){
      handleClick(user.login)
      })
    });
  })
}
     
    
  
  
    
  
 function handleClick(userName){
    fetch(`https://api.github.com/users/${userName}/repos`,{
    headers: {
        Authorization: `Bearer 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`,
      },
    })
    .then(function (response){
        return response.json();
    })
    .then(function(data){

    
      const cardMain=document.createElement('div')
      cardMain.className='cardEachUser'
      cardMain.innerHTML=`
      <h3 class='theUserName'> "USERNAME: ${userName} "</h3>
      <img src="${userName.avatar_url}" alt="Avatar">
      <h4 class="followers">"FOLLOWERS: ${userName.followers_url}"</h4>
      <h4 class="following">"FOLLOWING: ${userName.following_url}"</h4>
      <h4 class="allRepos">"${userName} REPOSITORIES"</h4>

      `;

      const repoCard=document.createElement('div');
      repoCard.className='repoCard';

      data.forEach(function(repos){
        const elementsOfRepo=document.createElement('li');
      elementsOfRepo.className='reposElements';
      elementsOfRepo.innerHTML=`
      
      <h4 class='nameOfRepo'>"Name:${repos.name}" </h4>
      <p class='infoOnRepo'>"${repos.description}"</p>

      `;
      repoCard.appendChild(elementsOfRepo);
 });
     cardMain.appendChild(repoCard);
     } 
    )
}





 
 
 
 
 















































// document.addEventListener("DOMContentLoaded",function(){
//     const submit=document.getElementById('github-form')
//     submit.addEventListener('submit', handleSubmit )
//     })
    
//     function handleSubmit(event){
//         event.preventDefault();
//     const inputName =document.getElementById('search');
    
    
//     let userName= inputName.value
//         // console.log(userName);
//         fetch(`https://api.github.com/search/users?q=${userName}`)
//         .then(function (response){
//         return response.json();
//     })
//      .then(function(data){
//         console.log(data);
//         data.items.forEach(function(user){
//             const displayList=document.getElementById('user-list');
//             const list=document.createElement('li')
//             list.innerHTML=`
//             <a href="${user.repos_url}"><h2>${user.login}</h2></a>
//              <img src="${user.avatar_url}" alt="Avatar" >           
//             <a href="${user.html_url}" target="_blank">View Profile</a>
            
//          `
//          displayList.appendChild(list);
//      })
//     })
//     }
    