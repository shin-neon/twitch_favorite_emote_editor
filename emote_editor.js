const tbody = document.getElementById('emoteTable');
const searchInput = document.getElementById('search');
const prevHitBtn = document.getElementById('prevHit');
const nextHitBtn = document.getElementById('nextHit');
const hitInfo = document.getElementById('hitInfo');
const saveBtn = document.getElementById('saveBtn');
const previewBtn = document.getElementById('previewBtn');
const previewModal = document.getElementById('previewModal');
const previewContent = document.getElementById('previewContent');

let emoteData = {};
let searchKeys = [];
let currentHitIndex = 0;

async function getEmoteData() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const result = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      let raw = localStorage.getItem('twilight.emote_picker_history');
      try { return raw ? JSON.parse(raw) : {}; } catch(e) { return {}; }
    }
  });
  return result[0].result;
}

async function setEmoteData(data) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (d) => localStorage.setItem('twilight.emote_picker_history', JSON.stringify(d)),
    args: [data]
  });
}

function getEmoteURL(emote) {
  if (!emote) return '';
  if (emote.type === 'GLOBALS') {
    return `https://static-cdn.jtvnw.net/emoticons/v1/${emote.id}/3.0`;
  } else {
    return `https://static-cdn.jtvnw.net/emoticons/v2/${emote.id}/default/dark/3.0`;
  }
}

// --- テーブル描画 ---
function renderTable() {
  tbody.innerHTML = '';
  const sortedKeys = Object.keys(emoteData).sort((a,b) => emoteData[b].uses - emoteData[a].uses);

  sortedKeys.forEach((id, index) => {
    const info = emoteData[id];
    const tr = document.createElement('tr');

    // 順位列
    const tdIndex = document.createElement('td');
    tdIndex.textContent = index + 1;
    tr.appendChild(tdIndex);

    // Emote列
    const tdImg = document.createElement('td');
    const img = document.createElement('img');
    img.src = getEmoteURL(info.emote);
    img.alt = info.emote.token;
    img.style.height = '32px';
    tdImg.appendChild(img);
    tdImg.appendChild(document.createTextNode(' ' + info.emote.token));
    tr.appendChild(tdImg);

    // Uses列
    const tdUses = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.value = info.uses;
    input.addEventListener('change', () => {
      let val = parseInt(input.value);
      if (isNaN(val) || val < 0) val = 0;
      input.value = val;
      emoteData[id].uses = val;
    });
    tdUses.appendChild(input);
    tr.appendChild(tdUses);

    // 削除列
    const tdDel = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.addEventListener('click', () => {
      delete emoteData[id];
      renderTable(); // 即反映
    });
    tdDel.appendChild(btn);
    tr.appendChild(tdDel);

    tbody.appendChild(tr);
  });

  updateSearch();
}

// --- 検索処理 ---
function updateSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const rows = Array.from(tbody.querySelectorAll('tr'));

  if (!query) {
    searchKeys = [];
    currentHitIndex = 0;
    rows.forEach(row => row.style.background = '');
    prevHitBtn.style.display = 'none';
    nextHitBtn.style.display = 'none';
    hitInfo.style.display = 'none';
    return;
  }

  searchKeys = Object.keys(emoteData).filter(id =>
    emoteData[id].emote.token.toLowerCase().includes(query)
  );
  currentHitIndex = 0;

  if (searchKeys.length === 0) {
    rows.forEach(row => row.style.background = '');
    hitInfo.textContent = '0/0';
    prevHitBtn.style.display = 'none';
    nextHitBtn.style.display = 'none';
    return;
  }

  prevHitBtn.style.display = searchKeys.length > 1 ? '' : 'none';
  nextHitBtn.style.display = searchKeys.length > 1 ? '' : 'none';
  hitInfo.style.display = '';
  
  highlightCurrentHit();
}

// --- ハイライト ---
function highlightCurrentHit() {
  const rows = Array.from(tbody.querySelectorAll('tr'));
  rows.forEach(row => row.style.background = '');
  if (searchKeys.length === 0) return;

  const currentId = searchKeys[currentHitIndex];
  const row = rows.find(r => r.querySelector('td:nth-child(2)').textContent.includes(emoteData[currentId].emote.token));
  if (row) {
    row.style.background = '#ffd';
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  hitInfo.textContent = `${currentHitIndex + 1}/${searchKeys.length}`;
}

// --- プレビュー ---
function showPreview() {
  previewContent.innerHTML = '';
  const sortedKeys = Object.keys(emoteData).sort((a,b) => emoteData[b].uses - emoteData[a].uses);
  const top24 = sortedKeys.slice(0, 24);

  top24.forEach(id => {
    const info = emoteData[id];
    const img = document.createElement('img');
    img.src = getEmoteURL(info.emote);
    img.title = `${info.emote.token} (${info.uses})`;
    previewContent.appendChild(img);
  });

  previewModal.style.display = 'flex';
}

// --- イベント ---
searchInput.addEventListener('input', () => updateSearch());
prevHitBtn.addEventListener('click', () => { if(currentHitIndex>0){currentHitIndex--; highlightCurrentHit();} });
nextHitBtn.addEventListener('click', () => { if(currentHitIndex<searchKeys.length-1){currentHitIndex++; highlightCurrentHit();} });
saveBtn.addEventListener('click', async () => {
  await setEmoteData(emoteData);
  const notice = document.createElement('div');
  notice.textContent = '✅ 保存しました';
  notice.style.position = 'fixed';
  notice.style.bottom = '8px';
  notice.style.right = '8px';
  notice.style.background = '#4caf50';
  notice.style.color = '#fff';
  notice.style.padding = '4px 8px';
  notice.style.borderRadius = '4px';
  notice.style.zIndex = 9999;
  document.body.appendChild(notice);
  setTimeout(() => notice.remove(), 1500);
});
previewBtn.addEventListener('click', showPreview);
previewModal.addEventListener('click', (e) => {
  if (e.target === previewModal) previewModal.style.display = 'none';
});

// --- 初期化 ---
getEmoteData().then(data => { emoteData = data; renderTable(); });
