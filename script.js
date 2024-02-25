// Sayfa yüklendiğinde çalışacak fonksiyonlar bunlardır.
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Karanlık mod geçişi ve varsayılan içeriği göster kısmı burasıdır.
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerText = 'Karanlık Modu Aktif Et';
    document.body.insertBefore(darkModeToggle, document.body.firstChild);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerText = document.body.classList.contains('dark-mode') ? "Aydınlık Modu Aktif Et" : "Karanlık Modu Aktif Et";
    });

    // sayfa açıldığında başlaması gereken içerik belirlenir.
    displayContentBasedOnSelection('introduction');
    document.getElementById('menuSelector').addEventListener('change', function() {
        displayContentBasedOnSelection(this.value);
    });
});

// Bardaki seçilene göre içerik gösterilirr
function displayContentBasedOnSelection(selectedValue) {
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });

    const matchingSection = document.getElementById(selectedValue);
    if (matchingSection) {
        matchingSection.style.display = 'block';
    } else {
        console.error('Eşleşen içerik bulunamadı:', selectedValue);
    }
}
