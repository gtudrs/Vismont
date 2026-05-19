/* ==========================================================================
   1. LOGICĂ PENTRU MENIUL DE MOBIL (BUTON HAMBURGER)
   ========================================================================== */
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        // Deschide sau închide meniul adăugând clasa 'active'
        navMenu.classList.toggle('active');
        
        // Schimbă iconița din Hamburger (linii) în "X" când e deschis
        const icon = mobileMenu.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}

/* ==========================================================================
   2. SIMULARE CUMPĂRARE BILETE (PAGINA BILETE)
   ========================================================================== */
function cumparaBilet(numeEveniment) {
    // Generăm un cod unic fictiv pentru bilet
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    const codBilet = 'VSM-' + randomCode;
    
    // Afișează o alertă pop-up stilizată nativ
    alert(`🎉 Biletul tău digital a fost emis cu succes!\n\n🔹 Eveniment: ${numeEveniment}\n🔹 Cod Unic Scanare: ${codBilet}\n\n*Salvează codul pe telefon. Aceasta este o simulare pentru proiectul Vismont.`);
}

/* ==========================================================================
   3. SIMULARE SISTEM REZERVARE CAZARE (PAGINA CAZARE - FORMULAR CLASIC)
   ========================================================================== */
function faceRezervare(event) {
    event.preventDefault(); // Oprește reîncărcarea automată a paginii la trimiterea formularului
    
    // Preluăm valorile introduse de utilizator
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const oaspeti = document.getElementById('oaspeti').value;
    const resultDiv = document.getElementById('booking-result');
    
    if (!checkin) {
        alert('Te rugăm să selectezi o dată validă pentru Check-in.');
        return;
    }

    // Stilizează caseta de mesaj succes pe baza temei curente
    resultDiv.style.display = 'block';
    resultDiv.style.backgroundColor = 'var(--light)';
    resultDiv.style.color = 'var(--bg-dark)';
    resultDiv.style.border = '2px solid var(--accent)';
    
    // Adăugăm textul de confirmare în pagină
    resultDiv.innerHTML = `
        <i class="fa-solid fa-circle-check" style="font-size: 20px; margin-bottom: 5px;"></i><br>
        <strong>Rezervare Confirmată în Vismont!</strong><br>
        Locație: ${hotel}<br>
        Dată sosire: ${checkin}<br>
        Număr persoane: ${oaspeti} oaspeți<br>
        <small style="display:block; margin-top:10px; font-style:italic;">*Te așteptăm cu drag! Codul de rezervare a fost salvat virtual.</small>
    `;
    
    // Resetează câmpurile formularului după trimitere
    document.getElementById('booking-form').reset();
}

/* ==========================================================================
   4. SIMULARE PLATĂ ȘI REZERVARE PAYPAL (PAGINI DETALII APARTAMENTE)
   ========================================================================== */
function plataPaypal(event) {
    event.preventDefault(); // Oprește reîncărcarea automată a paginii

    // Generăm un cod de tranzacție fictiv
    const randomTx = Math.floor(10000000 + Math.random() * 90000000);
    const txCode = 'TXN-' + randomTx;

    // Confirmare vizuală pentru utilizator
    alert(`💳 Conectare securizată cu PayPal... Plată confirmată!\n\n🎉 Rezervarea ta în Vismont a fost finalizată cu succes!\n🔹 Cod Tranzacție: ${txCode}\n\n*ID-ul tău digital de cetățean a fost asociat cu această cazare. Te redirecționăm către profilul tău.`);

    // Trimite utilizatorul pe pagina de profil configurată anterior
    window.location.href = "profile.html";
}

/* ==========================================================================
   5. LOGICĂ BUTON CĂUTARE RAPIDĂ (PAGINA BOOKING.HTML)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            const inputs = document.querySelectorAll('.search-box input');
            let districtInput = inputs[0] ? inputs[0].value : "";
            
            if (districtInput) {
                alert(`🔍 Căutăm cele mai bune reședințe disponibile în districtul: "${districtInput}"...`);
            } else {
                alert('🔍 Căutăm reședințe disponibile în toate districtele Vismont...');
            }
        });
    }
});