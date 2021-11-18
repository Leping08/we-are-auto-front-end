const admin = {
  mounted(el, binding) {
    if (!binding.instance.$root.isAdmin) {
      el.remove();
    }
  },
};

const notAdmin = {
  mounted(el, binding) {
    if (binding.instance.$root.isAdmin) {
      el.remove();
    }
  },
};

const guest = {
  mounted(el, binding) {
    if (binding.instance.$root.isAuthenticated) {
      el.remove();
    }
  },
};

const auth = {
  mounted(el, binding) {
    if (!binding.instance.$root.isAuthenticated) {
      el.remove();
    }
  },
};

export { admin, notAdmin, guest, auth };
