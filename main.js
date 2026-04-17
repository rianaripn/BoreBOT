// Inisialisasi referensi elemen DOM yang akan dimanipulasi
const btnReset = document.getElementById('btn-reset');
const button = document.getElementById("get-activity");
const btnText = document.getElementById("btn-text");
const activityEl = document.getElementById("activity");
const titleEl = document.getElementById("title");
const iconEl = document.getElementById("bot-icon");
const subtitleEl = document.getElementById("bot-subtitle");
const modalContainer = document.querySelector('.modal')

/**
 * Event Listener untuk tombol "SHAKE THE BOREDOM"
 * Berfungsi mengambil data aktivitas acak dari Bored API
 */
document.getElementById("get-activity").addEventListener("click", function () {
    btnText.textContent = "THINKING..."; // Feedback visual saat loading
    button.disabled = true; // Mencegah spam click
    modalContainer.classList.add('active') // Tampilkan tombol reset

    // Mengambil data dari API publik Bored API via Scrimba proxy
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            // Update konten UI dengan data dari API
            activityEl.textContent = `"${data.activity}"`;
            titleEl.textContent = "HappyBot";
            iconEl.textContent = "🦾";
            subtitleEl.textContent = "Status: Activity Found";
        })
        .catch(error => {
            // Handling jika terjadi error pada koneksi/API
            activityEl.textContent = "Oops! Something went wrong.";
        })
        .finally(() => {
            // Kembalikan status tombol ke semula setelah fetch selesai
            btnText.textContent = "⚡ SHAKE THE BOREDOM";
            button.disabled = false;
        });
});

/**
 * Event Listener untuk tombol Reset
 * Mengembalikan tampilan aplikasi ke kondisi awal
 */
btnReset.addEventListener('click', function () {
    activityEl.textContent = '🏃‍➡️ Find something else to do'
    titleEl.textContent = 'BoredBot'
    iconEl.textContent = '🤖'
    subtitleEl.textContent = 'Status: Seeking Adventure'
    modalContainer.classList.remove('active')
})