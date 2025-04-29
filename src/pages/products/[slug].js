import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import products from '@/data/products';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <Image src={product.image} alt={product.name} width={600} height={600} className="rounded mb-4" />
        <p className="mb-4">{product.description}</p>
        <VideoPlayer src={product.video} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((p) => ({
    params: { slug: p.slug },
  }));

  return { paths, fallback: true };
}
