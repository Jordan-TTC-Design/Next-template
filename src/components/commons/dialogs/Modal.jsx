const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  className = ''
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div 
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          ></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {title && (
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {title}
              </h3>
            )}
            <div className={className}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal 