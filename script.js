let currentScene = 1;

function nextScene() {
  if (currentScene === 1) {
    showGreenTransition();
  } else {
    switchScene();
  }
}

function switchScene() {
  const current = document.getElementById(`scene-${currentScene}`);
  current.classList.remove('scene-active');
  currentScene++;
  const next = document.getElementById(`scene-${currentScene}`);
  if (next) {
    next.classList.add('scene-active');
  }
}

function showGreenTransition() {
  const msgBox = document.createElement('div');
  msgBox.id = 'green-transition-msg';
  msgBox.textContent = 'Yav böyle pembe sayfa sarmadı... o güzel gözlerinin renginden devam edelim mi? 💚';
  document.body.appendChild(msgBox);

  setTimeout(() => {
    document.body.style.background = 'linear-gradient(to bottom right, #b6f7c1, #e6ffe6)';
    document.body.classList.add('green-theme'); // BUTON TEMASI DA DEĞİŞSİN
    msgBox.classList.add('fade-out');
  }, 2000);

  setTimeout(() => {
    msgBox.remove();
    switchScene();
  }, 3500);
}

function fakeExit() {
  const msg = document.getElementById("fake-exit-effect");
  msg.classList.add("show");

}

function switchScene() {
  const current = document.getElementById(`scene-${currentScene}`);
  current.classList.remove('scene-active');
  currentScene++;
  const next = document.getElementById(`scene-${currentScene}`);
  if (next) {
    next.classList.add('scene-active');

    // Eğer sahne 3 açıldıysa sesi oynat
    if (currentScene === 3) {
      const audio = document.getElementById('memory-audio');
      if (audio) {
        audio.play().catch(e => {
          console.warn("Oynatma engellendi, kullanıcı etkileşimi gerekebilir.");
        });
      }
    }
  }
}

function playMemoryAudio() {
  const audio = document.getElementById('memory-audio');
  if (audio) audio.play();
}

function prevScene() {
  const current = document.getElementById(`scene-${currentScene}`);
  current.classList.remove('scene-active');
  currentScene--;
  const prev = document.getElementById(`scene-${currentScene}`);
  if (prev) {
    prev.classList.add('scene-active');
  }
}

