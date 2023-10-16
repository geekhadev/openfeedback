import { createPortal } from 'react-dom'
import style from './modals.module.css'

const Modal = ({ children, close }) => {
  return createPortal(
    <div onClick={close} className={`modal ${style.customParentStyles}`}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <button className={style.close} onClick={close} />
          {children}
        </div>
      </div>
    </div>,
    window.document.body // El elemento DOM fuera de la jerarquía principal
  )
}

export default Modal
