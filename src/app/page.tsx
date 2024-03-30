"use client";
import Image from "next/image";

import * as LR from "@uploadcare/blocks";
import { useState } from "react";
import ImagesUploader from "@/components/ImageUploader/ImagesUploader";

LR.registerBlocks(LR);

export default function Home() {
  const [imageIds, setImageIds] = useState<string[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImagesUploader />
      <div></div>
    </main>
  );
}
