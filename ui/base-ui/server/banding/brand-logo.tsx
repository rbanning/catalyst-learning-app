import { combineCss, PropsWithClassName } from '@/common';
import logoImage from '@/public/app-images/catalyst-512.png';
import Image from 'next/image';

export function BrandLogo({
  size,
  className,
} : PropsWithClassName & { size?: number }) {
  size ??= 42;
  return (
    <Image 
      src={logoImage}
      alt="chemical reaction in a glass container on top of an idea light bulb"
      width={size}
      height={size}
      className={combineCss('aspect-square', className)}
    />
  )
}