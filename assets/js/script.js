
        document.addEventListener('DOMContentLoaded', () => {
            const menuButton = document.getElementById('menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelectorAll('#mobile-menu a');
            const whatsappForm = document.getElementById('whatsapp-form');
            const formMessage = document.getElementById('form-message');

            // 1. Toggle del menú hamburguer
            menuButton.addEventListener('click', () => {
                const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
                menuButton.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
            });
            
            // 1.1 Cerrar menú móvil al hacer click en un enlace
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuButton.setAttribute('aria-expanded', 'false');
                });
            });

            // 2. Lógica del Formulario a WhatsApp
            whatsappForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = document.getElementById('name').value;
                const description = document.getElementById('description').value;

                // Teléfono de contacto (USAMOS EL MISMO NÚMERO DEL BOTÓN DE WHATSAPP)
                const phoneNumber = '573052492882'; 
                
                // Mensaje pre-rellenado
                const message = encodeURIComponent(`¡Hola! Soy ${name} y quiero aprender sobre ${description} para generar ingresos por internet. ¿Podemos hablar?`);
                
                // URL de WhatsApp
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

                // Mostrar mensaje de éxito (simulado en el div) y redirigir
                formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
                formMessage.classList.add('bg-green-100', 'text-green-700');
                formMessage.innerHTML = '¡Excelente! Redirigiendo a WhatsApp...';
                
                // Abrir WhatsApp en una nueva pestaña después de un breve retraso
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                    // Opcional: Limpiar el formulario después del envío
                    whatsappForm.reset(); 
                    formMessage.classList.add('hidden');
                }, 1000); 
            });

            // 3. Scroll Suave para anclas
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });