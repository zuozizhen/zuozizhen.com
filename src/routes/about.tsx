import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "关于我 | 左子祯" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="flex mx-auto gap-20">
        <div className="w-full sm:mb-20 mb-10">
          <div className="mt-12">
            <h1 className="text-4xl font-semibold mb-3 text-neutral-800 leading-snug">关于我</h1>
          </div>
          <div className="prose prose-lg mt-6 max-w-full">
            <p>嗨, 我是左子祯。一名产品设计师和独立开发者，曾在锤子科技和字节跳动就职。</p>
            <p>日常工作主要是与产品、设计和用户体验相关，也会为初创公司提供专业的设计咨询和建议，业余时间投入在学习 Coding 和独立开发中。</p>
            <p><strong>作为产品设计师</strong>，我热衷于通过结合对产品的研究，极致的设计和对技术的理解来平衡的解决问题。</p>
            <p>2018 年，我创立了 <strong><a href="https://figmachina.com/" target="_blank" rel="noreferrer">FigmaChina</a></strong>，成为国内最早以中文内容介绍 Figma 的网站之一。</p>
            <p>2019 年，我加入了蓝湖，作为 <a href="https://mastergo.com" target="_blank" rel="noreferrer">MasterGo</a> 的一号员工负责从零到一打造这款产品。</p>
            <p><strong>作为独立开发者</strong>，我热爱技术的无限可能性和纯粹性，也致力于创造优秀的数字产品。</p>
            <p>作为个人，我平时会在<a href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79" target="_blank" rel="noreferrer">小红书</a>上分享我的经验和知识，也创办了周刊<a href="https://zuozizhen.substack.com" target="_blank" rel="noreferrer">堆栈 Stack</a>。</p>
            <h3>如何联系我</h3>
            <p>小红书：<a href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79" target="_blank" rel="noreferrer">左子祯</a></p>
            <p>Github: <a href="https://github.com/zuozizhen" target="_blank" rel="noreferrer">zuozizhen</a></p>
            <p>Twitter: <a href="https://twitter.com/zuozizhen" target="_blank" rel="noreferrer">@zuozizhen</a></p>
            <p>Email: <a href="mailto:hi@zuozizhen.com">hi@zuozizhen.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
