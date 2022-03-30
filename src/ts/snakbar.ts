import { SNACK_BAR_DELAY_TIME } from './constants';

const generateSnackBarTemplate = (message: string): string => `
  <div class="snack-bar-container__snack-bar--error">
    <p class="snack-bar-container__message">${message}</p>
  </div>
`;

const renderSnackBar = (container: HTMLElement, message: string): void => {
  container.insertAdjacentHTML('beforeend', generateSnackBarTemplate(message));

  setTimeout(() => {
    const $snackBar = document.querySelector(
      '.snack-bar-container__snack-bar--error'
    );
    $snackBar.classList.add('hide');
    container.removeChild($snackBar);
  }, SNACK_BAR_DELAY_TIME);
};

export default renderSnackBar;
