function createCookie(name, value) {
  const now = new Date();
  const oneYearFromNow = new Date(now.setFullYear(now.getFullYear() + 1));
  const expires = oneYearFromNow.toUTCString();

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}