"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { toast } from "@/hooks/use-toast";
import Image from "next/image";

const MAX_IMAGES = 4;

export function ImageUploader() {
  const [images, setImages] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prevImages) => {
      const newImages = [...prevImages, ...acceptedFiles];
      if (newImages.length > MAX_IMAGES) {
        toast({
          title: "Maximum images reached",
          description: `You can only upload a maximum of ${MAX_IMAGES} images.`,
          variant: "destructive",
        });
        return prevImages;
      }
      return newImages.slice(0, MAX_IMAGES);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: MAX_IMAGES,
  });

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full  mx-auto">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:border-primary"
        } ${
          images.length >= MAX_IMAGES ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <input {...getInputProps()} disabled={images.length >= MAX_IMAGES} />
        {isDragActive ? (
          <p className="text-primary">Drop the images here ...</p>
        ) : images.length >= MAX_IMAGES ? (
          <p>Maximum number of images reached</p>
        ) : (
          <p>
            Drag &apos;n&apos; drop some images here, or click to select images
            (max 4)
          </p>
        )}
      </div>

      {images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">
            Image Previews ({images.length}/{MAX_IMAGES})
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                  width={40}
                  height={40}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                  aria-label={`Remove image ${index + 1}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
