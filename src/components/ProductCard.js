import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <Image src={product.image} alt={product.name} width={400} height={400} className="rounded mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
    </Link>
  );
}
