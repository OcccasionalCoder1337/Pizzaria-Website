document.addEventListener('DOMContentLoaded', () => {
  const signUp = document.getElementById('signUp');
  const signIn = document.getElementById('signIn');   

  const show = el => { el.classList.remove('hidden'); el.removeAttribute('aria-hidden'); };
  const hide = el => { el.classList.add('hidden');    el.setAttribute('aria-hidden','true'); };

  document.getElementById('signUpButton')
          .addEventListener('click', () => { hide(signIn); show(signUp); });

  document.getElementById('signInButton')
          .addEventListener('click', () => { hide(signUp); show(signIn); });
});