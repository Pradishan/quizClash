export const loadCridential = (cridential) => {
  localStorage.setItem("USER_ID", cridential.id);
  localStorage.setItem("USER_NAME", cridential.username);
  localStorage.setItem("EMAIL", cridential.email);
  localStorage.setItem("PHONE", cridential.phone);
  localStorage.setItem("ADDRESS", cridential.address);
  localStorage.setItem("SCORE", cridential?.score ?? 0);
  localStorage.setItem("IS_STAFF", cridential.is_staff);
  localStorage.setItem("FIRST_NAME", cridential.first_name);
  localStorage.setItem("LAST_NAME", cridential.last_name);
}

// Function to set a cookie
export function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to remove a cookie
export function removeCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Function to get the value of a cookie by name
export function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return null;
}

export function initialNavigate() {
  console.log(localStorage.getItem("IS_STAFF"))
  return localStorage.getItem("IS_STAFF") === 'true' ? '/admin' : '/profile';
}

export function removeCridential() {
  localStorage.removeItem("USER_ID");
  localStorage.removeItem("USER_NAME");
  localStorage.removeItem("EMAIL");
  localStorage.removeItem("PHONE");
  localStorage.removeItem("ADDRESS");
  localStorage.removeItem("SCORE");
  localStorage.removeItem("IS_STAFF");
  localStorage.removeItem("FIRST_NAME");
  localStorage.removeItem("LAST_NAME");
}

export function getAccessToken() {
  return getCookie('TOKEN')
}

export function adminAccess() {
  return getAccessToken() && localStorage.getItem("IS_STAFF") === 'true';
}

export function getUserID() {
  return localStorage.getItem("USER_ID")
}

export function getUserEmail() {
  return localStorage.getItem("EMAIL")
}

export function getUserAddress() {
  return localStorage.getItem("ADDRESS")
}

export function getUserPhone() {
  return localStorage.getItem("PHONE")
}

export function getUserName() {
  return localStorage.getItem("USER_NAME")
}
export function getUserFirstName() {
  return localStorage.getItem("FIRST_NAME")
}
export function getUserLastName() {
  return localStorage.getItem("LAST_NAME")
}

export function getUserScore() {
  return localStorage?.getItem("SCORE")
}

export function fetchUserData(){

}
