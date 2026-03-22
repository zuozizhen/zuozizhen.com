export const metadata = {
  title: "微信公众号"
};

export default function WechatPage() {
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-32">
      <div className="flex justify-center">
        <img
          src="https://imagedelivery.net/8B08sdLvw783CQcaKhUoYw/7ea8e596-ee1f-42cd-2c3e-60748825b500/public"
          className="mx-auto w-56 border border-neutral-200 rounded-xl"
          alt="公众号二维码"
        />
      </div>
    </section>
  );
}
