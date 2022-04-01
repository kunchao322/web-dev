const PostSummaryItem = (post) =>{
    return (
        `
<div class="list-group-item d-flex justify-content-between">
    <div class="">
        <div class="text-secondary">${post.topic}</div>
        <div class="text-white  fw-bold">${post.userName}<i class="fa fa-check-circle"></i><span
            class="text-secondary">-${post.time}</span>
        </div>
        <div class="text-white fw-bold">${post.title}
        </div>
    </div>

    <img class="img-fluid float-right img-thumbnail override-bs" src="${post.image}">
</div>
 `
    )
}
export default PostSummaryItem;