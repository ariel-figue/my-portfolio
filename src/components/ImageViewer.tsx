/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface ImageViewerProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewer = ({
  src,
  alt,
  width,
  height,
  className = "",
  isOpen,
  onClose,
}: ImageViewerProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close modal when clicking on overlay
    >
      <div
        className="relative rounded-lg shadow-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Display Image with Proper Scaling */}
        <div className="flex justify-center items-center">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-lg object-contain ${className}`}
            style={{
              width: "auto",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>
    </div>,
    document.body // Render modal in the root of the DOM
  );
};

export default ImageViewer;
