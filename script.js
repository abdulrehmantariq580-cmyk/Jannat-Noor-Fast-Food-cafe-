
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Smooth Scroll Anchor Support
            // If the user is already on menu.html, it will scroll. 
            // If on index, the href will take them there.
            const categoryCards = document.querySelectorAll('.category-type-card');
            
            categoryCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    const targetUrl = this.getAttribute('href');
                    console.log("Navigating to: " + targetUrl);
                    // Standard navigation happens automatically via <a> tag
                });
            });

            // 2. Parallax Hover for Category Images (PC only)
            if (window.innerWidth > 1024) {
                categoryCards.forEach(card => {
                    const img = card.querySelector('.type-img');
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width - 0.5;
                        const y = (e.clientY - rect.top) / rect.height - 0.5;
                        
                        img.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px) scale(1.1)`;
                    });

                    card.addEventListener('mouseleave', () => {
                        img.style.transform = `translateX(0) translateY(0) scale(1)`;
                    });
                });
            }
        });


        document.addEventListener('DOMContentLoaded', () => {
            // Interactive Map Hint Removal
            const mapWrap = document.querySelector('.map-embed-wrapper');
            mapWrap.addEventListener('click', () => {
                document.querySelector('.map-overlay-hint').style.display = 'none';
            });

            // Smooth Reveal for Contact Grid
            const revealOptions = { threshold: 0.2 };
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, revealOptions);

            document.querySelectorAll('.equal-height-box, .map-embed-wrapper').forEach(el => {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
                el.style.transition = "all 0.8s ease-out";
                revealObserver.observe(el);
            });

            // Class for revealed state
            const style = document.createElement('style');
            style.innerHTML = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
            document.head.appendChild(style);
        });


        document.addEventListener('DOMContentLoaded', () => {
            const scrollBtn = document.getElementById('scrollToTopBtn');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) { scrollBtn.style.display = "block"; } 
                else { scrollBtn.style.display = "none"; }
            });
            scrollBtn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
        });

        document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Menu kholne ke liye
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            // Background scroll na ho jab menu khula ho
            document.body.style.overflow = 'hidden'; 
        });
    }

    // Menu band karne ke liye (Close icon par click)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Bahar (overlay) click karne par bhi menu band ho
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

