import Container from '@/components/Container';
import Image from 'next/image';
export default function WeChat() {
  return (
    <Container title="微信公众号">
      <div className="flex flex-col items-center">
        <div className="w-60 h-60 relative border-4 border-gray-300 dark:border-gray-600 overflow-hidden rounded-3xl mx-auto">
          <Image
            src="/look-z-qr.png"
            alt="avatar"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="my-8 prose font-medium text-gray-600 dark:text-gray-400">
          <p>关注我的个人公众号 👉 向左看</p>
        </div>
      </div>
    </Container>
  );
}
