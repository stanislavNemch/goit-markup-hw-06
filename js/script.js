(() => {
    // Используем IIFE для инкапсуляции
    // --- Скрипт для мобильного меню ---
    const mobileMenu = document.querySelector(".mobile-menu");
    const openMenuBtn = document.querySelector(".mobile-menu-open-btn");
    const closeMenuBtn = document.querySelector(".mobile-menu-close-btn");
    // Добавляем выбор ссылок меню для закрытия по клику
    const menuLinks = document.querySelectorAll(".mobile-nav-link");

    const toggleMenu = () => {
        const isMenuOpen = mobileMenu.classList.contains("is-open");
        mobileMenu.classList.toggle("is-open");
        // Блокировка/разблокировка скролла
        document.body.classList.toggle("no-scroll", !isMenuOpen);
        // Управление aria-атрибутами для доступности
        openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        if (mobileMenu.classList.contains("is-open")) {
            toggleMenu();
        }
    };

    if (openMenuBtn && mobileMenu) {
        openMenuBtn.addEventListener("click", toggleMenu);
    }
    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener("click", toggleMenu);
    }
    // Закрытие меню при клике на ссылку
    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenuOnLinkClick);
    });

    // Закрытие меню по клику вне его области
    window.addEventListener("click", (e) => {
        if (
            mobileMenu.classList.contains("is-open") &&
            !mobileMenu.contains(e.target) &&
            !openMenuBtn.contains(e.target)
        ) {
            toggleMenu();
        }
    });

    // Закрытие меню по клавише Escape
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
            toggleMenu();
        }
    });

    // --- Скрипт для модального окна ---
    const openModalBtns = document.querySelectorAll("[data-modal-open]");
    const closeModalBtns = document.querySelectorAll("[data-modal-close]");
    const modalOverlay = document.querySelector("[data-modal]");

    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add("is-open");
            document.body.classList.add("no-scroll"); // Используем тот же класс
        }
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove("is-open");
            // Не убираем no-scroll, если открыто мобильное меню
            if (!document.querySelector(".mobile-menu.is-open")) {
                document.body.classList.remove("no-scroll");
            }
        }
    }

    openModalBtns.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });

    closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", closeModal);
    });

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            modalOverlay &&
            modalOverlay.classList.contains("is-open")
        ) {
            closeModal();
        }
    });
})();
