"use strict";

(function() {
  var contacts_link = document.querySelector(".contacts__link");

  if (contacts_link === null) {
    return;
  }

  var contacts_modal = document.querySelector(".modal .modal__feedback");
  var contacts_close = document.querySelector(".modal__feedback .modal__close");
  var contacts_form = contacts_modal.querySelector("form[name=feedback]");
  var contacts_field_name = contacts_form.querySelector("input[name=name]");
  var contacts_field_email = contacts_form.querySelector("input[name=email]");
  var contacts_field_body = contacts_form.querySelector("input[name=body]");

  /* modal: feedback fom */
  contacts_link.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModals();
    contacts_modal.parentElement.classList.add("modal--active");
    setTimeout(contacts_field_name.focus(), 1);

  });

  contacts_close.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModal(contacts_modal.parentElement);
  });

  contacts_form.addEventListener("submit", function (evt) {
    if (!contacts_field_name.value ||
      !contacts_field_email.value ||
      !contacts_field_body.value) {

      evt.preventDefault();
      setTimeout('contacts_modal.parentElement.classList.add("modal--error");', 1);
      contacts_modal.parentElement.classList.remove("modal--error");
    }
  });

})();

(function () {
  var contacts_map_link = document.querySelector(".contacts__link-map");

  if (contacts_map_link === null) {
    return;
  }

  var contacts_map_modal = document.querySelector(".modal .modal__map");
  var contacts_map_close = document.querySelector(".modal__map .modal__close");

  /* modal: map */
  contacts_map_link.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModals();
    contacts_map_modal.parentElement.classList.add("modal--active");
  });

  contacts_map_close.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModal(contacts_map_modal.parentElement);
  });

})();

(function () {
  if (document.querySelector(".goods__btn-buy") === null) {
    return;
  }

  var notice_cart_links = document.querySelectorAll(".goods__btn-buy");
  var notice_cart_modal = document.querySelector(".modal .modal__notice-cart");
  var notice_cart_close = document.querySelector(".modal__notice-cart .modal__close");
  var notice_cart_order = document.querySelector(".modal__notice-cart .notice-cart__order");
  var notice_cart_continue = document.querySelector(".modal__notice-cart .notice-cart__continue");

  /* modal: notice - item was added to the cart */
  notice_cart_links.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();

      closeModals();
      notice_cart_modal.parentElement.classList.add("modal--active");
      notice_cart_order.focus();
    });
  });

  notice_cart_continue.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModal(notice_cart_modal.parentElement);
  });

  notice_cart_close.addEventListener("click", function (evt) {
    evt.preventDefault();

    closeModal(notice_cart_modal.parentElement);
  });

})();

/* modal close */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModals();
  }
});

function closeModal(modal) {
  modal.classList.remove("modal--active");
  modal.classList.remove("modal--error");
}

function closeModals() {
  document.querySelectorAll(".modal.modal--active").forEach(function(item) {
    closeModal(item);
  });
}

/* services slider */
(function () {
  var services_buttons = document.querySelectorAll(".services__button");

  if (services_buttons === null) {
    return;
  }

  services_buttons.forEach(function (item) {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();

      let slide_id = item.dataset.id;
      let selected_slide_item = document.querySelector(".info-list__item[data-id=" + slide_id + "]");
      let services_items = document.querySelectorAll(".info-list__item");

      services_buttons.forEach(function (buttons) {
        buttons.classList.remove("services__button--active");
      });
      item.classList.add("services__button--active");

      services_items.forEach(function(slide) {
        slide.classList.add("visually-hidden");
      });
      selected_slide_item.classList.remove("visually-hidden");

    });
  })

})();
