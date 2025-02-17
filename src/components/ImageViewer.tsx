/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';

interface ImageViewerProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isOpen?: boolean;
}

const ImageViewer = ({
  src,
  alt,
  width,
  height,
  className = "",
  isOpen: isOpenProp = false,
}: ImageViewerProps) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const [selectedImage, setSelectedImage] = useState(src);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const openModal = (imageSrc: string | StaticImageData) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} rounded-lg mb-4 cursor-pointer hover:opacity-85`}
        onClick={() => openModal(src)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-4 rounded-lg relative max-w-[75vw]">
            <img
              src={typeof selectedImage === 'string' ? selectedImage : selectedImage.src}
              alt="Enlarged view"
              className="max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-0 right-0 p-2 bg-white rounded-full"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;

