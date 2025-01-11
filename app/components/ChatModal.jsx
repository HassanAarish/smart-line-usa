import { Icon } from "@iconify/react";

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If modal is not open, return nothing.

  return (
    <div className="w-full bg-white shadow-lg p-4 rounded-lg border border-gray-300">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="w-full flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <h3 className="font-bold text-gray-800">Hi there 👋</h3>
            <p className="text-sm text-gray-500">We reply immediately</p>
          </div>
        </div>
        <button onClick={onClose}>
          <Icon icon="mdi:close" width={20} height={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col space-y-2 mb-4">
        <div className="bg-gray-100 p-2 rounded-lg text-gray-700">
          I'm Online, let me know if you need any help!
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Yes, please!
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            No, thanks.
          </button>
        </div>
      </div>

      {/* Input Box */}
      <div className="flex items-center border-t pt-2">
        <input
          type="text"
          className="flex-grow px-2 py-1 border rounded-md focus:outline-none"
          placeholder="Type your message..."
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
