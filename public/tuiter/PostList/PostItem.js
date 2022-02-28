// const PostItem = (post) =>{
//     return (
//         `
// <div class="list-group-item d-flex justify-content-between">
//     <div class="">
//         <div class="text-secondary">${post.topic}</div>
//         <div class="text-white  fw-bold">${post.userName}<i class="fa fa-check-circle"></i><span
//             class="text-secondary">-${post.time}</span>
//         </div>
//         <div class="text-white fw-bold">${post.title}
//         </div>
//     </div>
//
//     <img class="img-fluid float-right img-thumbnail override-bs" src="${post.image}">
// </div>
//  `
//     )
// }
// export default PostItem;


const PostItem = (post) =>{
return (`
<div class="d-inline-flex flex-wrap align-top p-2" style="border: solid 0.5px gray">
        <div class="col-1 justify-content-end pe-1">
            <a><img src="${post.avatarIcon}" class="img-fluid w-100 rounded-circle"></a>
        </div>
        <div class="col-11">
            <ul class="list-group">
                <!--                for author and content-->
        <li class="list-group-item bg-transparent border-0">
          <div>
            <div class=" fw-bold ">${post.userName}<i class="fa fa-check-circle ps-1"></i><span
                class="text-secondary ps-1">- ${post.time}</span>
                    </div>
                    <div class="text-white" >
                        ${post.content}
                    </div>
            </div>
        </li>
                <!--                for pic and dis-->
        <li class="list-group-item bg-transparent border-0">
                    <div class="card border-1 bg-transparent" style="border-radius: 5%; border: gray 0.5em solid">
                        <img class="card-img-top" style="border-top-left-radius: 5%; border-top-right-radius: 5%" src="${post.image}" alt="Card image cap">
                        <div class="card-body ms-3 mb-3 me-3">
                            <h5 class="card-title ">${post.title}</h5>
                            <p class="card-text">${post.details}</p>
                        </div>
                    </div>
                </li>
                <!--                for icons-->
        <li class="list-group-item d-inline-flex justify-content-evenly align-items-center bg-transparent border-0">
                    <a class="wd-icons align-items-center" href="#">
                        <i class="fa fa-comment"></i>
                        <div class="ps-1">${post.commentQty}</div>
                    </a>
    
                    <a class="wd-icons align-items-center" href="#">
                        <i class="fa fa-reply-all"></i>
                        <div class="ps-1">${post.shareQty}</div>
                    </a>
    
                    <a class="wd-icons wd-icon-highlighted align-items-center" href="#">
                        <i class="fa fa-heart"></i>
                        <div class="ps-1">${post.likeQty}</div>
                    </a>
    
                    <a class="wd-icons align-items-center" href="#">
                        <i class="fa fa-share"></i>
                        <div class="ps-1">  </div>
    
                    </a>
                </li>
            
            </ul>
        </div>
    </div>
`)
}
export default PostItem;