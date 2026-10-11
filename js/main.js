const orderDialog = document.getElementById('order-dialog');
const openDialogButton = document.getElementById('open-callback-dialog');
const closeDialogButton = document.getElementById('close-order-dialog');
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

// Открытие модального окна обратного звонка
if (openDialogButton) {
  openDialogButton.addEventListener('click', () => {
    orderDialog.showModal();
  });
}

// Закрытие модального окна
if (closeDialogButton) {
  closeDialogButton.addEventListener('click', () => {
    orderDialog.close();
  });
}

// Базовая HTML/JS валидация формы звонка
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formElements = Array.from(orderForm.elements);
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    if (!orderForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      orderForm.reportValidity();
      return;
    }

    if (successMessage) {
      successMessage.hidden = false;
    }
    orderForm.reset();
    orderDialog.close();
  });
}
