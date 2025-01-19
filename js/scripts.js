/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
            
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// MODAL SERVICIOS

document.addEventListener('DOMContentLoaded', function() {
    const serviciosLink = document.getElementById('serviciosLink');
    const serviciosModal = document.getElementById('serviciosModal');
    const inicioLink = document.querySelector('a[href="Index.html"]');
    const contactoLink = document.querySelector('a[href="Contacto.html"]');

    // Mostrar el modal y cambiar el color al pasar el mouse sobre "SERVICIOS"
    serviciosLink.addEventListener('mouseover', function() {
        // Cambiar color de SERVICIOS
        serviciosLink.style.color = '#007bff'; // Azul claro

        // Mostrar el modal de servicios
        var myModal = new bootstrap.Modal(serviciosModal, {
            backdrop: false,  // Desactivar el fondo sombreado
            keyboard: false    // Evitar que se cierre con el teclado
        });
        myModal.show();
    });

    // Cambiar el color de los enlaces al pasar el mouse
    const navLinks = [inicioLink, serviciosLink, contactoLink];
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#007bff';  // Cambiar color a azul claro
            link.style.cursor = 'pointer'; // Cambiar el cursor a manito
        });

        link.addEventListener('mouseout', function() {
            link.style.color = ''; // Restaurar el color original
        });
    });

    // Cerrar el modal al mover el mouse fuera del modal
    serviciosModal.addEventListener('mouseleave', function() {
        var modalInstance = bootstrap.Modal.getInstance(serviciosModal);
        if (modalInstance) {
            modalInstance.hide();
        }
    });

    // Detectar clic fuera del modal para cerrarlo
    window.addEventListener('click', function(event) {
        if (event.target === serviciosModal) {
            var modalInstance = bootstrap.Modal.getInstance(serviciosModal);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    });

    // Mostrar el contenido de la sección correspondiente al hacer clic en un enlace del modal
    document.querySelectorAll('.modal-header-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.modal-content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelector(this.getAttribute('data-target')).style.display = 'block';
        });
    });

    // Cerrar el modal al pasar el mouse sobre INICIO, SERVICIOS o CONTACTO
    inicioLink.addEventListener('mouseover', function() {
        var modalInstance = bootstrap.Modal.getInstance(serviciosModal);
        if (modalInstance) {
            modalInstance.hide();
        }
    });

    contactoLink.addEventListener('mouseover', function() {
        var modalInstance = bootstrap.Modal.getInstance(serviciosModal);
        if (modalInstance) {
            modalInstance.hide();
        }
    });
});

function showService(serviceId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.modal-content-section').forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Mostrar la sección correspondiente
    document.getElementById(serviceId).style.display = 'block';

    // Remover clase active de todos los enlaces
    document.querySelectorAll('.modal-header-link').forEach(function(link) {
        link.classList.remove('active');
    });

    // Agregar clase active al enlace clickeado
    document.querySelector(`[data-target="#${serviceId}"]`).classList.add('active');
}





