function navTo(sectionId) {
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('company-page').classList.remove('active');
  document.getElementById('works-all').classList.remove('active');
  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    setTimeout(function() {
      var el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}

function showCompany() {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('company-page').classList.add('active');
  document.getElementById('works-all').classList.remove('active');
  window.scrollTo(0, 0);
}

function showWorksAll() {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('works-all').classList.add('active');
  document.getElementById('company-page').classList.remove('active');
  window.scrollTo(0, 0);
}

function showMain() {
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('company-page').classList.remove('active');
  document.getElementById('works-all').classList.remove('active');
  window.scrollTo(0, 0);
}

function showForm() {
  document.getElementById('form-wrap').classList.add('active');
  document.getElementById('confirm-wrap').classList.remove('active');
  document.getElementById('thanks-wrap').classList.remove('active');
  document.querySelector('.contact-btn').style.display = 'none';
  document.getElementById('form-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleOther() {
  var cat = document.getElementById('category').value;
  document.getElementById('other-group').style.display = cat === 'その他' ? 'block' : 'none';
}

function showConfirm(e) {
  e.preventDefault();
  document.getElementById('c-company').textContent = document.getElementById('company').value || '—';
  document.getElementById('c-name').textContent = document.getElementById('name').value;
  document.getElementById('c-email').textContent = document.getElementById('email').value;
  document.getElementById('c-tel').textContent = document.getElementById('tel').value || '—';
  document.getElementById('c-category').textContent = document.getElementById('category').value;
  document.getElementById('c-message').textContent = document.getElementById('message').value || '—';
  var other = document.getElementById('other').value;
  if (other) {
    document.getElementById('c-other-row').style.display = 'flex';
    document.getElementById('c-other').textContent = other;
  }
  document.getElementById('form-wrap').classList.remove('active');
  document.getElementById('confirm-wrap').classList.add('active');
  document.getElementById('confirm-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToForm() {
  document.getElementById('confirm-wrap').classList.remove('active');
  document.getElementById('form-wrap').classList.add('active');
}

async function sendForm() {
  var data = {
    company: document.getElementById('company').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    tel: document.getElementById('tel').value,
    category: document.getElementById('category').value,
    message: document.getElementById('message').value,
    other: document.getElementById('other').value,
  };
  try {
    var res = await fetch('https://formspree.io/f/xgopagjv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      document.getElementById('confirm-wrap').classList.remove('active');
      document.getElementById('thanks-wrap').classList.add('active');
    } else {
      alert('送信に失敗しました。お手数ですが、直接メールにてお問い合わせください。');
    }
  } catch(err) {
    alert('送信に失敗しました。お手数ですが、直接メールにてお問い合わせください。');
  }
}
