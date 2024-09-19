export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://occ-0-5937-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/814ad112-c8fb-4277-aaed-9635fef7a1bc/PK-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY
export const TMDB_MOVIE_API = "https://autoembed.co/movie/tmdb/";

export const FIREBASE_ERROR_MESSAGES = {
  'auth/email-already-in-use': 'This email is already in use. Please try a different one.',
  'auth/invalid-email': 'The email address is not valid. Please enter a valid email.',
  'auth/operation-not-allowed': 'Sign-in is currently disabled. Please contact support.',
  'auth/weak-password': 'The password is too weak. Please use a stronger password.',
  'auth/user-disabled': 'This user account has been disabled. Please contact support.',
  'auth/user-not-found': 'No account found with this email. Please sign up first.',
  'auth/wrong-password': 'The password is incorrect. Please try again.',
  'auth/invalid-credential' : 'Email or Password is incorrect 🥺'
};