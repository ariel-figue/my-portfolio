/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
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

  const openModal = (imageSrc: string | StaticImageData) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} rounded-lg mb-4 cursor-pointer`}
        onClick={() => openModal(src)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
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

