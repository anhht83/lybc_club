export const Storage = {
  get: (name, defaultValue = null) =>
    window.sessionStorage.getItem(name) ||
    window.localStorage.getItem(name) ||
    defaultValue,
  set: (name, value, remember = false) =>
    remember
      ? window.localStorage.setItem(name, value)
      : window.sessionStorage.setItem(name, value),
  remove: name => {
    window.sessionStorage.removeItem(name);
    window.localStorage.removeItem(name);
  },
};

export const Auth = {
  get: (field = null) => {
    let user = Storage.get('auth');
    user = user ? JSON.parse(user) : null;
    if (user && field) {
      return user[field] || '';
    }
    return user;
  },

  hasOneOfRoles: roles => {
    let hasRole = false;
    roles = Array.isArray(roles) ? roles : [roles];
    Auth.get('roles').forEach(role => {
      if (roles.includes(role)) hasRole = true;
    });
    return hasRole;
  },

  getUser: () => {
    const user = Storage.get('auth');
    return user ? JSON.parse(user) : null;
  },

  logIn: (user, remember = false) =>
    Storage.set('auth', JSON.stringify(user), remember),

  logout: () => {
    Storage.remove('auth');
    // window.location = '/';
  },

  isLoggedIn: () => Auth.getUser() != null,
};
