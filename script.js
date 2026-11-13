// 탭 전환: 주요 교육체계
function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.style.display = 'none');

  event.currentTarget.classList.add('active');
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// 캠퍼스 전환: 진천 본원 vs 과천 분원
function switchCampus(campusId) {
  const btnJincheon = document.getElementById('btn-jincheon');
  const btnGwacheon = document.getElementById('btn-gwacheon');
  const boxJincheon = document.getElementById('campus-jincheon');
  const boxGwacheon = document.getElementById('campus-gwacheon');

  if (campusId === 'jincheon') {
    btnJincheon.classList.add('active');
    btnGwacheon.classList.remove('active');
    boxJincheon.style.display = 'block';
    boxGwacheon.style.display = 'none';
  } else {
    btnGwacheon.classList.add('active');
    btnJincheon.classList.remove('active');
    boxGwacheon.style.display = 'block';
    boxJincheon.style.display = 'none';
  }
}

// FAQ 아코디언 토글
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  // 다른 열린 항목 닫기
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.faq-answer').style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

// 주소 복사 및 토스트 알림
function copyAddress(addressText) {
  navigator.clipboard.writeText(addressText).then(() => {
    showToast(`주소가 클립보드에 복사되었습니다: "${addressText}"`);
  }).catch(() => {
    showToast("주소 복사에 실패했습니다. 수동으로 복사해 주세요.");
  });
}

// 알림 토스트 UI 생성 및 표시
function showToast(message) {
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
