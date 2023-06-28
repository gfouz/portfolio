import * as React from 'react';
import s from './Resetbutton.module.scss';
import { useRouter } from 'next/navigation';

function ResetButton() {
  const router = useRouter();

  function handleBackwardsButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();
    router.push('/provincia');
  }
  return (
    <div className={s.buttonContainer}>
      <button
        className={s.resetButton}
        onClick={(evt) => {
          handleBackwardsButton(evt);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default ResetButton;
