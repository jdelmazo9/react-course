import { FC, useEffect, useRef, useState } from "react"

const AccessibleModal: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const assertIsNode: (e: EventTarget | null) => asserts e is Node = (e) => {
    if (!e || !("nodeType" in e)) {
      throw new Error(`Node expected`);
    }
  }

  useEffect(() => {
    const listener = ({ target }: MouseEvent): void => {
      assertIsNode(target);
      if (!ref.current || ref.current.contains(target as Node)) {
        return;
      }
      setIsVisible(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref.current],
  );

  return (
    <div>
      {isVisible &&
        <div className="fixed inset-0 flex items-center justify-center bg-black/30" aria-modal='true'>
          <div className="bg-white p-5 rounded-lg shadow-lg" role="dialog" ref={ref}>I am an accessible modal! 🚀 If you want to close me just click around</div>
        </div>}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsVisible(true)}>
        Open modal
      </button>
    </div >
  );
};

export default AccessibleModal;