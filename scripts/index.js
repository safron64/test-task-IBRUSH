document.addEventListener('DOMContentLoaded', function () {
	function toggleBurgerMenu() {
		const burgerMenu = document.getElementById('burgerMenu')
		burgerMenu.classList.toggle('active')
	}

	const modal = document.getElementById('myModal')
	const buttons = document.querySelectorAll('#open-modal')
	const closeBtn = document.querySelector('.close')

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			modal.style.display = 'block'
		})
	})

	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	window.addEventListener('click', event => {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	})

	const burgerMenu = document.getElementById('burgerMenu')
	const mobileNav = document.getElementById('mobileNav')

	burgerMenu.addEventListener('click', function () {
		mobileNav.classList.toggle('mobile-nav--open')
		toggleBurgerMenu()
	})

	const coursesLinks = document.querySelectorAll('#coursesLinks')

	coursesLinks.forEach(coursesLink => {
		const dropdown = coursesLink.nextElementSibling
		const arrow = coursesLink.querySelector('.arrow svg')

		if (!dropdown) return

		coursesLink.addEventListener('click', event => {
			event.preventDefault()
			if (dropdown.classList.contains('show')) {
				dropdown.classList.remove('show')
				if (arrow) arrow.style.transform = 'rotate(0deg)'
			} else {
				closeAllDropdowns()
				dropdown.classList.add('show')
				if (arrow) arrow.style.transform = 'rotate(180deg)'
			}
		})

		document.addEventListener('click', event => {
			if (
				coursesLink &&
				dropdown &&
				!coursesLink.contains(event.target) &&
				!dropdown.contains(event.target)
			) {
				dropdown.classList.remove('show')
				if (arrow) arrow.style.transform = 'rotate(0deg)'
			}
		})
	})

	function closeAllDropdowns() {
		const dropdowns = document.querySelectorAll('.dropdown')
		const arrows = document.querySelectorAll('.arrow svg')

		dropdowns.forEach(dropdown => {
			dropdown.classList.remove('show')
		})

		arrows.forEach(arrow => {
			arrow.style.transform = 'rotate(0deg)'
		})
	}

	const dropdownBtn = document.getElementById('reviews-dropdown-button')
	dropdownBtn.addEventListener('click', function () {
		const arrow = dropdownBtn.querySelector('.arrow')

		if (arrow) arrow.classList.toggle('rotate-arr')
		const dropdownContent = document.getElementById('reviews-dropdown-menu')

		if (dropdownContent.style.display === 'block') {
			dropdownContent.style.display = 'none'
		} else {
			dropdownContent.style.display = 'block'
		}
	})

	document
		.getElementById('reviews-dropdown-menu')
		.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				document.getElementById('reviews-dropdown-button').textContent =
					e.target.textContent
				document.getElementById('reviews-dropdown-menu').style.display =
					'none'
			}
		})

	document.addEventListener('click', function (e) {
		const dropdownContent = document.getElementById('reviews-dropdown-menu')
		if (!e.target.closest('.reviews-dropdown')) {
			dropdownContent.style.display = 'none'
		}
	})

	const nameInput = document.getElementById('form-name')
	const emailInput = document.getElementById('form-email')
	const nameModal = document.getElementById('modal-name')
	const emailModal = document.getElementById('modal-email')
	nameModal.addEventListener('input', () => {
		toggleLabelVisibility('modal-name')
	})
	emailModal.addEventListener('input', () => {
		toggleLabelVisibility('modal-email')
	})
	nameInput.addEventListener('input', () => {
		toggleLabelVisibility('form-name')
	})

	emailInput.addEventListener('input', () => {
		toggleLabelVisibility('form-email')
	})

	function toggleLabelVisibility(inputId) {
		const inputElement = document.getElementById(inputId)
		const labelElement = document.querySelector(`label[for='${inputId}']`)

		if (inputElement && labelElement) {
			if (inputElement.value.trim() !== '') {
				labelElement.style.display = 'inline'
			} else {
				labelElement.style.display = 'none'
			}
		}
	}
})

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
