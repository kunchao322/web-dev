import profile from '../data/profile.js';

const profileReducer = (state = profile, action) => {
    switch (action.type){
        case 'update-profile':
            return state.map(profile =>{
                profile.firstName = action.profile.firstName;
                profile.lastName = action.profile.lastName;
                profile.bio = action.profile.bio;
                profile.location = action.profile.location;
                profile.website = action.profile.website;
            })
    }
    return(profile);
};

export default profileReducer;
