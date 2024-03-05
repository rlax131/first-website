document.getElementById("enterButton").addEventListener("click", function () {
  // 전체 body에 blur-out 클래스를 추가하여 애니메이션 적용
  document.body.classList.add("blur-out");

  // 애니메이션 시간과 일치하는 지연 후 페이지 이동
  setTimeout(function () {
    window.location.href = "kim.html"; // 새 페이지의 URL로 변경
  }, 2000); // 애니메이션이 완료되는데 걸리는 시간 (2초)
});
document.getElementById("playButton").addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  // 오디오 재생 전에 재생 가능한지 확인
  if (audio.readyState >= 3) {
    audio.play();
  } else {
    // 오디오가 충분히 로드되지 않은 경우, 로드될 때까지 기다립니다.
    audio.addEventListener("canplay", function () {
      audio.play();
    });
  }
});