const WhoToFollowListItem = (who)=>{
    return (`
    <div class="row align-items-center align-items-center d-flex justify-content-between">
         <div class="col-2"><img src=${who.avatarIcon} class="img-fluid w-100 rounded-circle"></div>
         <div class="col-7">
         <div class="fw-bold text-white">${who.userName} <i class="fa fa-check-circle"></i></div>
         <div class="text-secondary">${who.handle}</div>
         </div>
         <div class="col-3 btn btn-primary  rounded-pill">Follow</div>
    </div>
    `);
}
export default WhoToFollowListItem;