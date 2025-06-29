import React, { useEffect } from "react";
import type { ReactNode } from "react";
import styles from "./Modal.module.scss";
import { OverlayUI } from "../overlay-ui/Overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Базовый компонент модального окна с оверлеем.
 * Закрывается по нажатию клавиши Escape или клику на оверлей.
 * @param isOpen - Флаг, открыто ли модальное окно
 * @param onClose - Функция закрытия модального окна
 * @param children - Содержимое модального окна
 */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Обработчик нажатия клавиши Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <OverlayUI onClick={onClose} />
      <div className={styles.modal}>{children}</div>
    </>
  );
};
