const message = `selamat atas kelulusan SMA mu, ya. selamat telah berhasil melewati tantangan selama 3 tahun, keluh kesah di SMA. tak terasa ya waktu cepat berlalu, lebih semangat lagi ya menempuh pendidikan selanjutnya. aku tunggu kabar baikmu yang katanya ingin menjadi polwan. maaf ya belum bisa hadir langsung di acara kelulusan mu, sementara lewat greeting card ini dulu ya. aku bangga padamu, isa. semoga setelah lulus dari SMA bisa jadi orang yang menguntungkan dan menyenangkan untuk orang lain ya. jadi semakin dewasa. sekian dariku, semoga takdir mempertemukan kita lagi di versi terbaik masing-masing ya. 

Vino, Jakarta 2026`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}