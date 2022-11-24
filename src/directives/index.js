const admin = {
  mounted(el, binding) {
    if (!binding.instance.$root._pStores.auth.isAdmin) {
      el.remove();
    }
  },
};

const notAdmin = {
  mounted(el, binding) {
    if (binding.instance.$root._pStores.auth.isAdmin) {
      el.remove();
    }
  },
};

const guest = {
  mounted(el, binding) {
    if (binding.instance.$root._pStores.auth.isAuthenticated) {
      el.remove();
    }
  },
};

const auth = {
  mounted(el, binding) {
    if (!binding.instance.$root._pStores.auth.isAuthenticated) {
      el.remove();
    }
  },
};

export { admin, notAdmin, guest, auth };
