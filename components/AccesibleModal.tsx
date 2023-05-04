import { FC, useState } from "react"
import ReactDOM from "react-dom";

const AccessibleModal: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOverlayClick = ({ target }: React.MouseEvent): void => {
    if (!(target as HTMLDivElement).matches('[aria-modal="true"] *')) {
      setIsVisible(false);
    }
  };

  return (
    <div>
      {isVisible && ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/30" aria-modal='true' onClick={handleOverlayClick}>
          <div className="bg-white p-5 rounded-lg shadow-lg" role="dialog">I am an accessible modal! 🚀 If you want to close me just click around</div>
        </div>
        , document.body)
      }
      <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsVisible(true)}>Open modal</button>

    </div >
  );
};

export default AccessibleModal;